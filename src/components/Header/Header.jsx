import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {


    const { user,logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }
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
                            
                            <div>
                                {
                                    user ?
                                        <>
                                            <span>{user.email}</span>
                                            <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                                            
                                        </>
                                        : <Link to="/login">Login</Link>
                                }
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;