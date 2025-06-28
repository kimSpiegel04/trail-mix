'use client'

import { Trail } from '@/types/Trail'

interface TrailModalProps {
    trail: Trail
    onClose: () => void
}

const TrailModal = ({ trail, onClose }: TrailModalProps) => {
    return (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl'>
                <button 
                    onClick={onClose}
                    className='absolute top-2 right-2 text-gray-500 hover:text-black text-xl'
                >
                    x
                </button>
                {trail.imageUrl && (
                    <img 
                        src={trail.imageUrl}
                        alt={trail.name}
                        className='w-full h-48 object-cover rounded mb-4'
                    />
                )}
                <h2 className='text-2xl font-bold text-gray-900 mb2'>{trail.name}</h2>
                <p className='text-sm text-gray-700 mb-4'>{trail.description}</p>
                <ul className='text-sm text-gray-600 space-y-1'>
                    <li>Distance: {trail.distanceMiles}</li>
                    <li>Elevation Gain: {trail.elevationGain}</li>
                    <li>Difficulty: {trail.difficulty}</li>
                </ul>
            </div>
        </div>
    )
}

export default TrailModal