import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";


class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
      this.setState({ clicked: !this.state.clicked})
    }
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Campanha Monitores 2023
        </h1>

        <div className="menu-icons" onClick={this.handleClick} >
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}> 
                  <i className={item.icon}></i>{item.title}
                </a>
            </li>
            )
          })}
            
        </ul>
      </nav>
    );
  }
}

export default Navbar;
