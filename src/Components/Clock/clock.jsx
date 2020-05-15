import React from 'react';
import './clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            time: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(), 
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    getCurrentDate() {
        const DAYS = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
        ];

        const MONTHS = [
            'January', 
            'February', 
            'March', 
            'April', 
            'May', 
            'June', 
            'July', 
            'August', 
            'September', 
            'October', 
            'November', 
            'December'
        ];  

        let time = new Date();

        return `${DAYS[time.getDay()]}, ${MONTHS[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`
    }

    render() {
        return (
          <div className='clock'>
            <div>{this.state.time.split(', ')[1]}</div>
            <div>{this.getCurrentDate()}</div>
          </div>
        );
    }
}

export default Clock;