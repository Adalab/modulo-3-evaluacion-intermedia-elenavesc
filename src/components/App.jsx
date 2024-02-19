import '../scss/App.scss'
import Filters from './Filters'
import FilterCharacter from './FilterCharacter';
import quotes from '../../api.json';
import QuotesList from './QuotesList';
import { useState } from 'react';

function App() {
  const [data, setData] = useState (quotes)
  const [filterQuote, setFilterQuote] = useState('');
  const handleFilterTitle = (filterValue) => {
    setFilterQuote(filterValue);
  }
  const handleFilterCharacter = (filterValue) => {
    setFilterCharacter(filterValue);
  }
  const filterQuotes = data.filter((item)=> item.quote.toLowerCase().includes((filterQuote.toLocaleLowerCase())));
  const filterCharacter = (value) => {
    setFilterCharacter(value);
  }
  
  return (
    <div className="app">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <Filters handleFilterTitle={handleFilterTitle} />
      <FilterCharacter filterCharacter={filterCharacter} handleFilterCharacter={handleFilterCharacter} />
      <QuotesList filterQuotes={filterQuotes} quotes={quotes}/>
    </div>
  )
}

export default App
