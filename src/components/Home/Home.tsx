import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import { getTVShowsList } from '../../apis';

import { Shows } from '../index';

const Home = () => {
    const [isDataPresent, setIsDataPresent] = useState(false); // to call api once
    const {
        data: tvshows,
        isLoading,
        isError,
    } = useQuery<TVSHOWSINFO[], Error>('shows', getTVShowsList, {
        enabled: !isDataPresent,
    });

    useEffect(() => {
        if (tvshows?.length) {
            setIsDataPresent(true);
        }
    }, [tvshows]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Error...</h1>;
    }

    return <div>{tvshows && <Shows tvshows={tvshows} />}</div>;
};
export default Home;
