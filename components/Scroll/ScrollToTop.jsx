import React, { useState, useEffect } from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';
import { Link } from 'react-scroll';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
    const [ isVaisible, setVisible ] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
}

return (
    <div>

    </div>
)

export default ScrollToTop;