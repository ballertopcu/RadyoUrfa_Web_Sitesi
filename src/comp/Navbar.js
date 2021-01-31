import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from './logo-1.png'


export class Navbar extends Component {
    render() {
        return (
            <>
                <div className="arkaplan">
                <div className="iletisim">
                    <div className="container">
                        <div className="row">
                            <div className="iletisim-item1 col">
                                <a href=""><i className="fas fa-phone"></i> <span className="il-il">Telefon: 0532 288 08 83</span> </a>
                            </div>
                            <div className="iletisim-item2 col">
                                <a href=""><i className="far fa-envelope"></i> <span className="il-il">E-mail: radyourfa63@gmail.com</span> </a>
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
            <div className="main-yazi lead text-white container text-center">
                <hr className="main-yazi-hr bg-white"/>
                <p className="harabat">İyi Şeyler Duymak İçin</p>   
                <hr className="main-yazi-hr bg-white"/>
            </div>
            </div>
            </>
        )
    }
}



export default Navbar
