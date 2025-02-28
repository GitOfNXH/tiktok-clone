import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    children,
    primary,
    outline,
    text,
    rounded,
    disable,
    small,
    large,
    leftIcon,
    rightIcon,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        for (const key in props) {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        }
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
