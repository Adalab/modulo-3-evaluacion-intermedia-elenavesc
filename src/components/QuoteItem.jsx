import '../scss/core/quoteitem.scss'

function QuoteItem({quote,character}) {
    return (
      <div className="item">
        <p className="item__quote"> {quote} </p>
        <p> - </p>
        <p className="item__character">{character} </p>
      </div>
    )
  }
  
  export default QuoteItem
  