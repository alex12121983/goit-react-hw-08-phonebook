import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterReducer';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
	const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
        <div className={css.filter}>
            <h3>Find contacts by name</h3>
            <input 
                className={css.filter_input} 
                type="text" 
                value={filter}
                onChange={evt => dispatch(setFilter(evt.target.value.trim()))}
            />
        </div>
    )
}

export default Filter;
