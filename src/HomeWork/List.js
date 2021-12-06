import React, { Component } from 'react';
import someData from './news.json'

export class List extends Component{
    render() {
        return(
            <div className='hi'>
                {someData.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <h2 dangerouslySetInnerHTML={{__html: item.content}}/>
                        <div>{item.isSpecial ? "Special" : ""}</div>
                        <date>{item.dateCreated.slice(0, 19)}</date>
                        <div>{item.categories.map((cat) => (
                            <div key={cat.id}>
                                {/*<div>{cat.id}</div>*/}
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

export default List;