import React, { Component } from 'react';
import Bar from './Bar'

// Icons


// algorithms
import BubbleSort from '../algorithms/BubbleSort'; 

// Css
import './Sort.css'

class Sorting extends Component {
    state = { 
        array: [],
        steps: [],
        colorKey: [],
        colors: [],
        timeouts: [],
        currStep: 0,
        count: 10,
        delay: 300,
        algorithm: ''
    } 

    componentDidMount(){
        this.generateElements();
    }

    handleStart = () => {
        let steps = this.state.steps;
        let colors = this.state.colors;

        this.clearTimeouts();
        let timeouts = [];

        let i=0;
        while(i < steps.length - this.state.currStep){
            let timeout = setTimeout(() => {
                let currStep = this.state.currStep;
                this.setState({
                    array: steps[currStep],
                    colorKey: colors[currStep],
                    currStep: currStep + 1
                });
                timeouts.push(timeout);
            }, this.state.delay * i);
            i++;
        }

        this.setState({
            timeouts: timeouts
        });
    }

    generateSteps = () => {
        let array = this.state.array.slice();
        let steps = this.state.steps.slice();
        let colors = this.state.colors.slice();

        BubbleSort(array, steps, colors);
        this.setState({
            steps: steps,
            colors: colors
        });
    }

    clearTimeouts = () => {
        this.state.timeouts.forEach(timeout => clearTimeout(timeout));
        this.setState({ timeouts: [] });
    }

    clearColorKey = () => {
        let blank = new Array(this.state.count).fill(0);
        this.setState({colorKey: blank, colors: [blank]});
    }

    generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    generateElements = () => {
        this.clearTimeouts();
        this.clearColorKey();
    
        let cnt = this.state.count;
        let tempArr = [];
        for(let i=0; i<cnt; i++){
            let num = this.generateRandomNumber(50,200);
            tempArr.push(num);
        }

        this.setState({
            array: tempArr,
            steps: [tempArr],
            count: cnt,
            currStep: 0
        }, () => {this.generateSteps()})
    }

    changeArray = (index, value) => {
        let array = this.state.array;
        array[index] = value;
        this.setState({
            array: array,
            steps: [array],
            currStep: 0
        }, () => {this.generateSteps()});
    }

    render() { 

        let bars = this.state.array.map((value, index)=>{
            return(
                <Bar 
                key={index} 
                index={index} 
                length={value} 
                colorKey={this.state.colorKey[index]} 
                changeArray={this.changeArray}
                />
            );
        })

        let playButton;

		if (this.state.steps.length === this.state.currStep) {
			playButton = (
				<button onClick={this.generateElements}>Regenerate Array</button>
			);
		} else {
			playButton = (
				<button className='start' onClick={this.handleStart}>Start</button>
			);
		}

        return (
            <div className='sort'>
                <div className='frame'>
                    <div className='card container'>{bars}</div>
                    <div className="playButtons">{playButton}</div>
                </div>
                {/* <div className="playButtons">{playButton}</div> */}
            </div>
        );
    }
}
 
export default Sorting;