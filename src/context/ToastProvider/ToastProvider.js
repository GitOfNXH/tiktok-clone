import { useEffect, useState } from 'react';

import { ToastContext } from '~/constants';
import ToastMessage from '~/Components/ToastMessage';

function ToastProvider({ children }) {
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMessage();
        }, 4000);

        return () => clearTimeout(timerId);
    }, [message]);

    const showToast = (type, message) => {
        setMessage(message);
        setType(type);
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {message && (
                <ToastMessage
                    success={type === 'success'}
                    info={type === 'info'}
                    error={type === 'error'}
                    warning={type === 'warning'}
                    message={message}
                />
            )}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
