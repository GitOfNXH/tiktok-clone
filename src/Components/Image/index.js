import { forwardRef, useState } from 'react';
import images from '~/assets/images';

function Image({ src, alt, fallback = images.noImage, ...props }, ref) {
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

export default forwardRef(Image);
