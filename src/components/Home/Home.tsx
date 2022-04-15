import { useQuery } from 'react-query';
import Styles from './Home.module.scss';

import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import { getTVShowsList } from '../../apis';

import { ShowCard } from '../index';

const Home = () => {
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
    return (
        <div className={Styles.main}>
            <div className={Styles.cardsContainer}>
                {tvshows &&
                    tvshows.map((item) => (
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
