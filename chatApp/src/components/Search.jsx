import React from 'react'
import "../styles/Search.css"

function Search() {
  return (
    <div className='search'>
      <input className='search-input' type="text" placeholder='Find user by name...' />
      </div>
  )
}

export default Search