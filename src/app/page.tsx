'use client'

import Map from '@/components/Map'
import { useState, useEffect } from 'react'
import TrailList from '@/components/TrailList'
import FilterBar from '@/components/FilterBar'
import { GraphQLAPI } from '@aws-amplify/api-graphql'
import { generateClient } from 'aws-amplify/api'
import { listTrails } from '../graphql/queries' 
import { Trail, ListTrailsQuery } from '../API'

const client = generateClient()

export default function Home() {
  const [selectedTrail, setSelectedTrail] = useState<Trail | null>(null)
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null)
  const [trails, setTrails] = useState<Trail[]>([])

    useEffect(() => {
        const fetchTrails = async () => {
            try {
                const result = await client.graphql<ListTrailsQuery>({
                query: listTrails,
                authMode: 'apiKey'
            })
                if ('data' in result && result.data?.listTrails?.items) {
                    const items = result.data.listTrails.items.filter(Boolean) as Trail[]
                    setTrails(items)
                }
            } catch (err) {
                console.error('Error fetching trails:', err)
            }
        }
    
        fetchTrails()
    }, [])

  return (
        <main className="flex flex-col md:flex-row h-[100vh]">
            <div className="md:w-2/3 w-full h-[50vh] md:h-full">
                <h1 className="text-3xl font-bold mb-4">Trail Mix</h1>
                <Map 
                    selectedTrail={selectedTrail} 
                    trails={trails}
                />
            </div>
            <div className="md:w-1/3 w-full overflow-y-auto max-h-[50vh] md:max-h-full border-r">
                <FilterBar selected={difficultyFilter} onChange={setDifficultyFilter} />
                <TrailList 
                    onSelectTrail={(trail) => {
                        setSelectedTrail(trail)
                    }}
                    difficultyFilter={difficultyFilter}
                    selectedTrail={selectedTrail}
                    setTrails={setTrails}
                    trails={trails}
                />
            </div>
        </main>
  )
}
