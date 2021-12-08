import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class HomeFilters extends Component {
    handleChangeSearch = (e) => {
        let { onChangeSearch } = this.props;
        let { currentTarget } = e;
        onChangeSearch(currentTarget.value);
    };
    render() {
        const { isSpecial, link, photo, search, onChangeIsSpecial, onChangeLink, onChangePhoto } = this.props;

        return(
            <div className='list__filters'>
                <label>
                    <input
                        onChange={() => onChangeIsSpecial(!isSpecial)}
                        type="checkbox"
                        checked={isSpecial}
                    /> <span>Filter only IsSpecial</span>
                </label>
                <label>
                    <input
                        onChange={() => onChangeLink(!link)}
                        type="checkbox"
                        checked={link}
                    /> <span>Filter has link</span>
                </label>
                <label>
                    <input
                        onChange={() => onChangePhoto(!photo)}
                        type="checkbox"
                        checked={photo}
                    /> <span>Filter has photo</span>
                </label>
                <div>
                    <label>
                        <input type="text" value={search} onChange={this.handleChangeSearch}/>
                    </label>
                </div>
            </div>
        )
    }
}

HomeFilters.propTypes = {
    isSpecial: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    onChangeIsSpecial: PropTypes.func.isRequired,
    onChangeLink: PropTypes.func.isRequired,
    onChangePhoto: PropTypes.func.isRequired,
    onChangeSearch: PropTypes.func.isRequired,
};
HomeFilters.defaultProps = {};