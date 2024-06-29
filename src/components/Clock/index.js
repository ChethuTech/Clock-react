import {Component} from 'react'
import './index.css'

class Clock extends Component {
  /*  constructor(props) {
      super(props)
      this.state = {date: new Date()}
      this.a = "hello world"
      
    } old approach of defining state object and variable | constructor method */

  /*  state = {date: new Date()} 
      a = "hello world"
      new approach of defining state object and variable | constructor method */

  state = {date: new Date()}

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
    console.log(this.intervalId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state

    console.log('render() method called')

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time"> {date.toLocaleTimeString()} </p>
      </div>
    )
  }
}
export default Clock
