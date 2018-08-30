import React, {Component} from 'react'

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {bookTitle: "",  //setting the value of the text field to empty string so information can be passed in it and will make the text feild go back blsnk once information is passed through
            bookGenre: ""}
    }

    bookTitleChange = (event) => { //settin value of book title entered
        this.setState({bookTitle: event.target.value});

    }
    bookGenreChange = (event) => {   // setting value of book genre entered
        this.setState({bookGenre: event.target.value});
    }
    submitFunction = (event) => {    //function that runs on submit and returnes input + strings
        this.setState({input: ("You ordered the book: " + this.state.bookTitle + "," +" and it is from the " + this.state.bookGenre + " genere. ")})
        event.preventDefault(); //prevents page from reloading
    }

    render() {
        return (
            <div>
            <form onSubmit={this.submitFunction}>
    <h1>Order Confirmation</h1>
        <label htmlFor="bookTitle">Your Order: </label>
        <input type="text" id="bookTitle" placeholder="BookTitle" value={this.state.bookTitle} onChange={this.bookTitleChange}/>
       <br/>
        <input type="text" id="bookGenre" placeholder="BookGenre" value={this.state.bookGenre} onChange={this.bookGenreChange}/>
            <br/>
                <button>Submit</button>
                <br/>
                {this.state.input}
        </form>
        </div>
    );
    }
}

export default Books;