import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import style from './Home.module.scss';
import { getVideoList } from '~/services/videoService';
import VideoItem from '~/Components/VideoItem';

const cx = classNames.bind(style);

function Home() {
    const [videosList, setVideosList] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await getVideoList('for-you', 1);
                setVideosList(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchApi();
    }, []);

    return (
        <main className={cx('wrapper')}>
            <div className={cx('videos-block')}>
                <div className={cx('videos-list')}>
                    {videosList.map(video => (
                        <VideoItem key={video.id} data={video} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Home;
