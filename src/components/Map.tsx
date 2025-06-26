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
            .setLngLat([trail.longitude, trail.latitude])
            .setPopup(popup)
            .addTo(map)

            popupRefs.current[trail.id] = popup
        })

        // Cleanup
        return () => map.remove()
    }, [])

    // Fly to selected trail when it changes
    useEffect(() => {
        console.log('Selected trail updated:', selectedTrail?.name)
        if (!selectedTrail || !mapRef.current) return

        mapRef.current.flyTo({
            center: [selectedTrail.longitude, selectedTrail.latitude],
            zoom: 12,
            speed: 1.2,
        })

        const popup = popupRefs.current[selectedTrail.id]
        if (popup) {
            popup.addTo(mapRef.current)
        }
    }, [selectedTrail])

    return <div ref={mapContainerRef} className="w-full h-full" />
}


export default Map

