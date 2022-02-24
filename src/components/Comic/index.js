import { useState } from 'react'
import './Comic.scss'

// component
import RatingStars from '../RatingStars'

export default function Comic() {

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
        <section>
            <h1>Title Comic</h1>
            <div>
                <img src="https://via.placeholder.com/350" alt="imageComic"/>
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
    )
}