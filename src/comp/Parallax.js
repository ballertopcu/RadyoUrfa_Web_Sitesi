import React, { Component } from 'react'
import radio from './radio4.png'
import {Link} from 'react-router-dom';

export class Parallax extends Component {
    constructor(props){
        super(props);
        this.state={
            saat:0,
            dakika:0,
            saniye:0
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                saat : new Date().getHours(),
                dakika : new Date().getMinutes(),
                saniye : new Date().getSeconds()
            })
         }, 1000);
    }
    
    render() {
        
        return (
            <>
            <div className="parallax">
                <div className="parallax-inner">
                     <div id="clock">
                        <h2>Sağlıklı Zaman Geçirmeniz Dileğiyle</h2>
                        <div id="time">
                            <div><span id="hour">{this.state.saat}</span><span>Saat</span></div>
                            <div><span id="hour">{this.state.dakika}</span><span>Dakika</span></div>
                            <div><span id="hour">{this.state.saniye}</span><span>Saniye</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parallax-ex text-center">
                <div className="all-ex">
                <div className="ex-img text-center">
                 <img src={radio} alt=""/>
                </div>
                <div className="ex-h2">
                <h2>Sesinizi <span className="tum"> Tüm Dünyaya</span> Duyuralım!</h2>
                </div>
                <div className="reklam text-center">
                <h4>
                <span>R</span>
                <span>E</span>
                <span>K</span>
                <span>L</span>
                <span>A</span>
                <span>M</span>
                </h4>
                </div>
                <div className="container btn-i mt-4">
                <Link className="reklam-btn" to="/iletisim"><i className="far fa-hand-point-up mr-4"></i> Reklam Şeçenekleri İçin Tıklayınız</Link>
                </div>
                </div>
            </div>

            </>
        )
    }
}

export default Parallax
