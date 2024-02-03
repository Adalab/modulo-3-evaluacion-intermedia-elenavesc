import '../scss/App.scss'
import Filters from './Filters'
import QuoteItem from './QuoteItem'
import quotes from '../../api.json';
import QuotesList from './QuotesList';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <Filters/>
      <QuotesList quotes={quotes}/>
    </div>
  )
}

export default App
