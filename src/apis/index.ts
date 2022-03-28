import FetchHelper from '../utils/FetchHelper';

const GET_SHOWS = 'https://api.tvmaze.com/shows';

export const getTVShowsList = () => FetchHelper.get({ url: GET_SHOWS });
export default {};
