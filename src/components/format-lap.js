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
    componentWillReceiveProps(nextProps) {
        // const {lastItem} = nextProps;
        // const sec = lastItem / 1000;
        // const min = sec / 60;
        // this.setState({
        //     hour: Math.floor(min / 60),
        //     min: Math.floor(min % 60),
        //     sec: Math.floor(sec % 60),
        //     ms: Math.floor(lastItem % 100),
        //     counter: 1
        // });
        // const lapRows = nextProps.timeArray.map ((item, index) => {
        //    return (
        //     const {hour, min, sec, ms} = this.state;
        //        <div>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</div>
        //    );
        // });
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
        // console.log(`Time Array: ${this.props.timeArray}`);
        let sec = time / 1000;
        let min = sec / 60;
        let hour = Math.floor(min / 60);
        min = Math.floor(min % 60);
        sec = Math.floor(sec % 60);
        let ms = Math.floor(time % 100);
        return <li key={index}>0{hour}:0{min}:0{sec}.{ms}0</li>
        // this.setState({
        //    hour: Math.floor(min/60),
        //    min: Math.floor(min % 60),
        //    sec: Math.floor(sec % 60),
        //    ms: Math.floor(lapValue % 100)
        // });
        // return <div>{this.leadingZero(this.state.hour)}:{this.leadingZero(this.state.min)}:{this.leadingZero(this.state.sec)}.{this.trailingZero(this.state.ms)}</div>
        // return <li key={index}>Time: {time} Index: {index}</li>
    }
    render () {
        // console.log('TIME ARRAY:', this.props.timeArray);
        const laps = this.props.timeArray.map(this.formatTime);
        return (
            <oL>
                {laps}
            </oL>
        );
    }
}

export default FormatLap;