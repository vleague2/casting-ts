import * as React from "react";
import "./Sidebar.css";

interface IProps {
    children: any
}

const Sidebar = (props: IProps) => (
    <div id="container-sidebar">
        <ul id="slide-out" className="sidenav sidenav-fixed">
            <h4 className="center-align">Dancers</h4>
            {props.children};
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
)

export default Sidebar;
