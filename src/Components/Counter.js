import React, { useState } from "react";
import { connect } from 'react-redux';
import { inc, dec } from "../Redux/ActionCreator/Action";
const Counter = ({ count, onIncrement, onDecrement }) => {
    const [_count, setCount] = useState(count);

    return (
        <>
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={() => {
                        onDecrement(1);
                        setCount(count);
                    }}>-</button>
                    <span>redux: {count}</span>
                    <br />
                    <span>component State {_count}</span>
                    <button onClick={() => { console.log("func" + count + "," + _count); onIncrement(1); setCount(count); }}>+</button>
                </div>
            </div>
        </>
    )


}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
}

const mapDispatchToProps = (dispatch) => ({
    onIncrement: num => dispatch(inc(num)),
    onDecrement: num => dispatch(dec(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
