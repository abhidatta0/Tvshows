import { useQuery } from 'react-query';

import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import { getTVShowsList } from '../../apis';

import { Shows, LoadingSpinner } from '../index';

const Home = () => {
    const {
        data: tvshows,
        isLoading,
        isError,
    } = useQuery<TVSHOWSINFO[], Error>('shows', getTVShowsList);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        return <h1>Error...</h1>;
    }

    return <div>{tvshows && <Shows tvshows={tvshows} />}</div>;
};
export default Home;
