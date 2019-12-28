import React from 'react'
import { filterTypes, useFilter, setFilter } from '../redux/filter'

export const Footer = () => {
  const currentFilter = useFilter()
  return <div>
    <span>Show: </span>
    {Object.keys(filterTypes).map((name) =>
      <button
        onClick={() => setFilter(name)}
        disabled={currentFilter === filterTypes[name]}
        style={{marginLeft: '4px'}}
      >{name}</button>
    )}
  </div>
}