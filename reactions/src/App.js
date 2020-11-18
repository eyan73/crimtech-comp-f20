import logo from './logo.svg';
import './App.css';
import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start_time: 0, ran_once: false, counting: false, true_duration: 0, reaction_time: 0, color: 'green'};
    this.process_click = this.process_click.bind(this);
  }
  handle_color = (c) => {this.setState({color: c});}

  start_count() {
    let duration = Math.random() * 5000 + 2000
    this.setState({start_time:performance.now()});
    this.setState({true_duration:duration});
    this.setState({counting:true});    
    this.setState({color:'red'});
    setTimeout(() => this.handle_color("green"), duration);
  }
  end_count() {
  console.log(performance.now() - this.start_time);
  console.log(this.start_time);
  console.log(this.state.true_duration);
    if (performance.now() > this.state.true_duration)
    {
      this.setState({ran_once:true});
      this.setState({counting:false});
      let time = performance.now() - this.state.true_duration
      this.setState({reaction_time: time});
      console.log(time);
    }
  }
  process_click() {
    if (this.state.counting) {
      this.end_count();
    } else this.start_count();
  }
  render() {
    let msg = "Hello World!";
    // TODO: Your code here!
    if (this.state.counting && this.state.color == 'red')
    {
      msg = "Wait for Green.";
    }
    else if (this.state.counting && this.state.color == 'green')
    {
      msg = "Click!";
    }
    else if (this.state.ran_once)
    {
      msg = "Your reaction time is "+ this.state.reaction_time.toString()+" ms";
    }
    else
    {
       msg = "Click me to begin!"
    }
    return (
      <div className = "PanelContainer" onClick = {this.process_click} style={ { background: this.state.color} }>
        <div className = "Panel">{msg}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className =  "Header">How Fast is your Reaction Time?</h1>
        <Panel />
        <p>Click as soon as the red box turns green. Click anywhere in the box to start.</p>
      </header>
    </div>
  );
}

export default App;