import React, { Component } from 'react';
import PropTypes from 'prop-types';
import someData from './news.json'


export class List extends Component {
    state = {
        isSpecial: false,
        link: false,
        photo: false,
        search: '',
    };

    handlerChangeSearch = (e) => {
        let { currentTarget } = e;
        this.setState({
            search: currentTarget.value,
        })
    }

    render() {
        const { isSpecial, link, photo, search } = this.state;
        const listToRender = someData.filter((el) => {
            if (isSpecial && el.isSpecial === false) return false;
            if (link && el.link === null) return false;
            if (photo && el.photo === null) return false;
            // console.log(el.title.toLowerCase().indexOf(search.toLowerCase()), 'ffff')
            // console.log(el, 'el')
            // console.log(search, 'serach')
            // if (el.title.toLowerCase().indexOf(search.toLowerCase()) < 0 ||
            //     el.content.toLowerCase().indexOf(search.toLowerCase()) < 0
            //     // (el.author.toLowerCase().indexOf(search.toLowerCase()) < 0)
            // ) return false;

            return  !(el.title.toLowerCase().indexOf(search.toLowerCase()) < 0)
            || !(el.content.toLowerCase().indexOf(search.toLowerCase()) < 0)
            || !(el.author.toLowerCase().indexOf(search.toLowerCase()) < 0)
        });
        console.log(listToRender)
        return(
            <div className='list'>
                <div className='list__filters'>
                     {/*TODO: вынести в компонент*/}
                    <label>
                        <input
                            onChange={() => this.setState({isSpecial: !isSpecial})}
                            type="checkbox"
                            checked={isSpecial}
                        /> <span>Filter only IsSpecial</span>
                    </label>
                    <label>
                        <input
                            onChange={() => this.setState({link: !link})}
                            type="checkbox"
                            checked={link}
                        /> <span>Filter has link</span>
                    </label>
                    <label>
                        <input
                            onChange={() => this.setState({photo: !photo})}
                            type="checkbox"
                            checked={photo}
                        /> <span>Filter has photo</span>
                    </label>
                     {/*TODO: вынести в компонент*/}
                    <div>
                        <label>
                            <input type="text" value={search} onChange={this.handlerChangeSearch}/>
                        </label>
                    </div>
                </div>
                {listToRender.map((item) => (
                    // TODO: вынести в компонент
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
                        ))}</div>
                        {item.link && <a href={item.link}>{item.link}</a>}
                        {item.photo && <img src={item.photo + item.id}/>}
                        {item.author && <h4>{item.author}</h4>}
                    </div>
                ))};
            </div>
        )
    }
}


List.propTypes = {};
List.defaultProps = {};