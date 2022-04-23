import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Tag, LoadingSpinner } from '../index';
import { getTVShowDetail } from '../../apis';
import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import Styles from './ShowCardDetails.module.scss';

const ShowCardDetails = () => {
    const params = useParams();
    const showId = parseInt(params.id ?? '1', 10);
    const {
        data: detail,
        isLoading,
        isError,
    } = useQuery<TVSHOWSINFO, Error>(['show', showId], () =>
        getTVShowDetail(showId)
    );

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        return <h1>Error...</h1>;
    }

    if (detail) {
        const {
            image: { original: originalImage },
            genres,
            name,
            summary,
        } = detail;
        return (
            <main className={Styles.wrapper}>
                <section className={Styles.topSection}>
                    <div className={Styles.imgDiv}>
                        <img
                            src={originalImage}
                            alt="show"
                            className={Styles.img}
                        />
                    </div>
                    <div className={Styles.aboutShow}>
                        <p className={Styles.name}>{name}</p>
                        {genres.map((genre) => (
                            <Tag key={genre} genre={genre} />
                        ))}
                        <p
                            className={Styles.summary}
                            dangerouslySetInnerHTML={{ __html: summary }}
                        />
                    </div>
                </section>
            </main>
        );
    }

    return null;
};

export default ShowCardDetails;
