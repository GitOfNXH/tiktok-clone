import PropTypes from 'prop-types';
import { forwardRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import style from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

const Image = forwardRef(
    (
        { src, alt, fallback = images.noImage, rounded, className, ...props },
        ref
    ) => {
        const [_fallback, setFallback] = useState(src || fallback);

        useEffect(() => {
            setFallback(src || fallback);
        }, [src, fallback]);

        const handleErrorImage = () => {
            setFallback(fallback);
        };

        const classes = cx({ rounded, [className]: className });

        return (
            <img
                src={_fallback || src}
                alt={alt}
                ref={ref}
                className={classes}
                {...props}
                onError={handleErrorImage}
            />
        );
    }
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
