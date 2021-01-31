import React, { Component } from 'react'
import logo from './logo-1.png'
import {Link} from 'react-router-dom';

export class AllNav extends Component {
    render() {
        return (
            <>
            <div className="all-nav">
            <div className="iletisim">
                    <div className="container">
                        <div className="row">
                        <div className="iletisim-item1 col">
                                <a href="#"><i className="fas fa-phone"></i> <span className="il-il">Telefon: 0532 288 08 83</span> </a>
                            </div>
                            <div className="iletisim-item2 col">
                                <a href="#"><i className="far fa-envelope"></i> <span className="il-il">E-mail: radyourfa63@gmail.com</span> </a>
                            </div> 
                        </div>  
                    </div>   
                </div>
            <header>
                <div className="container">
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checktbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <a href="#" className="logo"><img src={logo} className="logo-nav" alt=""/></a>
                <ul className="ul-navbar">
                            <li className="">
                                <Link to="/">AnaSayfa</Link>
                            </li>
                            {/* <li className="">
                                <a href="/">Hakkımızda</a>
                            </li> */}
                            <li className="">
                                <Link to="/iletisim">İletişim</Link>
                            </li>
                            <li className="">
                                <Link to="/">Çözüm Ortaklarımız</Link>
                            </li>
                        </ul>
                        </div>
            </header>
            <h2 className="text-center all-nav-h2">Bize Ulaşın</h2>
            <p className="text-center  all-nav-p mt-4">İstek, Öneri ve Reklam Talepleriniz İçin Bize Ulaşın.</p>
            <p className="text-center"><i className="fas fa-sort-down all-nav-i"></i></p>
        </div>
        </>
        )
    }
}

export default AllNav
