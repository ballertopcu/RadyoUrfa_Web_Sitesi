import React, { Component } from 'react'


export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Künye</h3>
                            <h4 className="mt-4">Şirket Unvanı</h4>
                            <p className="">
                            Doğan Yayıncılık ve Ticaret Anonim Şirketi</p>
                            <h4>Yayın Lisans Bilgileri ve Yayın Ortamları</h4>
                            <p className="">
                            Radyo: karasal FM 91.5</p>
                        </div>
                        <div className="col-lg-4 sosyal-medya">
                            <h3>Sosyal Medya</h3>
                            <div className="foot-face mt-4"><i className="fab fa-facebook-f"></i> Radyo Urfa</div>
                            <div className="foot-ins"><i className="fab fa-instagram"></i> Radyo Urfa</div>
                            <div className="foot-you"><i className="fab fa-youtube"></i> Radyo Urfa</div>
                            <div className="foot-twit"><i className="fab fa-twitter"></i> Radyo Urfa</div>
                        </div>
                        <div className="col-lg-4 footer-ilet">
                            <h3>İletişim Bilgileri</h3>
                             <div className="mt-4"><i className="far fa-envelope"></i> radyourfa63@gmail.com </div>
                             <div><i className="fas fa-phone"></i> 0543 226 6870 - 
                                                                054 2226 6612</div>
                             <div><i className="fas fa-map-marker-alt"></i> Paşabağı Mahallesi <span className="d-block ml-3"> Mevlana Cad. 2/3  ŞANLIURFA</span></div>
                             <div><i className="fas fa-fax"></i> 313 55 33</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
