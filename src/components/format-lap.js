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
        const {lastItem} = nextProps;
        const sec = lastItem / 1000;
        const min = sec / 60;
        this.setState({
            hour: Math.floor(min / 60),
            min: Math.floor(min % 60),
            sec: Math.floor(sec % 60),
            ms: Math.floor(lastItem % 100)
        });
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

    render () {
        const {hour, min, sec, ms} = this.state;
        return (
            <div>{this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}</div>
        );
    }
}

export default FormatLap;