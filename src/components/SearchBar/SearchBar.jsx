import { useDispatch } from 'react-redux'
import { filterContacts } from '../../redux/filters/slice'
import css from './SearchBar.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(filterContacts(event.target.value));
  }

  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text"
        className={css.input}
        name='filter'
        onChange={handleSearch} />
    </div>
  )
}