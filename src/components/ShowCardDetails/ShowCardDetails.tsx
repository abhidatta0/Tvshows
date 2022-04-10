import { useParams } from 'react-router-dom';

const ShowCardDetails = () => {
    const params = useParams();
    const showId = params.id;

    return (
        <h1>
            ShowCardDetails
            {showId}
        </h1>
    );
};

export default ShowCardDetails;
