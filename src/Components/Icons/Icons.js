import classNames from 'classnames/bind';
import style from './Icons.module.scss';

const cx = classNames.bind(style);

export function UploadIcon({ width = '32px', height = '32px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            className={cx('p4', { className })}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
        >
            <path d='M25 15a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6v-6a1 1 0 0 1 1-1h2Z'></path>
            <path d='M33.58 4.5H14.42c-1.33 0-2.45 0-3.37.07-.95.08-1.86.25-2.73.7a7 7 0 0 0-3.06 3.05 7.14 7.14 0 0 0-.69 2.73 44.6 44.6 0 0 0-.07 3.37v19.16c0 1.33 0 2.45.07 3.37.08.95.25 1.86.7 2.73a7 7 0 0 0 3.05 3.06c.87.44 1.78.6 2.73.69.92.07 2.04.07 3.37.07h19.16c1.33 0 2.45 0 3.37-.07a7.14 7.14 0 0 0 2.73-.7 7 7 0 0 0 3.06-3.05c.44-.87.6-1.78.69-2.73.07-.92.07-2.04.07-3.37V14.42c0-1.33 0-2.45-.07-3.37a7.14 7.14 0 0 0-.7-2.73 7 7 0 0 0-3.05-3.06 7.14 7.14 0 0 0-2.73-.69 44.6 44.6 0 0 0-3.37-.07ZM10.14 8.83c.2-.1.53-.21 1.24-.27.73-.06 1.69-.06 3.12-.06h19c1.43 0 2.39 0 3.12.06a3.3 3.3 0 0 1 1.24.27 3 3 0 0 1 1.31 1.3c.1.21.21.54.27 1.25.06.73.06 1.69.06 3.12v19c0 1.43 0 2.39-.06 3.12a3.3 3.3 0 0 1-.27 1.24 3 3 0 0 1-1.3 1.31c-.21.1-.54.21-1.25.27-.73.06-1.69.06-3.12.06h-19c-1.43 0-2.39 0-3.12-.06a3.3 3.3 0 0 1-1.24-.27 3 3 0 0 1-1.31-1.3c-.1-.21-.21-.54-.27-1.25-.06-.73-.06-1.69-.06-3.12v-19c0-1.43 0-2.39.06-3.12a3.3 3.3 0 0 1 .27-1.24 3 3 0 0 1 1.3-1.31Z'></path>
        </svg>
    );
}

export function ActivityIcon({ width = '32px', height = '32px', className }) {
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

export function MessagesIcon({ width = '32px', height = '32px', className }) {
    return (
        <svg
            fill='currentColor'
            className={cx('p4', { className })}
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
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M21.83 7.5a14.34 14.34 0 1 1 0 28.68 14.34 14.34 0 0 1 0-28.68Zm0-4a18.33 18.33 0 1 0 11.48 32.64l8.9 8.9a1 1 0 0 0 1.42 0l1.4-1.41a1 1 0 0 0 0-1.42l-8.89-8.9A18.34 18.34 0 0 0 21.83 3.5Z'
            ></path>
        </svg>
    );
}

export function HomeIcon({ width = '32px', height = '32px', className }) {
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
                d='M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z'
            ></path>
        </svg>
    );
}

export function HomeActiveIcon({ width = '32px', height = '32px', className }) {
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
                d='M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z'
            ></path>
        </svg>
    );
}

export function FollowingIcon({ width = '32px', height = '32px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={cx('p4', { className })}
        >
            <path d='M18.99 3a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4a6 6 0 1 0 0 12.00A6 6 0 0 0 19 7ZM18.99 26c2.96 0 5.6.58 7.87 1.65l-3.07 3.06a15.38 15.38 0 0 0-4.8-.71C10.9 30 6.3 35.16 6 43c-.02.55-.46 1-1.02 1h-2c-.55 0-1-.45-.98-1C2.33 32.99 8.7 26 19 26ZM35.7 41.88 31.82 38H45a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H31.82l3.88-3.88a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.42 0l-7.3 7.3a2 2 0 0 0 0 2.82l7.3 7.3a1 1 0 0 0 1.42 0l1.41-1.42a1 1 0 0 0 0-1.41Z'></path>
        </svg>
    );
}

