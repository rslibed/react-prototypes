import React, {Component} from 'react';
import Time from './format-time';
import FormatLap from './format-lap';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0,
            lastItem: 0,
            lapTimes: [],
            currentLap: null,
            timeArray: [],
            lastTimeStamp: 0
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.lap = this.lap.bind(this);
    }
    start () {
        const {start, elapsed} = this.state;
        let newStart = new Date().getTime();
        if (start !== null) {
            newStart = newStart - elapsed;
        }
        this.setState({
            status: 'running',
            start: newStart
        });
        setTimeout(this.update, 10);
    }
    stop() {
        this.setState({
            status: 'stopped',
            start: new Date().getTime()
        });
    }
    update() {
        const {start, status} = this.state;
        if (status === 'running') {
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }
    }
    reset() {
        this.setState({
            status: 'stopped',
            start: 0,
            elapsed: 0,
            lastItem: 0,
            lapTimes: [],
            numberOfLaps: 1,
            timeArray: []
        });
    }
    lap() {
        const {start, status, timeArray, lastItem, lastTimeStamp} = this.state;
        const currentTime = new Date().getTime();
        if (status !== 'running') {
            return;
        }
        if (timeArray.length >= 1 && timeArray !== []) {
            this.setState({
                lapTimes: timeArray.push(currentTime - lastTimeStamp),
                lastTimeStamp: currentTime
            });
        } else {
            this.setState({
                lastItem: currentTime - start,
                lapTimes: timeArray.push(currentTime - start),
                lastTimeStamp: currentTime
            });
        }
    }
    render() {
        const {elapsed, timeArray} = this.state;
        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                <hr className="my-3"/>
                <p className="text-center">
                    <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                    <button className="btn btn-outline-danger mx-3" onClick={this.stop}>Stop</button>
                    <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                    <button className="btn btn-outline-primary mx-3" onClick={this.lap}>Lap</button>
                </p>
                <h4>Lap Times: </h4>
                <div className="lap-container">
                    <FormatLap timeArray={timeArray}/>
                </div>
            </div>
        )
    }
}

export default Stopwatch;