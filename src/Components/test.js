import React, { useState, useEffect } from 'react';

import MyButton from './MyButton';

function Test() {
    const [boxValue, setBoxValue] = useState('I am a box');
    const style = {
        'color': 'red', 'font-size': '10px'

    };

    const howerStyles = {
        'font-size': '20pt',
        'font-wight': 'bold',
    };
    const normalStyles = {
        'font-size': '12pt',
        'font-wight': 'normal',
    };
    const [boxValueStyle, setBoxStyleValue] = useState(normalStyles);
    useEffect(() => {

        return () => {

            setBoxStyleValue(howerStyles);

            setTimeout(() => {
                setBoxStyleValue(normalStyles);
            }, 300);

        };
    }, [boxValue]);

    const UpdateMessageBox = (title) => {
        setBoxValue(title);
    }


    const myButtons = [
        {
            'id': 'btn1',
            'color': 'green',
            'backgroundColor': "white",
            'howerBackgroundColor': "green",
            'howerColor': "white",
            'title': 'Hello',
            'UpdateMessageBox': UpdateMessageBox
        },
        {
            'id': 'btn2',
            'color': 'red',
            'backgroundColor': "yellow",
            'howerBackgroundColor': "green",
            'howerColor': "white",
            'title': 'Bye',
            'UpdateMessageBox': UpdateMessageBox
        },
        {
            'id': 'btn3',
            'color': 'white',
            'backgroundColor': "black",
            'howerBackgroundColor': "green",
            'howerColor': "white",
            'title': 'Test2',
            'UpdateMessageBox': UpdateMessageBox
        }]

    return (<>

        <div className="border" >Hello World from zee</div>


        <div className="border p-5"  >
            {myButtons.map((btn, index) => {
                return <MyButton key={index} {...btn} ></MyButton>
            })}
        </div>
        <div id="messageBox" style={boxValueStyle}>{boxValue}</div>
    </>
    );
}

export default Test;
