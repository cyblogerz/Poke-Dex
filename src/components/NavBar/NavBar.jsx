import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

const hamburger = <FontAwesomeIcon size="2x" icon={faBars}/>

export default function NavBar(props){
    return(
        <div className="NavBar">
        <h1 className="title">PokeDex</h1>
        {props.isTab ? <div className="menu ham">{hamburger}</div> : <ul className="links">
            <li className="menu"><a href="/">About</a></li>
            <li className="menu"><a href="/">Pokemon </a> </li>
            <li className="menu"><a href="/">Home</a></li>
        </ul>}
        </div>
    );
}



