import  { useEffect, useState } from "react";
import { decrement, increment, incrementByAmount } from '../Redux/Slice/counterSlice'
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

const BookItem = (props) => {

    const [bookData, setBookData] = useState({ data: props.bookData, showDetail: false });
    const BookReadCount = useSelector((state) => state.counter.BookReadCount);
    
    const dispatch = useDispatch()


    function ShowDetail() {
        setBookData({ data: props.bookData, showDetail: !bookData.showDetail });
    }

    useEffect(() => {

        bookData.showDetail ?
            $('#btnDetail').html("Hide Details")
            :
            $('#btnDetail').html("Show Details");


    }, [bookData.showDetail]);


    return (

        <>
            <div className="card" style={{ "width": "30%", "float": "left" }}>


                <div className="card-body">

                    <h5 className="card-title">  {bookData.data.volumeInfo.title}</h5>

                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text"><button id="btnDetail" onClick={ShowDetail}>Show Details</button></p>
                    <div>
                        <button
                            aria-label="Increment value"
                            onClick={() => dispatch(increment(bookData.data.id))}
                        >
                            Increment
                        </button>

                        <p >
                            {(BookReadCount.BookID == bookData.data.id) ? (<span>{BookReadCount.ReadCount}</span>) :
                                (<span>0</span>)}
                        </p>

                        <button
                            aria-label="Decrement value"
                            onClick={() => dispatch(decrement(bookData.data.id))}
                        >
                            Decrement
                        </button><button
                            aria-label="Increment by amount"
                            onClick={() => dispatch(incrementByAmount(2))}
                        >
                            Increment by amount
                        </button>
                    </div>
                </div>



            </div>
            <div className="card" style={{ "width": "68%", "float": "left" }}>
                {bookData.showDetail ?
                    <>

                        <div className="card-body">
                            Author: <span >{bookData.data.volumeInfo.authors}</span>  <br></br>
                            <img className="img-thumbnail" alt="Card image cap" src={bookData.data.volumeInfo.imageLinks.smallThumbnail} />
                        </div>
                    </>
                    : null

                }

            </div>
        </>

    )

}

export default BookItem;