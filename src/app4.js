import React from 'react';
//import ReactDOM from 'react-dom';
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from 'react-countup';
import Slider from 'react-input-slider';

export class App4 extends React.Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			now: 0,
			start: 0,
			end: 100,
			x: 100,
			xmin: 0,
			xmax: 1000,
			countUp: 0,
			reset: false,
			duration: 10,
			buttonCSSStyle:{width:200, height:30, fontSize:20},
			labelCSSStyle:{marginLeft: 10, marginRight: 100, fontSize:20},
			sliderCSSStyle:{marginLeft: 10, marginRight: 100, fontSize:20},
		}
	}		

	sliderChange = (slider) =>
	{
		this.setState({x: slider.x});
		if(slider.x > this.state.end)
	    {
			this.setState({end: slider.x});
			this.setState({now: 0});
		}
	}

	reset = () =>
	{
		this.setState({now: 1000});
		this.setState({x: 100});
		this.setState({end: 100});
		this.setState({reset: true});
	}

	formattingFn = (value) =>
	{
		if(value > this.state.start)
		{
			this.setState({now: this.state.end});
			this.setState({countUp: value});
		}
		if(value == 0)
		{
			return this.state.countUp;
		}
		else
		{
			return value;
		}
	}

	render() {
		const { buttonCSSStyle, labelCSSStyle, sliderCSSStyle, now, start, end, reset, duration, x, xmin, xmax, countUp} = this.state;
		
		return (
		    <div>
				<ProgressBar 
					animateOnRender="true" 
					transitionDuration={duration} 
					customLabel={countUp} 
					completed={countUp} 
					maxCompleted={end} 
					bgColor="red">
				</ProgressBar>
				<br /><br />
				<CountUp 
					style={labelCSSStyle} 
					formattingFn={this.formattingFn.bind(this)}
					preserveValue="true" 
					start={start} 
					now={now} 
					end={end} 
					reset={reset} 
					duration={duration} 
					delay="0">
				</CountUp>
				{"/ "+end}
				<br /><br />
				<Slider 
					style={sliderCSSStyle} 
					inverted={false}
					x={x} 
					xmin={xmin} 
					xmax={xmax} 
					axis="x"
					onChange={this.sliderChange.bind(this)}>
			    </Slider>	
				<br /><br />
				<button 
					style={buttonCSSStyle} 
					onClick={this.reset.bind(this)}>
						Reset
				</button>
			</div>
		);
	}
}

export default App4;