import React, { useEffect, useState } from "react";
import "./Comic.scss";



// Redux
import { fetchComicData } from "../../redux/actions/comicAction";

// component
import RatingStars from "../RatingStars";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utils/loading";

export default function Comic() {

  const dispatch = useDispatch();
  const comicData = useSelector((state) => state.data);
  const loaded = useSelector((state) => state.loaded);
  const idStarsArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const eventMouseEnter = (starId) => {
    setHoverRating(starId);
  };

  const eventMouseLeave = () => {
    setHoverRating(0);
  };

  const onClickStar = (starId) => {
    setRating(starId);
  };

  const nextComic = () => {
    const idImage = parseInt(Math.random() * 2586);
    dispatch(fetchComicData(`https://xkcd.com/${idImage}/info.0.json`));

    setRating(0);

  };

  useEffect(() => {
    nextComic();
  }, []);

  return loaded ? (
    <section className="comic-container">
      <h1> {comicData.title} </h1>
      <div>
        <img className="comic-container__image" src={comicData.img} alt={comicData.alt} />
      </div>

      {(rating == 0) ? 
         <div className="comic-container__textRating">Califícame</div> :
         <div className="comic-container__textRating">Calificación obtenida: {rating} Estrellas </div>
      }

      <div className="container-stars">
        {idStarsArray.map((starId) => {
          return (
            <RatingStars
              key={starId}
              starId={starId}
              rating={rating}
              hoverRating={hoverRating}
              eventMouseEnter={eventMouseEnter}
              eventMouseLeave={eventMouseLeave}
              onClickStar={onClickStar}
            />
          );
        })}
      </div>
      <button className="comic-container__next" onClick={nextComic}>Siguiente</button>
    </section>
  ) : (
    <section className="comic-center"> 
        <Loading type='spin' color='#ffffff' />
    </section>
  );
}
