import React, { Component } from 'react';
import { HomeItem} from "./HomeItem";
import PropTypes from 'prop-types';

export class HomeList extends Component {
    render() {
        let { items } = this.props;
        return(
            <div className='home__list'>
                {items.map((item) => (
                    <HomeItem key={item.id}
                              item={item}
                    ></HomeItem>
                ))};
            </div>
        )
    }
}

HomeList.propTypes = {
    items: PropTypes.array,
};
HomeList.defaultProps = {
    items: [],
};