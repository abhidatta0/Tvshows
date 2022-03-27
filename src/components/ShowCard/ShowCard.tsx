import React from 'react';
import Styles from './ShowCard.module.scss';

type Props = {
  showName: string;
  imageSource: string;
  rating: number;
}

const ShowCard = ({showName, imageSource, rating}:Props)=>{
  return (
      <div className={`${Styles.wrapper} ${Styles.boxShadow}`}>
         <img src={imageSource} className={Styles.img}/>
         <div className={Styles.cardContent}>
         <p className={Styles.cardTitle}>{showName}</p>
         </div>
         <div className={Styles.ratingBox}>
            <p>{rating}</p>
         </div>
      </div>
  )   
}

export default ShowCard;