export function FollowingActiveIcon({
    width = '32px',
    height = '32px',
    className,
}) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={cx('p4', { className })}
            viewBox='0 0 24 24'
            fill='currentColor'
        >
            <path d='m17.851 21.44-1.94-1.94H22.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-6.59l1.94-1.94a.5.5 0 0 0 0-.706l-.707-.708a.5.5 0 0 0-.707 0l-3.649 3.647a1 1 0 0 0 0 1.414l3.648 3.647a.5.5 0 0 0 .708 0l.707-.708a.5.5 0 0 0 0-.707M4.5 7c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5'></path>
            <path d='M1 20.72c0-3.26 3.03-7.22 8.5-7.22 1.589 0 2.971.334 4.134.888l-2.03 1.952a3 3 0 0 0-.004 4.321l1.906 1.839H5.5c-3.5 0-4.5 0-4.5-1.78'></path>
        </svg>
    );
}

export function LiveIcon({ width = '32px', height = '32px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M16.78 26.82c-.08.18-.08.41-.08.88v3.9c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-3.9c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54ZM22.5 21.4c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54c.18-.08.41-.08.88-.08.47 0 .7 0 .88.08.25.1.44.3.54.54.08.18.08.41.08.88v10.2c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54c-.08-.18-.08-.41-.08-.88V21.4ZM28.38 24.32c-.08.18-.08.41-.08.88v6.4c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-6.4c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54Z'></path>
            <path d='M16.57 7.49a1 1 0 0 0-.13 1.4l3.62 4.31H15.7c-2.8 0-4.2 0-5.27.55a5 5 0 0 0-2.18 2.18C7.7 17 7.7 18.4 7.7 21.2v10.7c0 2.8 0 4.2.55 5.27a5 5 0 0 0 2.18 2.19c1.07.54 2.47.54 5.27.54h16.6c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19c.54-1.07.54-2.47.54-5.27V21.2c0-2.8 0-4.2-.54-5.27a5 5 0 0 0-2.19-2.18c-1.07-.55-2.47-.55-5.27-.55h-4.42l3.61-4.3a1 1 0 0 0-.12-1.41l-.77-.65a1 1 0 0 0-1.4.13l-5.23 6.22-5.23-6.22a1 1 0 0 0-1.4-.13l-.77.65Zm-.87 8.71h16.6c1.45 0 2.36 0 3.04.06.65.05.83.14.87.16.37.19.68.5.87.87.02.04.1.22.16.87.06.68.06 1.6.06 3.04v10.7c0 1.45 0 2.36-.06 3.04-.05.65-.14.83-.16.87a2 2 0 0 1-.87.87c-.04.02-.22.1-.87.16-.68.06-1.59.06-3.04.06H15.7c-1.45 0-2.36 0-3.04-.06a2.47 2.47 0 0 1-.87-.16 2 2 0 0 1-.87-.87c-.02-.04-.1-.22-.16-.87-.06-.68-.06-1.59-.06-3.04V21.2c0-1.45 0-2.36.06-3.04.05-.65.14-.83.16-.87a2 2 0 0 1 .87-.87c.04-.02.22-.1.87-.16a42.2 42.2 0 0 1 3.04-.06Z'></path>
        </svg>
    );
}

