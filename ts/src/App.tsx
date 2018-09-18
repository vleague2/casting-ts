import * as React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import DancerCard from "./Components/DancerCard/DancerCard";
import DanceCard from "./Components/DanceCard/DanceCard";
import dancerData from "./dancers";
import danceData from "./dances";

interface IProps {}

interface IDancer {
  num: string,
  name: string,
  age: string,
  height: string,
  score: string,
  numDances: string,
  bgColor: string,
  dances: string[]
}

interface IDance {
  name: string,
  cast: string[]
}

interface IState {
  dancers: IDancer[],
  dances: IDance[]
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      dancers: dancerData,
      dances: danceData
    }
  };

  componentDidMount(): void {
    // to init collapsibles
    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.collapsible');
    //   var instances = window.M.Collapsible.init(elems);
    // });
  }

  render() {
    return (
      <div>
        <Sidebar>
          {this.state.dancers.map(dancer => (
            <DancerCard
              num={dancer.num}
              key={dancer.num}
              name={dancer.name}
              bg={dancer.bgColor}
              dances={dancer.dances}
              height={dancer.height}
              age={dancer.age}
              score={dancer.score}
              />
          ))}
        </Sidebar>

        <div id="main-content">
          <h4 className="center-align">Dances</h4>
          <div className="row row-dance">
            {this.state.dances.map(dance => (
              <DanceCard
                name={dance.name}
                key={dance.name}
                cast={dance.cast}
              />
            ))}
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;



// bg colors
// in no dances: pass in nothing
// in 1 dance: green lighten-4
// in 2 dances: orange lighten-4
// in 3 dances (max): red lighten-3