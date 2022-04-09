import { memo } from 'react';
import Styles from './ShowCard.module.scss';

type Props = {
    showName: string;
    imageSource: string;
    rating: number;
};

const ShowCard = ({ showName, imageSource, rating }: Props) => (
    <div className={`${Styles.wrapper} ${Styles.boxShadow}`}>
        <img src={imageSource} className={Styles.img} alt="tv show poster" />
        <div className={Styles.cardContent}>
            <p className={Styles.cardTitle}>{showName}</p>
        </div>
        <div className={Styles.ratingBox}>
            <p>{rating}</p>
        </div>
    </div>
);

export default memo(ShowCard);
