import { Fragment } from 'react'
import './style.css'
export default function RegularMovieList({listName , title}){
    function renderFactory(){
        return listName.map(function({title , type , year , rating , image , subtitle , imdb , update , play} , index){
            return(
                <li className="movieBox" key={index}><a href="#">
                    <div className='imageContent'>
                        <img src={image}/>
                        <div className='content'>
                            <p>{type} {year}</p>
                            <p>{rating}</p>
                            <p>{subtitle}</p>
                            <p>{imdb}</p>
                            <img className="playIcon" src={play}/>
                        </div>
                    </div>
                    <h3 className="title">{title}</h3>
                    <p className="update">{update}</p>
                </a></li>
            )
        })
    }
    return(
        <Fragment>
            <h2>{title}</h2>
            <ul className='movieBoxes'>{renderFactory()}</ul>
        </Fragment>
    )
}