export function LiveActiveIcon({ width = '32px', height = '32px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M16.57 7.49a1 1 0 0 0-.13 1.4l4.04 4.81h-4.53c-2.71 0-4.07 0-5.1.52a4.82 4.82 0 0 0-2.12 2.1c-.53 1.02-.53 2.37-.53 5.05v10.26c0 2.68 0 4.03.53 5.05.46.9 1.2 1.64 2.12 2.1 1.03.52 2.39.52 5.1.52h16.1c2.71 0 4.07 0 5.1-.52a4.82 4.82 0 0 0 2.12-2.1c.53-1.02.53-2.37.53-5.05V21.37c0-2.68 0-4.03-.53-5.05a4.82 4.82 0 0 0-2.12-2.1c-1.03-.52-2.39-.52-5.1-.52h-4.6l4.04-4.8a1 1 0 0 0-.12-1.41l-.77-.65a1 1 0 0 0-1.4.13l-5.23 6.22-5.23-6.22a1 1 0 0 0-1.4-.13l-.77.65ZM15.3 26.65a1 1 0 0 1 .44-.44c.21-.1.49-.1 1.05-.1h.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.44c.11.21.11.5.11 1.05V32c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-.4c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45c-.11-.2-.11-.49-.11-1.05v-4.3c0-.56 0-.84.1-1.05ZM22.2 21c0-.56 0-.84.1-1.05a1 1 0 0 1 .45-.44c.21-.1.49-.1 1.05-.1h.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.44c.11.21.11.5.11 1.05v11c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-.4c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45c-.11-.2-.11-.49-.11-1.05V21Zm7.1 2.65a1 1 0 0 1 .45-.44c.21-.1.49-.1 1.05-.1h.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.44c.11.21.11.5.11 1.05V32c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11h-.4c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45c-.11-.2-.11-.49-.11-1.05v-7.3c0-.56 0-.84.1-1.05Z'></path>
        </svg>
    );
}

export function UserIcon({ width = '14px', height = '16px', className }) {
    return (
        <svg
            aria-hidden='true'
            data-prefix='fas'
            data-icon='user'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            width={width}
            height={height}
            className={className}
        >
            <path
                fill='currentColor'
                d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z'
            ></path>
        </svg>
    );
}

export function LockIcon({ width = '14px', height = '16px', className }) {
    return (
        <svg
            aria-hidden='true'
            data-prefix='fas'
            data-icon='lock'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            width={width}
            height={height}
            className={className}
        >
            <path
                fill='currentColor'
                d='M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z'
            ></path>
        </svg>
    );
}

export function RightArrowIcon({ width = '19px', height = '19px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M21.68 3.18a2 2 0 0 1 2.14.32l21.5 19a2 2 0 0 1-.02 3.02l-21.5 18.5a2 2 0 0 1-3.3-1.52v-9.97c-5.68.28-11.95 1.75-16.09 5.88A2 2 0 0 1 1 37c0-11.68 7.7-21.05 19.5-21.94V5a2 2 0 0 1 1.18-1.82ZM24.5 30.5v7.64l16.46-14.16L24.5 9.44V17a2 2 0 0 1-2.05 2c-8.4-.21-15.62 5.34-17.09 13.66 4.47-2.7 9.8-3.87 14.98-4.13.68-.03 1.22-.04 1.6-.04 1.19 0 2.56.26 2.56 2.01Z'></path>
        </svg>
    );
}

export function ThreeDotsIcon({ width = '19px', height = '19px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M5 24a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm15 0a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm15 0a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z'></path>
        </svg>
    );
}

export function GearIcon({ width = '19px', height = '19px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M22.74 2.22a2 2 0 0 0-2.04-.9l-1.37.23a2 2 0 0 0-1.6 1.55l-.35 1.57c-.14.66-.61 1.2-1.24 1.48-1.3.57-2.53 1.29-3.67 2.12-.55.4-1.25.55-1.9.34l-1.54-.5a2 2 0 0 0-2.14.62l-.9 1.07A2 2 0 0 0 5.76 12l.75 1.43c.32.6.3 1.33 0 1.94a19.36 19.36 0 0 0-1.45 3.98 2.13 2.13 0 0 1-1.24 1.48l-1.5.61a2 2 0 0 0-1.24 1.85v1.4a2 2 0 0 0 1.24 1.84l1.5.61c.62.26 1.07.82 1.23 1.49.34 1.39.83 2.73 1.46 3.98.3.61.31 1.33 0 1.94l-.75 1.42a2 2 0 0 0 .23 2.22l.9 1.06a2 2 0 0 0 2.14.62l1.54-.49c.64-.2 1.35-.07 1.9.34 1.14.83 2.37 1.55 3.67 2.12.63.28 1.1.82 1.24 1.48l.34 1.57a2 2 0 0 0 1.61 1.55l1.37.24a2 2 0 0 0 2.04-.9l.86-1.37c.36-.57 1-.92 1.67-.96 1.45-.1 2.85-.34 4.19-.73a2.13 2.13 0 0 1 1.9.33l1.27.98a2 2 0 0 0 2.22.15l1.2-.7a2 2 0 0 0 .99-2l-.22-1.59c-.1-.67.17-1.34.66-1.81a19.6 19.6 0 0 0 2.74-3.26c.37-.56.99-.93 1.67-.96l1.6-.06a2 2 0 0 0 1.8-1.32l.48-1.3a2 2 0 0 0-.54-2.17l-1.19-1.08a2.13 2.13 0 0 1-.66-1.8 19.74 19.74 0 0 0 0-4.27c-.07-.67.16-1.35.66-1.81l1.2-1.08a2 2 0 0 0 .53-2.17l-.48-1.3a2 2 0 0 0-1.8-1.32l-1.6-.06c-.68-.02-1.3-.4-1.67-.96a19.6 19.6 0 0 0-2.74-3.26 2.13 2.13 0 0 1-.66-1.81l.22-1.6a2 2 0 0 0-.98-2l-1.2-.7a2 2 0 0 0-2.23.16l-1.27.98c-.54.42-1.25.52-1.9.33a19.44 19.44 0 0 0-4.19-.73 2.12 2.12 0 0 1-1.67-.96l-.86-1.36ZM39.1 24a15.1 15.1 0 1 1-30.2 0 15.1 15.1 0 0 1 30.2 0Z'></path>
        </svg>
    );
}

