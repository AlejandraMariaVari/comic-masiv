import React, { useEffect, useState } from 'react'
import './Comic.scss'

import { fetchComicData } from '../../redux/actions/comicAction'

// component
import RatingStars from '../RatingStars'
import { useDispatch, useSelector } from 'react-redux'

export default function Comic() {

    const dispatch = useDispatch()
    const comicData = useSelector((state) => state.data)
    const loaded = useSelector((state) => state.loaded)
    console.log(comicData);

    useEffect(() => {
        const idImage = parseInt(Math.random() * 2586);
        console.log(idImage);
        dispatch(fetchComicData(`https://xkcd.com/${idImage}/info.0.json`))
    }, [])

    const idStarsArray = [1,2,3,4,5];
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);


    const eventMouseEnter = (starId) => {
        setHoverRating(starId);
    };

    const eventMouseLeave = () => {
        setHoverRating(0);
    }

    const onClickStar = (starId) => {
        
        setRating(starId);        
    }

    console.log("rating", rating);

    
    return ( 
        loaded ? 
            
                <section>
            <h1> {comicData.title} </h1>
            <div>
                <img src={comicData.img} alt={comicData.alt} />
            </div>
            
            <div className="containerStars">

                {idStarsArray.map((starId) => {

                    return(
                        <RatingStars
                            key={starId}
                            starId={starId}
                            rating = {rating}
                            hoverRating = {hoverRating}
                            eventMouseEnter = {eventMouseEnter}
                            eventMouseLeave = {eventMouseLeave}
                            onClickStar={onClickStar}
                        />
                    )
                })}

            </div>

        </section>
             : <h1> Estoy cargando</h1>
        
    )
}