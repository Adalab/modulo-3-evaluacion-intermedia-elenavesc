import '../scss/core/filters.scss'
import PropTypes from 'prop-types';

function Filters({ handleFilterTitle }) {
  const handleInput = (event) => {
    handleFilterTitle(event.target.value)
  };
  

  return (
    <div className="filters">
      <main>
        <form className="form">
          <div className='form__div'>
            <p className="form__p">
              Filtrar por frase:
              <input className="input" type="text" onInput={handleInput} />
            </p>
            
          </div>
        </form>
      </main>
    </div>
  );
}
  Filters.propTypes = {
    handleFilterTitle: PropTypes.func,
  }

export default Filters;