export function ProfileVideosIcon({
    width = '20px',
    height = '20px',
    className,
}) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M11 8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2Zm0 18a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2ZM22 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9Zm1 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2ZM34 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9Zm1 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2Z'></path>
        </svg>
    );
}

export function ProfileReportsIcon({
    width = '20px',
    height = '20px',
    className,
}) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M37.7 15v19.7l3.48-3.7a.7.7 0 0 1 .99-.03l1.46 1.37c.28.26.3.7.03.99l-6.26 6.66a2.3 2.3 0 0 1-3.34.01l-6.36-6.66a.7.7 0 0 1 .02-.99l1.45-1.38a.7.7 0 0 1 .99.02l4.14 4.34V15a4.3 4.3 0 0 0-4.3-4.3h-3.5a.7.7 0 0 1-.7-.7V8c0-.39.31-.7.7-.7H30a7.7 7.7 0 0 1 7.7 7.7ZM17.84 17.34 13.7 13v20a4.3 4.3 0 0 0 4.3 4.3h3.5c.39 0 .7.31.7.7v2a.7.7 0 0 1-.7.7H18a7.7 7.7 0 0 1-7.7-7.7V13.63l-3.48 3.7a.7.7 0 0 1-.99.03L4.37 16a.7.7 0 0 1-.03-.98l6.26-6.67a2.3 2.3 0 0 1 3.34-.01l6.36 6.66a.7.7 0 0 1-.02.99l-1.45 1.38a.7.7 0 0 1-.99-.02Z'></path>
        </svg>
    );
}

export function ProfileLikedIcon({
    width = '20px',
    height = '20px',
    className,
}) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M8.71 10.56c4.24-4.2 10.93-4.15 15.29.63 4.36-4.78 11.05-4.84 15.29-.63a10.82 10.82 0 0 1 2.82 10.55L39.5 18.5c.06-2.1-.71-4.21-2.32-5.81-3.06-3.03-7.92-3.03-11.17.75l-.03.04-.92.91a1.5 1.5 0 0 1-2.12 0l-.92-.91-.03-.04c-3.25-3.78-8.11-3.78-11.17-.75a7.82 7.82 0 0 0 0 11.12L24 36.89l1.95-1.94 2.12 2.12-3.01 3a1.5 1.5 0 0 1-2.12 0L8.71 25.93a10.82 10.82 0 0 1 0-15.38Zm33.14 21.3a16.64 16.64 0 0 0 2.25-2.68 4 4 0 0 0 .22-.41c.04-.09.18-.4.18-.77 0-.3-.09-.56-.12-.64a8.38 8.38 0 0 0-.68-1.32c-.43-.67-1.07-1.5-1.91-2.31a11.15 11.15 0 0 0-10.85-2.8l2.57 2.58.49-.01c2.5 0 4.4 1.14 5.71 2.4a9.87 9.87 0 0 1 1.63 2.02 13.67 13.67 0 0 1-1.6 1.8l2.11 2.13Zm-5.84.27c-.65.24-1.33.37-2.01.37-1.95 0-3.85-1.1-5.37-2.44a13.9 13.9 0 0 1-1.97-2.14l.17-.26a9.87 9.87 0 0 1 2.26-2.45L36 32.13Zm-9.06-9.06a12.74 12.74 0 0 0-3.17 3.89c-.06.13-.12.27-.16.4-.03.08-.12.34-.12.64 0 .37.14.68.18.76a9.6 9.6 0 0 0 .84 1.3c.51.66 1.23 1.47 2.12 2.25 1.74 1.54 4.34 3.19 7.36 3.19 1.57 0 3.02-.44 4.3-1.08l1.93 1.93a1 1 0 0 0 1.42 0l.7-.7a1 1 0 0 0 0-1.42L27.77 19.65a1 1 0 0 0-1.42 0l-.7.7a1 1 0 0 0 0 1.42l1.3 1.3Z'></path>
        </svg>
    );
}

