import React from 'react'

export default function SearchBar() {
  return (
    <div className='search-section'>
        <form onSubmit={(e) => {
          e.preventDefault()
          const query = document.getElementById('input-query').value
          location.replace(`/search/${query}`)
        }}>
          <label>
            <input type="search" id="input-query" />
          </label>
          <input type="submit" id="submit-search" className="hide-button" />
        </form>
    </div>
  )
}
