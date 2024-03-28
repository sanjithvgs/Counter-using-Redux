// import './../styles/counter.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, decrease, increase } from '../reducers/counterReducer';


const Counter = ({ label, theme }) => {
    const className = `counter-wrapper ${theme}`;
    // const [count, setCount] = useState(0);

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increase());
    };

    const handleDecrease = () => {
        dispatch(decrease());
    };

    const handleUpdate = (e) => {
        const val = Number(e.target.value || 0);
        dispatch(change(val));  

    return (
        <div className={className}>
            <h1>Counter {label}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>  { /* In JS: onclick="handleDecrease()" */}
                {count}
                <input type="number" placeholder='New Value' value={count} onChange={handleUpdate}/>
                <button  onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}
}



export default Counter;