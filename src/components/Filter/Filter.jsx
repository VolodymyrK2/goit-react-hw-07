
import PropTypes from 'prop-types'
import css from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = (e)=>dispatch(changeFilter(e.target.value))
  return (
    <>
      <p className={css.filter__text}>Find contacts by name</p>
      <input className={css.filter__input}
        name='filter'
        type="text"
        value={filter}
        onChange={handleFilterChange} />
      </>
  )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func 
}

export default Filter