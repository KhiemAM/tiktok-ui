import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setfallback] = useState('');

    const handleError = () => {
        setfallback(images.noImage);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
