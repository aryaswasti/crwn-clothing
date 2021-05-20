import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1>HATS</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1>JACKETS</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1>SNEAKERS</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1>WOMEN'S</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1>MEN'S</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;