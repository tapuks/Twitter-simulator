import logo from "../../assets/img/twitter-logo.png"


import './Header.scss'


export default function Header() {
    return (
        <div className ="header">
            <img src={logo}></img>
            <h3>Twitter Simulator</h3>
        </div>
    )
}