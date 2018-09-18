import * as React from "react";
import "./DanceCard.css";
import DancerCard from "./../DancerCard/DancerCard";

interface IProps {
    name: string,
    key: string,
    cast: string[]
}

const DanceCard = (props: IProps) => (
    <div className="col s6">
        <div className="card card-dance">
            <div className="card-content">
                <span className="card-title">
                    {props.name}
                </span>
                {props.cast.map(dancer => (
                    <DancerCard 
                        key={dancer}
                        num="1"
                        name={dancer}
                        age="11"
                        height="4'"
                        score="4"
                        bg= ""
                    />
                ))}
            </div>
        </div>
    </div>
    
)

export default DanceCard;