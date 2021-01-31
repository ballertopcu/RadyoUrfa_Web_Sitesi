import React, { Component } from 'react'
import Navbar from './Navbar'
import Social from './Social'
import Main from './Main'
import Parallax from './Parallax'
import Footer from './Footer'
import Baller from './Baller'
import {BrowserRouter,Switch,Link,NavLink,
    Route,HashRouter as Router} from 'react-router-dom'
import Iletisim from './Iletisim'
import AllNav from './AllNav'

export class App extends Component {
    render() {
        return (
            
            <Router>
                <Social/>
     
                    <Route exact path="/" render={props=>(
                        <>  
                            <Navbar/>
                            <Main/>
                            <Parallax/>
                        </>
                    )}/>
                    <Route path="/iletisim" render={props=>(
                        <>
                            <AllNav/>
                            <Iletisim/>
                        </>
                    )}/>

                <Footer/>
                <Baller/>
            </Router>
        )
    }
}

export default App
