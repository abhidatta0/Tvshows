import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Styles from './style.module.scss';

import { Button } from '../index';

const Navbar = () => {
    const navigate = useNavigate();

    const handle = useCallback(() => {
        navigate('about');
    }, []);
    return (
        <nav className={Styles.wrapper}>
            <div className={Styles.content}>
                <Link to="/">BIT SHOWS</Link>
                <Button title="About" onClick={handle} />
            </div>
        </nav>
    );
};

export default Navbar;
