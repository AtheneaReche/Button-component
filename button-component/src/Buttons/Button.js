import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Button = (props) => {
    const{
        children,
        variant,
        disableShadow,
        disabled:disableAttr,
        startIcon,
        endIcon,
        size,
        color
    } = props;

    const [disabled, setDisabled] = useState(disableAttr);

    const exists = (element) => element;

    const style = {
        display: 'flex',
        alignItems: 'center',
        gap: 4
    };

    const icon = () =>  <FontAwesomeIcon icon={faCartPlus}/>;

    let classes = [
        'react-btn',
        variant,
        disableShadow && 'disable-shadow',
        size,
        color
    ].filter(exists).join(' ');

     return(
        <button className={classes} style = {style}>
            {startIcon && icon()}
            {children || "Default"}
            {endIcon && icon()}
        </button>
     )
};

export default Button;