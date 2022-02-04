import  { Component } from "react";
//import $ from 'jquery';
import BookItem  from "./BookItem";




class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }


    GetBooks() {
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes")
            .then(response => response.json())
            .then(data => {

                this.setState({ books: data.items })
                console.log(this.state.books);

            });

    }

    componentWillMount() {
        this.GetBooks();
    }

    componentDidMount() {
        //$('#myHeader').html('Book Store').hide();        
    }



    render() {
        return (<>
            <div id="myHeader">Books</div>
            <ul className="list-group">
                {this.state.books.map((d,index) =>
                    <li key={index} className="list-group-item" >
                        <BookItem bookData={d} showDetail={false}></BookItem>
                    </li>
                )}
            </ul>
        </>)

    }

}

export default Books;

