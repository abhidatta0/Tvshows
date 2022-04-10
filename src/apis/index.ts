import FetchHelper from '../utils/FetchHelper';

const GET_SHOWS = 'https://api.tvmaze.com/shows';
const GET_SHOW_DETAIL = 'https://api.tvmaze.com/shows';

export const getTVShowsList = () => FetchHelper.get({ url: GET_SHOWS });
export const getTVShowDetail = (id: number) =>
    FetchHelper.get({ url: `${GET_SHOW_DETAIL}/${id}` });

export default {};
