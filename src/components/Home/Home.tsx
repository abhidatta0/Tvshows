import { useState } from 'react';
import { useQuery } from 'react-query';
import Styles from './Home.module.scss';

import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import { getTVShowsList } from '../../apis';

import { ShowCard, Pagination } from '../index';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showsPerPage] = useState(6);
    const {
        data: tvshows,
        isLoading,
        isError,
    } = useQuery<TVSHOWSINFO[], Error>('shows', getTVShowsList);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Error...</h1>;
    }

    // Get current shows
    const indexOfLastShow = currentPage * showsPerPage;
    const indexOfFirstShow = indexOfLastShow - showsPerPage;
    const currentShows = tvshows?.slice(indexOfFirstShow, indexOfLastShow);
    return (
        <div className={Styles.main}>
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
        </div>
    );
};
export default Home;
