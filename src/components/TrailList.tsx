'use client'

import { Trail } from '@/types/Trail'
import { trails } from '@/data/trails'
import { useState, useEffect } from 'react'

interface TrailListProps {
    onSelectTrail?: (trail: Trail) => void
    difficultyFilter?: string | null
    selectedTrail?: Trail | null
}

const TrailList = ({ onSelectTrail, difficultyFilter, selectedTrail }: TrailListProps) => {
    const [savedTrailIds, setSavedTrailIds] = useState<number[]>([])
    const filteredTrails = difficultyFilter ? trails.filter((trail) => trail.difficulty === difficultyFilter) : trails

    useEffect(() => {
        const saved = localStorage.getItem('savedTrails')
        if (saved) {
            setSavedTrailIds(JSON.parse(saved))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('savedTrails', JSON.stringify(savedTrailIds))
    }, [savedTrailIds])
    
    return (
        <div className='space-y-4 overflow-y-auto p-4 bg-white md:max-h-screen'>
            {filteredTrails.length === 0 ? (
                <p className='text-center text-gray-500'>No trails match your filters. That's buns.</p>
            ) : (
                filteredTrails.map((trail) => {
                    const isSelected = selectedTrail?.id === trail.id
                    const isSaved = savedTrailIds.includes(trail.id)
                    console.log('rendering trail: ', trail.name, 'isSelected', isSelected, 'selectedTrailId', selectedTrail?.id, 'trailid', trail.id)
                    return (
                        <div
                            key={trail.id}
                            onClick={()=> onSelectTrail?.(trail)}
                            className={`cusor-pointer border rounded p-4 transition ${isSelected ? 'bg-green-50' : 'hover:bg-gray-100'}`}
                        >
                            <h2 className='text-lg font-semibold text-gray-900'>{trail.name}</h2>
                            <p className='text-sm text-gray-600'>
                                Distance: {trail.distanceMiles} mi | Elevation: {trail.elevationGain} ft
                            </p>
                            <p className='text-sm text-gray-600'>Difficulty: {trail.difficulty}</p>
                            {isSelected && (
                                <div className='mt-4'>
                                    {trail.imageUrl && (
                                        <img 
                                            src={trail.imageUrl} 
                                            alt={trail.name}
                                            className='w-full h-40 object-cover rounded mb-2'
                                        />
                                    )}
                                    <p className='text-sm text-gray-700 mb-2'>{trail.description}</p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setSavedTrailIds((prev) => 
                                                isSaved
                                                    ? prev.filter((id) => id !== trail.id)
                                                    : [...prev, trail.id]
                                            )
                                        }}
                                        className={`px-3 py-1 rounded text-sm ${
                                            isSaved
                                                ? 'bg-gray-300 text-gray-600 cursor-default'
                                                : 'bg-green-600 text-white hover:bg-green-700'
                                        }`}    
                                    >
                                        {isSaved ? 'Saved! (Sort of)' : 'Save Trail'}
                                    </button>
                                </div>
                            )}
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default TrailList
