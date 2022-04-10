import { useEffect, useState } from 'react';
import Styles from './Home.module.scss';

import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import { getTVShowsList } from '../../apis';

import { ShowCard } from '../index';

const Home = () => {
    const [tvshows, setTvshows] = useState<TVSHOWSINFO[]>([]);

    const fetchShows = async () => {
        try {
            const tvshowsList = await getTVShowsList();
            setTvshows(tvshowsList);
        } catch (e) {
            setTvshows([]);
        }
    };
    useEffect(() => {
        fetchShows();
    }, []);
    return (
        <div className={Styles.main}>
            <div className={Styles.cardsContainer}>
                {tvshows.map((item) => (
                    <ShowCard
                        id={item.id}
                        showName={item.name}
                        imageSource={item.image.original}
                        rating={item.rating.average}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};
export default Home;
