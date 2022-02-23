import React from 'react'
import './Comic.scss'

// component
import RatingStars from '../RatingStars'

export default function Comic() {
    return ( 
        <section>
            <h1>Title Comic</h1>
            <div>
                <img src="https://via.placeholder.com/350" alt="imageComic"/>
            </div>
            
            <RatingStars />
        </section>
    )
}