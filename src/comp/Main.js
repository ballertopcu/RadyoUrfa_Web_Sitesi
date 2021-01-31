import React, { Component } from 'react'
import logo2 from './logo-1.png'




export class Main extends Component {
    constructor(props){
        super(props);
        this.ileriGit = this.ileriGit.bind(this);
        this.geriGit = this.geriGit.bind(this);
        this.countDuzelt = this.countDuzelt.bind(this);
        this.state = {
            count : 0,
            programlar:[{title:"MİSYONUMUZ",body:"Milli ve manevi değerlere sahip, etkin programlarıyla toplumumuzun kültürel birikimine katkı sağlayan, toplumsal tepkilere duyarlı bir şekilde yaklaşarak kamuoyunun sesini yansıtan, haber bültenleriyle, olayları objektif olarak aktaran ama daima doğrunun ve haklının tarafında yer alan, bölge ekonomisinin kalkınmasını sağlayacak proje üretiminin gerçekleşmesine katkıda bulunan, evrensel hukuk kuralları ve evrensel basın meslek ilkeleri çerçevesinde öncü ve örnek bir yayın sergilemektir."},
            {title:"VİZYONUMUZ",body:"Radyo yayıncılığı alanında teknik altyapısı, mali yapılanması, yayın kalitesi ve program çeşitliliğiyle bölgemizin en çok dinlenen ve en seviyeli yayın kuruluşu olmaktır."},{title:"YAYIN İLKELERİ",body:" Milli ve manevi değerlere aykırı yayın yapılamaz. Evrensel basın meslek ilkelerine aykırı yayın yapılamaz.Taraflı ve maksatlı haberlere yer verilemez.Gücünü ve yetkilerini kötüye kullanma, hiç kimse hakkında hüküm verme ve yargılama gibi eğilimi olamaz."}
            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    ileriGit(){
        if(this.state.count >=0 && this.state.count < this.state.programlar.length-1 ){
            this.setState({
                count: this.state.count+1
            })
        }
        else{
            this.countDuzelt();
        }           
    }
    geriGit(){
        if(this.state.count >0 && this.state.count < this.state.programlar.length ){
            this.setState({
                count: this.state.count-1
            })
        }
        else{
            this.countDuzelt();
        }  
    }

    countDuzelt(){
        if(this.state.count <= 0){
            this.setState({
                count: this.state.programlar.length-1
            })
        }
        if(this.state.count >= this.state.programlar.length-1){
            this.setState({
                count: 0
            })
        }
    }
    render() {

       
        return (
            <div className="container icerik">
                <div className="a-main row">
                    <div className="col-lg-6 text-center canli">
                        <h1><i className="fas fa-microphone-alt"></i> <span>Canlı Yayın</span></h1>
                        <div className="canli-icerik row">
                        <div className="col-lg-12">
                            <img src={logo2} className="logo-2"/>
                        </div>
                        <div className="col-lg-12">
                            <audio controls preload="metadata" className="mt-5">
                            <source src="http://185.87.252.44:1935/link2/link2/playlist.m3u8" type="audio/mpeg"/>
                            </audio>
                        </div> 
                        </div>
                        </div>
                    <div className="col-lg-6 text-center canli">
                        <h1><i className="fas fa-dungeon"></i> <span>Hakkımızda</span></h1>
                        <div className="canli-icerik icerik-2">
                        <h3>{this.state.programlar[this.state.count].title}</h3>
                        <p>{this.state.programlar[this.state.count].body}</p>
                        
                        <div className="row">
                            <div className="col-6 p-0">
                                <button className="btn btn-secondary btn-block geri-button"  onClick={this.geriGit}><i className="fas fa-chevron-left"></i></button>
                            </div>
                            <div className="col-6  p-0">
                                <button className="btn btn-secondary btn-block ileri-button" onClick={this.ileriGit}><i className="fas fa-chevron-right"></i></button> 
                            </div>
                        </div>
                        </div>
                        <button className="btn btn-outline-dark btn-block btn-sm mt-3 tum-prog">Bilgi Almak İçin</button>
                        </div>     
                    {/* <div className="col-lg-4 text-center canli canli-son">
                        <h1><i className="far fa-clock"></i> <span>Yayın Akışı</span></h1>
                        <div className="canli-icerik">
                            <div className="all-akis">
                            <div className="akis">
                                <h6 className="font-weight-bold">Günün Sohbeti - Necdet Çağıl</h6>
                                <p><i className="far fa-calendar-alt mr-3"></i> Cumartesi, 18:05 - 18:30</p>
                            </div>
                            <div className="akis">
                                <h6 className="font-weight-bold">Günün Sohbeti - Necdet Çağıl</h6>
                                <p><i className="far fa-calendar-alt mr-3"></i> Cumartesi, 18:05 - 18:30</p>
                            </div>
                            <div className="akis">
                                <h6 className="font-weight-bold">Günün Sohbeti - Necdet Çağıl</h6>
                                <p><i className="far fa-calendar-alt mr-3"></i> Cumartesi, 18:05 - 18:30</p>
                            </div>
                            <div className="akis">
                                <h6 className="font-weight-bold">Günün Sohbeti - Necdet Çağıl</h6>
                                <p><i className="far fa-calendar-alt mr-3"></i> Cumartesi, 18:05 - 18:30</p>
                            </div>
                            </div>
                        </div>
                        </div> */}
                    </div>
                </div>
        )
    }
}

export default Main
