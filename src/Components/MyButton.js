import React, { useState } from 'react';

function MyButton(props) {
    const [colorValue, setColorValue] = useState(props.color);
    const [bgColorValue, setbgColorValue] = useState(props.backgroundColor);
    const styles = {
        color: colorValue,
        backgroundColor: bgColorValue
    };

    const ChangeColor = (color, bgColor) => {
        setColorValue(color);
        setbgColorValue(bgColor);
    }

    return <>
    <span className="m-1">
        <button  id={props.id} style={styles} className="btn btn-primary btn-lg "
            onMouseOver={() => { ChangeColor(props.howerColor, props.howerBackgroundColor) }}
            onMouseLeave={() => { ChangeColor(props.color, props.backgroundColor) }}
            onClick={() => { props.UpdateMessageBox(props.title); }} >{props.title}</button>
            </span>
    </>;
}

export default MyButton;
