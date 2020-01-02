import React from 'react';

import './App.css';



const App = (props) => {
  /*
    const cardWidth = {
      width: "18rem"
    }
    */
  return (

    <div class="container" id="semaforo">
      <div class="row">
        <div class="col">
          <div className="palito"></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div className="bodysemaforo">
            <div className="red">
            </div>

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div className="bodysemaforo">
            <div className="yellow">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div className="bodysemaforo">
            <div className="green">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
