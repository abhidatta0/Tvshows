import { useEffect, useState } from 'react';
import Styles from './App.module.scss';
import { Navbar, ShowCard } from './components';

import { getTVShowsList } from './apis';
import { TVSHOWSINFO } from './typings/tvShowsTypes';

const App = () => {
    const [tvshows, setTvshows] = useState<TVSHOWSINFO[]>([]);

    const fetchShows = async () => {
        try {
            const tvshowsList = await getTVShowsList();
            setTvshows(tvshowsList);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <div>
            <Navbar />
            <div className={Styles.main}>
                <div className={Styles.cardsContainer}>
                    {tvshows.map((item) => (
                        <ShowCard
                            showName={item.name}
                            imageSource={item.image.original}
                            rating={item.rating.average}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
