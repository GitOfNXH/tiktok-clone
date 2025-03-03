import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(
    ({ src, alt, fallback = images.noImage, ...props }, ref) => {
        const [_fallback, setFallback] = useState('');

        const handleErrorImage = () => {
            setFallback(fallback);
        };

        return (
            <img
                src={_fallback || src}
                alt={alt}
                ref={ref}
                {...props}
                onError={handleErrorImage}
            />
        );
    }
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallback: PropTypes.string,
};

export default Image;
