import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tag } from '../index';
import { getTVShowDetail } from '../../apis';
import { TVSHOWSINFO } from '../../typings/tvShowsTypes';
import Styles from './ShowCardDetails.module.scss';

const ShowCardDetails = () => {
    const params = useParams();
    const showId = params.id;
    const [detail, setDetail] = useState<TVSHOWSINFO>({} as TVSHOWSINFO);
    const fetchShowDetails = async () => {
        try {
            if (showId) {
                const result = await getTVShowDetail(parseInt(showId, 10));
                console.log(result);
                setDetail(result);
            }
        } catch (e) {
            setDetail({} as TVSHOWSINFO);
        }
    };
    useEffect(() => {
        if (showId) {
            fetchShowDetails();
        }
    }, [showId]);
    if (Object.keys(detail).length === 0) {
        return null;
    }

    return (
        <main className={Styles.wrapper}>
            <section className={Styles.topSection}>
                <div className={Styles.imgDiv}>
                    <img
                        src={detail.image.original}
                        alt="show"
                        className={Styles.img}
                    />
                </div>
                <div className={Styles.aboutShow}>
                    <p className={Styles.name}>{detail.name}</p>
                    {detail.genres.map((genre) => (
                        <Tag key={genre} genre={genre} />
                    ))}
                    <p
                        className={Styles.summary}
                        dangerouslySetInnerHTML={{ __html: detail.summary }}
                    />
                </div>
            </section>
        </main>
    );
};

export default ShowCardDetails;
