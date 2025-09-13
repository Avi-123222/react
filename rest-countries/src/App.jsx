import Header from './Components/Header.jsx' 
import './App.css'
import SearchBar from './Components/SearchBar.jsx'
import SelectMenu from './Components/SelectMenu.jsx'
import CountriesList from './Components/CountriesList.jsx'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')

  return (
    <>
      <Header />
      <main>
        <div className='search-filter-container'>
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  )
}

export default App