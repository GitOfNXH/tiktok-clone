import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounced, setDebounce] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => setDebounce(value), delay);

        return () => clearTimeout(timerId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounced;
}

export default useDebounce;
