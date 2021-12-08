import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class HomeItem extends Component {
    render() {
        let { item } = this.props;

        return (
            <div style={{border: "solid 1px"}} key={item.id}>
                <h1>{item.title}</h1>
                <h2 dangerouslySetInnerHTML={{__html: item.content}}/>
                <div>{item.isSpecial ? "Special" : ""}</div>
                <date>{item.dateCreated.slice(0, 19)}</date>
                <div>{item.categories.map((cat) => (
                    <div key={cat.id}>
                        <div>{cat.id}</div>
                        <p>{cat.name}</p>
                    </div>
                ))}
                </div>
                {item.link && <a href={item.link}>{item.link}</a>}
                {item.photo && <img src={item.photo + item.id}/>}
                {item.author && <h4>{item.author}</h4>}
            </div>
        )
    }
}

HomeItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        isSpecial: PropTypes.bool.isRequired,
        dateCreated: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        link: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
};
HomeItem.defaultProps = {};