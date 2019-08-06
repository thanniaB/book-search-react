import React from 'react';
import { Link } from 'react-router-dom';

class ResultDetails extends React.Component {

    render() {
        const { isbn, title, author, imageUrl, description } = this.props.location.state;
        return (
            <div className="book">
                <Link className="back-button" to={{ pathname: '/' }}>Back</Link>
                <h1>{title}</h1>
                <div className="flex row-to-column">
                    <img src={imageUrl} alt="book cover" />
                    <div>
                        <h2>{author}</h2>
                        <p> {description} </p>
                    </div>
                </div>                
                <span className="isbn">ISBN: {isbn}</span>
            </div>
        )
    }

}

export default ResultDetails;