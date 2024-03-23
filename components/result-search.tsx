import { DictionaryEntry as DictionaryEntryType } from '@/types'
import React from 'react'
import DictionaryEntry from './dictionary-entry'

type ResultSearchProps = {
  data: DictionaryEntryType[]
}

const ResultSearch = ({data}: ResultSearchProps ) => {
  console.log(data)
  return (
    <div className=''>
      {!data.length && <p className="text-center text-2xl dark:text-white-smoke text-black">No results found</p>}
      {data.map((entry) => (
        <DictionaryEntry key={entry.word} entry={entry} />
      ))}	
    </div>
  )
}

export default ResultSearch