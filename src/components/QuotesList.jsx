import QuoteItem from './QuoteItem'
import '../scss/core/quotelist.scss'

function QuotesList({quotes, filterQuotes}) {
    return (
      <div className="List">
        <ul>
          {filterQuotes.map((quote, index) => (
          <li className='List__item' key={index}>
            <QuoteItem quote={quote.quote} character={quote.character}/>
          </li>))}
        </ul>
     
      </div>
    )
  }
  
  export default QuotesList
  