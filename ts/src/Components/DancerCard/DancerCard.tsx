import * as React from "react";
import "./DancerCard.css";

interface IProps {
    num: string,
    key: string,
    name: string,
    bg: string,
    dances?: string[],
    height: string,
    age: string,
    score: string
}

const DancerCard = (props: IProps) => (
    <div className={`card horizontal ${props.bg}`}>
        <ul className="collapsible expandable">
            <li>
                <div className="row row-dancer">
                    <div className="col s3">
                        <h5>{props.num}</h5>
                    </div>
                    <div className="col s6 center-align">
                        <p className="dancer-name">{props.name}</p>
                    </div>
                    <div className="col s3 right-align">
                        {/* <span className="collapsible-header"> */}
                            <a className="btn-small btn-floating black collapsible-header">
                                <i className="material-icons">add</i>
                            </a>
                        {/* </span> */}
                    </div>
                </div> 
                <div className="row row-collapsible collapsible-body">
                    <div className="row row-extra-info">
                        <div className="col s6 center-align">
                            <p><b>Age:</b> {props.age}</p>
                        </div>
                        <div className="col s6 center-align">
                            <p><b>Height:</b> {props.height}</p>
                        </div>
                    </div>
                    <div className="row row-extra-info">
                        <div className="col s6 center-align">
                            <p><b>Score:</b> {props.score}/5</p>
                        </div>
                        {props.dances &&
                            <div className="col s6 center-align">
                                <p><b>Dances:</b></p>
                                <ul>
                                    {props.dances.map(dance => (
                                        <li key={dance}>{dance}</li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </li>
        </ul>
    </div>
)

export default DancerCard;
  
  