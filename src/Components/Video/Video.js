import PropTypes from 'prop-types';

function Video({ src, poster, className, ...props }) {
    return (
        <video poster={poster} className={className} {...props}>
            <source src={src} type='video/mp4' />
        </video>
    );
}

Video.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
};

export default Video;
