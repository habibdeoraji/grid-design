import React, { Component } from 'react';
import './card.css';



class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const { imageUrl, title, author, description, date } = this.props.item

        return (<div className="card card_wrapper" style={{ width: "18rem" }}>
            <img className="card-img-top" src={imageUrl} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a className="author-link" href="/">{author}</a>
                <span className="date">| {date}</span>
                <p className="card-text">{description}</p>
            </div>
        </div>)
    }
}

export default Card;