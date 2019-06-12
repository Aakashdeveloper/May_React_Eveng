import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div>
                <Link to="/">Redux News App</Link>
            </div>
        </header>
    )
}

export default Header;