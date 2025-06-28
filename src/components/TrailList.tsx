'use client'

import { Trail } from '@/types/Trail'
import { trails } from '@/data/trails'

interface TrailListProps {
    onSelectTrail?: (trail: Trail) => void
    difficultyFilter?: string | null
}

const TrailList = ({ onSelectTrail, difficultyFilter }: TrailListProps) => {
    const filteredTrails = difficultyFilter ? trails.filter((trail) => trail.difficulty === difficultyFilter) : trails

    return (
        <div className="space-y-4 overflow-y-auto p-4 bg-white md:max-h-screen">
            {filteredTrails.length === 0 ? (
                <p className='text-center text-gray-500 p-4'>No trails matched your filters. That's buns.</p>
            ) : (
                filteredTrails.map((trail) => (
                    <div
                        key={trail.id}
                        onClick={() => onSelectTrail?.(trail)}
                        className="cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                        <h2 className="text-lg font-semibold text-gray-900">{trail.name}</h2>
                        <p className="text-sm text-gray-600">
                            Distance: {trail.distanceMiles} mi
                        </p>
                        <p className="text-sm text-gray-600">
                            Elevation Gain: {trail.elevationGain} ft
                        </p>
                        <p className="text-sm text-gray-600">Difficulty: {trail.difficulty}</p>
                    </div>
                ))
            )}
            
        </div>
    )
}

export default TrailList
