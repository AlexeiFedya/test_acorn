import React from 'react';
import { Link } from 'react-router-dom'

import './page-header.scss';
import './header-rates.scss';
import './page-header__company-description.scss';
import './header-site-list.scss';


import bithovenlogo from '../../img/logotype2.png'

const HeaderBithoven = () => {
return (
        <header className="page-header">
            <div className="wrapper-pageheader-descrip">
                <Link to="/" className="page-header__logo">
                    <img className="page-header__logo-image" src={bithovenlogo}  alt="Bithoven"/>
                </Link>
                <div className="page-header__company-description">
                    <p className="p-header">Payment Service</p>
                    <p>Licensed cryptocurrency payment service:</p>
                    <p>exchange, transfer and storage of blockchain assets</p>
                </div>
            
            <div className="page-header__exchange-rates">
                <p>BTC: 10827.34 EUR</p>
                <p>ETH: 346.92 EUR</p>
                <p>LTC: 57.23 EUR</p>
                <p>XRP: 0.1834 EUR</p>
            </div>
            </div>
            <nav className="main-nav main-nav--closed main-nav--nojs">
                <div className="main-nav__wrapper">
                    <ul className="main-nav__list site-list">
                        <li className="site-list__item site-list__item--active">
                            <span>Payment to service:</span>
                        </li>
                        <li className="site-list__item">
                            <Link to="/pay">Pay</Link>
                        </li>
                        <li className="site-list__item">
                            <Link to="/transaction">Transactions</Link>
                        </li>
                        <li className="site-list__item">
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li className="site-list__item">
                            <Link to="/mywallet">MY WALLET</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
    )
}
export {
    HeaderBithoven
};