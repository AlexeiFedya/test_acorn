import React from 'react';
import { Link } from 'react-router-dom'


import './footer-cards.scss';
import './footer-links.scss';
import './footer-description.scss';
import './footer-requisites.scss'



import btc from '../../img/BTC.png'
import ltc from '../../img/LTC.png'
import eth from '../../img/ETH.png'
import maestro from '../../img/maestro-symbol.svg'
import master from '../../img/mastercard-symbol.svg'
import xkr from '../../img/XRP.png'
import visa from '../../img/visa.svg'

const FooterBithoven = () => {
return (
        <footer className="footer__bithoven">
            <div className="footer__cards">
                <img className="page-footer__cards-image" src={btc}  alt="btc"/>
                <img className="page-footer__cards-image" src={ltc}  alt="ltc"/>
                <img className="page-footer__cards-image" src={eth}  alt="eth"/>
                <img className="page-footer__cards-image" src={maestro}  alt="maestro"/>
                <img className="page-footer__cards-image" src={master}  alt="master"/>
                <img className="page-footer__cards-image" src={xkr}  alt="xkr"/>
                <img className="page-footer__cards-image" src={visa}  alt="visa"/>
            </div>
            <ul className="footer_ul_link">
                <li className="footer__li_link">
                    <Link to="/simplepage">ABOUT US</Link>
                </li>
                <li className="footer__li_link">
                    <Link to="/products">PRODUCTS</Link>
                </li>
                <li className="footer__li_link">
                    <Link to="/contactus">CONTACT US</Link>
                </li>
                <li className="footer__li_link">
                    <Link to="/termsofuse">TERMS OF USE</Link>
                </li>
                <li className="footer__li_link">
                    <Link to="/privacypolicy">PRIVACY POLICY</Link>
                </li>
                <li className="footer__li_link">
                    <Link to="/amlpolicy">AML POLICY</Link>
                </li>
            </ul>
            <div className="footer__description">
                <p>Bithoven OU incorporated in Estonia with the company number 14412835 
                    and with its registered office at:</p> 
                    <p>Harju maakond, Tallinn, Lasnamäe linnaosa,
                    Valukoja tn 8/2, 11415, Estonia</p>
                    <p>License No. 123456 issued by Financial Inteligence
                    Unit of Estonia</p>
            </div>
            <ul className="footer_requisites">
                <li className="footer__li_footer_requisites">
                    <a href="tel:+372 555-333-222">+372 555-333-222</a>
                </li>
                <li className="footer__li_footer_requisites">
                    <p>All rights reserved © 2020 Bithoven OÜ</p>
                </li>
                <li className="footer__li_footer_requisites">
                    <a href="mailto:support@bithoven.eu">support@bithoven.eu</a>
                </li>
            </ul>
        </footer>
    )
}
export {
    FooterBithoven
};