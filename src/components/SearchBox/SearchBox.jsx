import css from "./SearchBox.module.css";
import { changeFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
  
  const filters = useSelector((state) => state.filters.filters.name);
  // console.log(filters);
  
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.div}>
      <p className={css.label}>First contacts by name</p>
      <input
        type="text"
        value={filters}
        onChange={onChange}
        
      />
    </div>
  );
}
