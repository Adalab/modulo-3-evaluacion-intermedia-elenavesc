import '../scss/core/filters.scss'
function Filters() {
  return (
    <div className="filters">
      <main>
        <form className="form">
          <div className='form__div'>
            <p className="form__p">
              Filtrar por frase
              <input className="input" type="text" value="" />
            </p>
            <p className="form__p">
              Filtrar por personajes
              <input className="input" type="text" placeholder="Todos" value="" />
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Filters;
