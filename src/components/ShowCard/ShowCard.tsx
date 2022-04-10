import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './ShowCard.module.scss';

type Props = {
    id: number;
    showName: string;
    imageSource: string;
    rating: number;
};

const ShowCard = ({ id, showName, imageSource, rating }: Props) => {
    const navigate = useNavigate();
    const onShowCard = () => {
        navigate(`show/${id}`);
    };

    return (
        <div
            className={`${Styles.wrapper} ${Styles.boxShadow}`}
            onClick={onShowCard}
            role="button"
            tabIndex={0}
        >
            <img
                src={imageSource}
                className={Styles.img}
                alt="tv show poster"
            />
            <div className={Styles.cardContent}>
                <p className={Styles.cardTitle}>{showName}</p>
            </div>
            <div className={Styles.ratingBox}>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default memo(ShowCard);
