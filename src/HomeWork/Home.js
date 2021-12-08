import React, { Component } from 'react';
import PropTypes from 'prop-types'
import someData from './news.json'
import { HomeFilters} from "./HomeFilters";
import { HomeList} from "./HomeList";

export class Home extends Component{
    state = {
        isSpecial: false,
        link: false,
        photo: false,
        search: '',
    };

    render() {

        const { isSpecial, link, photo, search } = this.state;
        const homeToRender = someData.filter((el) => {
            if (isSpecial && el.isSpecial === false) return false;
            if (link && el.link === null) return false;
            if (photo && el.photo === null) return false;
            return  !(el.title.toLowerCase().indexOf(search.toLowerCase()) < 0)
                || !(el.content.toLowerCase().indexOf(search.toLowerCase()) < 0)
                || !(el.author.toLowerCase().indexOf(search.toLowerCase()) < 0)
        });

        return (
            <div className='Home'>
                <div className='home__filters'>
                    <HomeFilters
                        isSpecial={isSpecial}
                        link={link}
                        photo={photo}
                        search={search}
                        onChangeIsSpecial={(newIsSpecial) => this.setState({isSpecial: newIsSpecial})}
                        onChangeLink={(newLink) => this.setState({link: newLink})}
                        onChangePhoto={(newPhoto) => this.setState({photo: newPhoto})}
                        onChangeSearch={(newSearch) => this.setState({search: newSearch})}
                    />
                </div>
                <div className='home__list'>
                    <HomeList items={homeToRender}/>
                </div>
            </div>
        );
    };
}

Home.propTypes = {};
Home.defualtProps = {};