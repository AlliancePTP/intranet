import React, { useState } from 'react';


export default function SearchBar({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    // Call API with user's search query
    const res = await fetch(`api/search?q=${searchQuery}`)
    const json = await res.json()

    // Update state with fetched data
    setSearchResults(json.results)
  }

  return (
    <form className="flex items-center order-1 w-full mt-4 mb-4 sm:mt-0 md:ml-4 md:max-w-sm md:order-2 md:mb-0" onSubmit={handleSearch}>
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
      </div>
      <input type="search" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Find anything" required value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium bg-primary-700 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <span className="sr-only">Search</span>
          </button>

      </form>
  )
}
