import QuoteItem from './QuoteItem'
import '../scss/core/quotelist.scss'

function QuotesList({quotes}) {
  console.log (quotes[0].quote)
    return (
      <div className="List">
        <ul>
          {quotes.map((quote, index) => (
          <li className='List__item' key={index}>
            <QuoteItem quote={quote.quote} character={quote.character}/>
          </li>))}
        </ul>
     
      </div>
    )
  }
  
  export default QuotesList
  