'use client'

import Map from '@/components/Map'
import { useState } from 'react'
import { Trail } from '@/types/Trail'
import TrailList from '@/components/TrailList'
import FilterBar from '@/components/FilterBar'

export default function Home() {
  const [selectedTrail, setSelectedTrail] = useState<Trail | null>(null)
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null)

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-2/3 h-[400px] md:h-screen">
      <h1 className="text-3xl font-bold mb-4">Trail Mix</h1>
        <Map selectedTrail={selectedTrail} />
      </div>
      <div className="md:w-1/3 border-l border-gray-200">
        <FilterBar selected={difficultyFilter} onChange={setDifficultyFilter} />
        <TrailList 
          onSelectTrail={(trail) => {
            setSelectedTrail(trail)
          }}
          difficultyFilter={difficultyFilter}
          selectedTrail={selectedTrail}
        />
      </div>
    </main>
  )
}
