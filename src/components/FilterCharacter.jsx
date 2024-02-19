import '../scss/core/filters.scss';
import PropTypes from 'prop-types';

function FilterCharacter({ handleCharacter }) {
    return (
        <label className="form_p">
            Filtar por personaje:
            <select
                className="form_div"
                onChange={(ev) => {
                    handleCharacter(ev.target.value);
                }}
            >
                <option value="Chandler">Chandler</option>
                <option value="Joey">Joey</option>
                <option value="Phoebe">Phoebe</option>
                <option value="Rachel">Rachel</option>
                <option value="Roos">Roos</option>
            </select>
        </label>
    );

}
FilterCharacter.propTypes = {
    handleCharacter: PropTypes.func,
}

export default FilterCharacter;
