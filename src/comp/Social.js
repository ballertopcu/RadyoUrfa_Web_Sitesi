import React, { Component } from 'react'

export class Social extends Component {
    render() {
        return (
            <>
               <div className="wrapper">
                   <div className="share soc-face"><a href="#"><i className="fab fa-facebook-f"></i></a></div>
                   <div className="share soc-ins"><a href="#"><i className="fab fa-instagram"></i></a></div>
                   <div className="share soc-you"><a href="#"><i className="fab fa-youtube"></i></a></div>
                   <div className="share soc-twit"><a href="#"><i className="fab fa-twitter"></i></a></div>
               </div> 
            </>
        )
    }
}

export default Social
