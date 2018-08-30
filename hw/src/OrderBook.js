import React, {Component} from 'react'

class OrderBook extends Component {

    render(){
        var bookArray = this.props.books.map(
            eachItem => {
                return(
                    <div>
                        <p>You ordered the Book:  {eachItem.bookTitle} from the {eachItem.bookGenre}   genere. </p>

                        </div>
                )
            }
        )
return(
    <div>
        <h2>{bookArray}</h2>
    </div>
)
}
}

export default OrderBook;