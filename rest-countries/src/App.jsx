import Header from './Components/Header.jsx' 
import './App.css'
import SearchBar from './Components/SearchBar.jsx'
import SelectMenu from './Components/SelectMenu.jsx'
import CountriesList from './Components/CountriesList.jsx'

function App() {
 return (
    <>
      <Header />
      <main>
          <div className='search-filter-container'>
            <SearchBar/>
            <SelectMenu />
      
         </div>
         <CountriesList/>

         
       </main>
    </> 
  )
 
}

export default App