export function WindowFrameIcon({
    width = '20px',
    height = '20px',
    className,
}) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M4 28a2.5 2.5 0 0 1 2.5-2.5H20a2.5 2.5 0 0 1 2.5 2.5v13.5A2.5 2.5 0 0 1 20 44H6.5A2.5 2.5 0 0 1 4 41.5V28Zm4 1.5V40h10.5V29.5H8ZM25.5 28a2.5 2.5 0 0 1 2.5-2.5h13.5A2.5 2.5 0 0 1 44 28v13.5a2.5 2.5 0 0 1-2.5 2.5H28a2.5 2.5 0 0 1-2.5-2.5V28Zm4 1.5V40H40V29.5H29.5ZM25.5 6.5A2.5 2.5 0 0 1 28 4h13.5A2.5 2.5 0 0 1 44 6.5V20a2.5 2.5 0 0 1-2.5 2.5H28a2.5 2.5 0 0 1-2.5-2.5V6.5Zm4 1.5v10.5H40V8H29.5ZM4 6.5A2.5 2.5 0 0 1 6.5 4H20a2.5 2.5 0 0 1 2.5 2.5V20a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 20V6.5ZM8 8v10.5h10.5V8H8Z'></path>
        </svg>
    );
}

export function HomeMessageIcon({
    width = '22px',
    height = '21px',
    className,
}) {
    return (
        <svg
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
            viewBox='0 0 48 48'
        >
            <path
                fillRule='evenodd'
                d='M2 21.5c0-10.22 9.88-18 22-18s22 7.78 22 18c0 5.63-3.19 10.74-7.32 14.8a43.6 43.6 0 0 1-14.14 9.1A1.5 1.5 0 0 1 22.5 44v-5.04C11.13 38.4 2 31.34 2 21.5M14 25a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6m13-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0'
                clipRule='evenodd'
            ></path>
        </svg>
    );
}

export function HomeShareIcon({ width = '24px', height = '24px', className }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
            fill='currentColor'
        >
            <path
                fill='currentColor'
                fillRule='evenodd'
                d='M10.938 3.175a.674.674 0 0 1 1.138-.488l6.526 6.215c.574.547.554 1.47-.043 1.991l-6.505 5.676a.674.674 0 0 1-1.116-.508V13.49s-6.985-1.258-9.225 2.854c-.209.384-1.023.518-.857-1.395.692-3.52 2.106-9.017 10.082-9.017V3.175Z'
                clipRule='evenodd'
            />
            <path
                fill='#161823'
                fillRule='evenodd'
                d='m15.754 6.212 1.295 2.59a1.122 1.122 0 0 1-.268 1.349l-5.799 5.042s-.28 1.403.562 1.403c.842 0 7.578-6.174 7.578-6.174s.28-.842-.561-1.684c-.843-.842-2.807-2.526-2.807-2.526Z'
                clipRule='evenodd'
                opacity='.03'
            />
            <path
                fill='url(#pc-share-44d9fe83_a)'
                fillRule='evenodd'
                d='M10.937 6.23v7.297s-6.683-.942-8.777 2.246C.146 18.839.331 12.309 3.363 9.057c3.033-3.252 7.574-2.827 7.574-2.827Z'
                clipRule='evenodd'
                opacity='.09'
            />
            <defs>
                <radialGradient
                    id='pc-share-44d9fe83_a'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientTransform='rotate(-113.046 11.628 5.43) scale(8.93256 8.78076)'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop />
                    <stop offset='.995' stopOpacity='.01' />
                    <stop offset='1' stopOpacity='.01' />
                </radialGradient>
            </defs>
        </svg>
    );
}

