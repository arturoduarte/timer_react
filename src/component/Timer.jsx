import React, {Component} from 'react';

class Timer extends Component{
  state = {
    date: new Date()
  };

  update(){
    setInterval(()=> {
      this.setState({date: new Date()})
    }, 1000)
  }


  render(){
    return(
      <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2 className="normal">Horario Actual</h2>          
          <h2 className="big">{this.state.date.toLocaleTimeString()}</h2>
          {this.update()}     
        </div>
      </section>
    </section>

    );
  }
}

export default Timer;