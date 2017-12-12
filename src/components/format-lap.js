import React, {Component} from 'react';

class FormatLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0,
            counter: 1
        }
    }
    leadingZero (num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    trailingZero (num) {
        if (num < 10) {
            return `${num}0`;
        } else {
            return num;
        }
    }
    formatTime(time, index){
        let sec = time / 1000;
        let min = sec / 60;
        let hour = Math.floor(min / 60);
        min = Math.floor(min % 60);
        sec = Math.floor(sec % 60);
        let ms = Math.floor(time % 100);
        const times = [hour, min, sec, ms];
        return times;
    }
    render () {
        const laps = this.props.timeArray.map( (time,index) => {
            const timeUnits = this.formatTime(time,index);
            return <li key={index}>{this.leadingZero(timeUnits[0])}:{this.leadingZero(timeUnits[1])}:{this.leadingZero(timeUnits[2])}:{this.trailingZero(timeUnits[3])}</li>;
        });
        return (
            <ol>
                {laps}
            </ol>
        );
    }
}

export default FormatLap;