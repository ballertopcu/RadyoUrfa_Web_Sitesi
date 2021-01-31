import React, { Component } from 'react'
import emailjs from 'emailjs-com';



export class Iletisim extends Component {
    constructor(props){
        super(props);
        this.sendEmail = this.sendEmail.bind(this);
        this.state={
            alert:false,
            gonderildi:false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    sendEmail(e) {
        e.preventDefault();
        
            if(e.target.name.value !== "" && e.target.surname.value !== "" && e.target.email.value !== "" && e.target.phone.value !== "" && e.target.message.value !== ""){
                emailjs.sendForm('service_weehv4w', 'template_ydbzpbb', e.target, 'user_UQZEP1F6uXo4YFzMSH9Vu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
                this.setState({
                    alert:false
                })
                this.setState({
                    gonderildi:true
                })
                setTimeout(()=>{
                    this.setState({
                        gonderildi : false
                    })
                },4000)
            }
            else{
                this.setState({
                    alert:true
                })
                setTimeout(()=>{
                    this.setState({
                        alert : false
                    })
                },3000)
            }
  
        
    }
   
    render() {
        const style = {
            width: '100%',
            height: '100%'
          }
        return (
            <div className="iletisim-component">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 butun butun-1">
                    <div className="row birinci">
                        <h1 className="font-weight-bold text-center my-4" >İletişim Bilgileri</h1>
                        <div className="col-md-12 il-soc">
                            <a href="#" className="ic-face"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="ic-ins"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="ic-you"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="ic-twit"><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className="col-md-12">
                        <div className="ilt-il"><i className="far fa-envelope mr-4"></i> radyourfa63@gmail.com</div>
                        </div>
                        <div className="col-md-12">
                        <div className="ilt-il"><i className="fas fa-phone mr-4"></i> 0543 226 6870 - 
                                                                054 2226 6612</div>
                        </div>
                        <div className="col-md-12">
                        <div className="ilt-il"><i className="fas fa-map-marker-alt mr-4"></i> Paşabağı Mahallesi <span className="d-block ml-3"> Mevlana Cad. 2/3  ŞANLIURFA</span></div>
                        </div>
                        
                    </div>
                    <iframe className="harita" width="520" height="400"  scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Pa%C5%9Faba%C4%9F%C4%B1%20Mahallesi%20Mevlana%20Cad%20Adana+()&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.symptoma.com.tr/tr/info/covid-19#info'></a> <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=e62ea90a1dafe0927d258e0d9c900dcb1c6d435d'></script>
                    </div>
                    <div className="col-lg-6 butun">
                        <form onSubmit={this.sendEmail}>
                        <h1 className=" font-weight-bold text-center my-4">Bir Mesaj Yazın</h1>
                        <p className="text-center mx-auto mb-5">Görüş, öneri ve her türlü reklam ve çözüm ortaklığı tekliflerinizi bize iletebilirsiniz.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <label >AD:</label>
                                <input type="text" className="form-control" name="name"/>
                            </div>
                            <div className="col-md-6">
                            <label>SOYAD:</label>
                            <input type="text" className="form-control"  name="surname"/>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label >EMAİL:</label>
                                <input type="email" className="form-control"  name="email"/>
                            </div> 
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <label >TELEFON:</label>
                                <input type="text" className="form-control" name="phone"/>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label >MESAJ:</label>
                                <textarea name="mesaj" rows="5" className="form-control" name="message"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg mt-4">GÖNDER</button>
                        {   this.state.alert && (<div className="alert alert-danger mt-4">
                            Alanları Doldurunuz 
                            </div>)
                        }
                        {   this.state.gonderildi && (<div className="alert alert-success mt-4">
                            Mesajınız Başarıyla Gönderildi
                         
                            </div>)
                        }
                    </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Iletisim