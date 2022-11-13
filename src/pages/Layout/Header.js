import React from 'react';
import {Link} from 'react-router-dom';
// Components

export default function Header() {
    return (
        <React.Fragment>
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10 bg-gray-100  ">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                    </Link>
                    <p className={'text-base font-medium text-gray-600 pt-1 sm:pt-2 ml-3'}>Crea Case</p>
                </div>

                <Link to="/login" className='tf-link'>
                    Login
                </Link>

                <Link to="/" className='tf-link'>
                    Home
                </Link>

            </div>
        </React.Fragment>
    )
}
