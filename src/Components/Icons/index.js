export function UploadIcon({ width = '30px', height = '30px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
        >
            <path d='M25 15a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6v-6a1 1 0 0 1 1-1h2Z'></path>
            <path d='M33.58 4.5H14.42c-1.33 0-2.45 0-3.37.07-.95.08-1.86.25-2.73.7a7 7 0 0 0-3.06 3.05 7.14 7.14 0 0 0-.69 2.73 44.6 44.6 0 0 0-.07 3.37v19.16c0 1.33 0 2.45.07 3.37.08.95.25 1.86.7 2.73a7 7 0 0 0 3.05 3.06c.87.44 1.78.6 2.73.69.92.07 2.04.07 3.37.07h19.16c1.33 0 2.45 0 3.37-.07a7.14 7.14 0 0 0 2.73-.7 7 7 0 0 0 3.06-3.05c.44-.87.6-1.78.69-2.73.07-.92.07-2.04.07-3.37V14.42c0-1.33 0-2.45-.07-3.37a7.14 7.14 0 0 0-.7-2.73 7 7 0 0 0-3.05-3.06 7.14 7.14 0 0 0-2.73-.69 44.6 44.6 0 0 0-3.37-.07ZM10.14 8.83c.2-.1.53-.21 1.24-.27.73-.06 1.69-.06 3.12-.06h19c1.43 0 2.39 0 3.12.06a3.3 3.3 0 0 1 1.24.27 3 3 0 0 1 1.31 1.3c.1.21.21.54.27 1.25.06.73.06 1.69.06 3.12v19c0 1.43 0 2.39-.06 3.12a3.3 3.3 0 0 1-.27 1.24 3 3 0 0 1-1.3 1.31c-.21.1-.54.21-1.25.27-.73.06-1.69.06-3.12.06h-19c-1.43 0-2.39 0-3.12-.06a3.3 3.3 0 0 1-1.24-.27 3 3 0 0 1-1.31-1.3c-.1-.21-.21-.54-.27-1.25-.06-.73-.06-1.69-.06-3.12v-19c0-1.43 0-2.39.06-3.12a3.3 3.3 0 0 1 .27-1.24 3 3 0 0 1 1.3-1.31Z'></path>
        </svg>
    );
}

export function ActivityIcon({ width = '36px', height = '36px', className }) {
    return (
        <svg
            width={width}
            className={className}
            height={height}
            viewBox='0 0 32 32'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z'
            ></path>
        </svg>
    );
}

export function MessagesIcon({ width = '30px', height = '30px', className }) {
    return (
        <svg
            fill='currentColor'
            className={className}
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
        >
            <path d='M2.18 9.67A2 2 0 0 1 4 8.5h40a2 2 0 0 1 1.74 3l-20 35a2 2 0 0 1-3.65-.4l-5.87-18.6L2.49 11.82a2 2 0 0 1-.31-2.15Zm18.2 17.72 4.15 13.15L40.55 12.5H8.41l9.98 11.41 11.71-7.2a1 1 0 0 1 1.38.32l1.04 1.7a1 1 0 0 1-.32 1.38L20.38 27.4Z'></path>
        </svg>
    );
}

export function CloseIcon({ width = '16px', height = '16px', className }) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox='0 0 48 48'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z'
            ></path>
        </svg>
    );
}

export function SearchIcon({ width = '20px', height = '20px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.83 7.5a14.34 14.34 0 1 1 0 28.68 14.34 14.34 0 0 1 0-28.68Zm0-4a18.33 18.33 0 1 0 11.48 32.64l8.9 8.9a1 1 0 0 0 1.42 0l1.4-1.41a1 1 0 0 0 0-1.42l-8.89-8.9A18.34 18.34 0 0 0 21.83 3.5Z'
            ></path>
        </svg>
    );
}
