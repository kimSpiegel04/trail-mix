'use client'

interface FilterBarProps {
    selected: string | null
    onChange: (value: string | null) => void
}

const difficulties = ['Easy', 'Moderate', 'Hard']

const FilterBar = ({ selected, onChange }: FilterBarProps) => {
    return (
        <div className="flex gap-2 p-4">
            {difficulties.map((diff) => (
                <button
                    key={diff}
                    onClick={() => onChange(diff === selected ? null : diff)}
                    className={`px-3 py-1 rounded-full text-sm border 
                        ${selected === diff ? 'bg-green-600 text-white border-green-600' : 'border-gray-300'}`}
                    >
                    {diff}
                </button>
            ))}
            {selected && (
                <button
                    onClick={() => onChange(null)}
                    className="x-3 py-1 rounded-full text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 ml-auto"
                >
                    Clear Filters
                </button>
            )}
        </div>
    )
}

export default FilterBar
