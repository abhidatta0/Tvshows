import { useState } from 'react';
import { ShowCard, Pagination } from '../index';
import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import Styles from './Shows.module.scss';

type Props = {
    tvshows: TVSHOWSINFO[];
};
const Shows = ({ tvshows }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showsPerPage] = useState(6);

    // Get current shows
    const indexOfLastShow = currentPage * showsPerPage;
    const indexOfFirstShow = indexOfLastShow - showsPerPage;
    const currentShows = tvshows.slice(indexOfFirstShow, indexOfLastShow);

    return (
        <>
            <div className={Styles.cardsContainer}>
                {currentShows &&
                    currentShows.map((item) => (
                        <ShowCard
                            id={item.id}
                            showName={item.name}
                            imageSource={item.image.original}
                            rating={item.rating.average}
                            key={item.id}
                        />
                    ))}
            </div>
            <Pagination
                elementsPerPage={showsPerPage}
                totalElements={tvshows?.length || 0}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                customStyle={Styles.customPaginationStyle}
            />
        </>
    );
};

export default Shows;
