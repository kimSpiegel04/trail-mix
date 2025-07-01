import type { LineString } from 'geojson'

export interface Trail {
    id: string
    name: string
    latitude: number
    longitude: number
    distanceMiles: number
    elevationGain: number
    difficulty: 'Easy' | 'Moderate' | 'Hard'
    description?: string
    imageUrl?: string
    trailPath?: LineString
}