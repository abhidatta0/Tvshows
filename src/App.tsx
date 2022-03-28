import { useEffect, useState } from 'react';
import Styles from './App.module.scss';
import { Navbar, ShowCard } from './components';

import { getTVShowsList } from './apis';

const App = () => {
    const [tvshows, setTvshows] = useState([]);

    const fetchShows = async () => {
        try {
            const tvshowsList = await getTVShowsList();
            setTvshows(tvshowsList);
            console.log(JSON.stringify(tvshows[0]));
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
