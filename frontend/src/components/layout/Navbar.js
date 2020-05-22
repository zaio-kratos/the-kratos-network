import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import Fireapp from '../../config/firebaseConfig'

class Navbar extends Component {
    
    state = {
        links:null
    }   
    
    componentDidMount(){
        Fireapp.auth().onAuthStateChanged(
        (user) => {
            if(user)
                this.setState({
                    links:<SignedInLinks/>
                })
            else{
                this.setState({
                    links:<SignedOutLinks/>
                })
            }
        })
    }
    render(){
    console.log("from heret",this.state.links)
    return (
        <nav className="nav-wrapper purple darken-3">
            <div className="container">
                <Link to = '/dashboard' className="brand-logo">Kratos Network</Link>
                { this.state.links }
            </div>
        </nav>
    )}
}
export default Navbar