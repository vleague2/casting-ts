import React from "react";
import "./Sidebar.css";


const Sidebar = (props) => (
    <div id="container-sidebar">
        <ul id="slide-out" className="sidenav sidenav-fixed">
            <h4 className="center-align">Dancers</h4>
            {props.children};
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
)

export default Sidebar;