export function HomeSaveIcon({ width = '24px', height = '24px', className }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
            fill='currentColor'
        >
            <path
                fill='currentColor'
                d='M4 4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15.13a1 1 0 0 1-1.555.831l-6.167-4.12a.5.5 0 0 0-.556 0l-6.167 4.12A1 1 0 0 1 4 19.63V4.5Z'
            />
            <path
                fill='currentColor'
                fillOpacity='.03'
                d='M4.032 4.144A1.894 1.894 0 0 0 4 4.5v15.13a1 1 0 0 0 1.555.831l6.167-4.12a.5.5 0 0 1 .41-.066l-.427-.198a1.489 1.489 0 0 0-1.377.063c-.581.339-1.45.85-2.25 1.339-.59.359-1.427.695-2.187.962-.929.325-1.86-.387-1.86-1.37V4.143Zm8.251 12.202 6.162 4.115A1 1 0 0 0 20 19.63V4.5a2 2 0 0 0-1.123-1.798c.21.254.334.58.33.936a117.008 117.008 0 0 1-.896 13.408c-.124.99-1.17 1.553-2.076 1.133l-3.952-1.833Z'
            />
        </svg>
    );
}

export function HomeHeartIcon({ width = '24px', height = '24px', className }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
            fill='currentColor'
        >
            <path d='M7.5 2.25c3 0 4.5 2 4.5 2s1.5-2 4.5-2c3.5 0 6 2.75 6 6.25 0 4-3.269 7.566-6.25 10.25C14.41 20.407 13 21.5 12 21.5s-2.45-1.101-4.25-2.75C4.82 16.066 1.5 12.5 1.5 8.5c0-3.5 2.5-6.25 6-6.25Z' />
        </svg>
    );
}

export function PlusIcon({ width = '14px', height = '14px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M26 7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h15v15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V26h15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H26V7Z'></path>
        </svg>
    );
}

export function ChevronUpIcon({ width = '24px', height = '24px', className }) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='m24 20.24 13.17 13.17a1 1 0 0 0 1.42 0l2.82-2.82a1 1 0 0 0 0-1.42L25.06 12.82a1.5 1.5 0 0 0-2.12 0L6.59 29.17a1 1 0 0 0 0 1.42L9.4 33.4a1 1 0 0 0 1.42 0L24 20.24Z'></path>
        </svg>
    );
}

export function ChevronDownIcon({
    width = '24px',
    height = '24px',
    className,
}) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='m24 27.76 13.17-13.17a1 1 0 0 1 1.42 0l2.82 2.82a1 1 0 0 1 0 1.42L25.06 35.18a1.5 1.5 0 0 1-2.12 0L6.59 18.83a1 1 0 0 1 0-1.42L9.4 14.6a1 1 0 0 1 1.42 0L24 27.76Z'></path>
        </svg>
    );
}

export function CloseRegularIcon({
    width = '16px',
    height = '16px',
    className,
}) {
    return (
        <svg
            fill='currentColor'
            viewBox='0 0 48 48'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            className={className}
        >
            <path d='M38.7 12.12a1 1 0 0 0 0-1.41l-1.4-1.42a1 1 0 0 0-1.42 0L24 21.17 12.12 9.3a1 1 0 0 0-1.41 0l-1.42 1.42a1 1 0 0 0 0 1.41L21.17 24 9.3 35.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0L24 26.83 35.88 38.7a1 1 0 0 0 1.41 0l1.42-1.42a1 1 0 0 0 0-1.41L26.83 24 38.7 12.12Z'></path>
        </svg>
    );
}

export function SpeakerIcon({ width = '24px', height = '24px', className }) {
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
                d='M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z'
            ></path>
        </svg>
    );
}
