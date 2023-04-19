import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <div className='flex gap-5'>
                            <Link to="/">Home</Link>
                            <Link to="/reg">REG</Link>
                            <Link to="/login">Login</Link>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;