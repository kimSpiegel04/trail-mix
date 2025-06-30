'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { trails } from '@/data/trails'
import { Trail } from '@/types/Trail'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string

const DEFAULT_COORDS = {
    lng: -106.4454, // Colorado center-ish
    lat: 39.5501,
    zoom: 6,
}

interface MapProps {
    selectedTrail?: Trail | null
}

const Map = ({ selectedTrail }: MapProps) => {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const popupRefs = useRef<Record<number, mapboxgl.Popup>>({})
    const currentPopupRef = useRef<mapboxgl.Popup | null>(null)

    useEffect(() => {
        if (!mapContainerRef.current) return

            const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [DEFAULT_COORDS.lng, DEFAULT_COORDS.lat],
            zoom: DEFAULT_COORDS.zoom,
        })

        // Add zoom + rotation controls
        map.addControl(new mapboxgl.NavigationControl(), 'top-right')

        mapRef.current = map

        // Add markers
        trails.forEach((trail) => {
            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <h3>${trail.name}</h3>
                <p>Distance: ${trail.distanceMiles} miles<br/>
                Elevation Gain: ${trail.elevationGain} ft<br/>
                Difficulty: ${trail.difficulty}</p>
            `)
        
            const marker = new mapboxgl.Marker({ color: '#228B22' })
            marker
                .setLngLat([trail.longitude, trail.latitude])
                .setPopup(popup)
                .addTo(map)

            popupRefs.current[trail.id] = popup
        })

        // Cleanup
        return () => map.remove()
    }, [])

    // Fly to selected trail when it is selected, handle popups, add trail lines
    useEffect(() => {
        if (!selectedTrail || !mapRef.current) return
        
        mapRef.current.flyTo({
            center: [selectedTrail.longitude, selectedTrail.latitude],
            zoom: 12,
            speed: 1.2,
        })

        // cleanup the old popups
        if (currentPopupRef.current) {
            currentPopupRef.current.remove()
        }
        // add popup
        const popup = popupRefs.current[selectedTrail.id]
        if (popup) {
            popup.addTo(mapRef.current)
            currentPopupRef.current = popup
        }

        // trail line layovers
        if (!mapRef.current || !selectedTrail?.trailPath) return

        const map = mapRef.current
      
        // Cleanup existing layer + source
        if (map.getLayer('trail-line')) {
            map.removeLayer('trail-line')
        }
        if (map.getSource('trail-line')) {
            map.removeSource('trail-line')
        }
      
        // Add new source
        map.addSource('trail-line', {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: selectedTrail.trailPath,
                properties: {} // for metadata later
            },
        })
      
        // Wait a tick for the source to register
        map.on('sourcedata', function handleSource(e) {
          if (e.sourceId === 'trail-line' && e.isSourceLoaded) {
            // Now add the layer
            if (!map.getLayer('trail-line')) {
              map.addLayer({
                id: 'trail-line',
                type: 'line',
                source: 'trail-line',
                layout: {
                  'line-join': 'round',
                  'line-cap': 'round',
                },
                paint: {
                  'line-color': '#10B981',
                  'line-width': 4,
                },
              })
            }
      
            map.off('sourcedata', handleSource) // clean up listener
          }
        })

    }, [selectedTrail])

    return <div ref={mapContainerRef} className="w-full h-full" />

}


export default Map

