import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            isbn: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            imageUrl: PropTypes.string,
            description: PropTypes.string
        }),
    }

    render() {
        const { isbn, title, author, imageUrl, description } = this.props.details;
        return (
            <li className="book-result">
                <Link 
                className="flex flex-row"
                to={{
                    pathname: '/resultdetails',
                    state: { 
                        isbn: isbn,
                        title: title,
                        author: author,
                        imageUrl: imageUrl,
                        description: description 
                    }
                }}>
                    <img src={imageUrl} alt="book cover for result" />
                    <div>
                        <h1>{title}</h1>
                        <h2 className="author">{author}</h2>
                    </div>
                </Link>
            </li>
        )
    }

}

export default SearchResult;