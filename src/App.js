import React from 'react';

import './App.css';



class App extends React.Component {

constructor(){
  super();
  this.state={
    clickedLight: null
  }
}

  render(){
    let redExtraClass = '';
    if(this.state.clickedLight === 'red') redExtraClass = 'selected';
    let yellowExtraClass = '';
    if(this.state.clickedLight === 'yellow') yellowExtraClass = 'selected';
    let greenExtraClass = '';
    if(this.state.clickedLight === 'green') greenExtraClass = 'selected';
    return (
      <>
      <div className="container" id="semaforo">
        <div className="row">
          <div className="col">
            <div className="palito"></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="bodysemaforo">
              <div className={"red"+redExtraClass} onClick={() => this.setState({ clickedLight: 'red' })}>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="bodysemaforo">
              <div className={"yellow"+yellowExtraClass} onClick={() => this.setState({ clickedLight: 'yellow' })}>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="bodysemaforo">
              <div className={"green"+greenExtraClass} onClick={() => this.setState({ clickedLight: 'green' })}>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default App;
