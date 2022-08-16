import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from 'react-countup';
import Slider from 'react-input-slider';

/**
 * @description Hier soll über einen Slider ein neues Maximum eingestellt werden können, was dann bei einem neuen Durchlauf berücksichtigt wird. 
 * Dabei soll gezeigt werden, dass Durchlauf und Maximumeinstellung unabhängig voneinander sind.
 */
export class App4 extends React.Component
{
	/**
	 * Der Konstruktoor zur App App4
	 * @param {*} props die Eigenschaften zur App App4
	 */
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

	/**
	 * @description sofern sich der Slider geändert hat, wird diese Funktion aktiv
	 * @param {*} slider ein Sliderobjekt mit den neuen Slider-Werten
	 */
	sliderChange = (slider) =>
	{
		this.setState({x: slider.x});
		if(slider.x > this.state.end)
	    {
			this.setState({end: slider.x});
			this.setState({now: 0});
		}
	}
	
	/**
	 * @description Resetfunktion des Sliders auf Standardwerte, der bei Buttonklick auf Reset aktiv wird beim nächsten Durchlauf
	 * es gibt auch eine direkte Resetoption als Eigenschaft des Sliders, wird diese genutzt, wird der Slider ohne Durchlauf direkt zurückgesetzt
	 */
	reset = () =>
	{
		this.setState({now: 1000});
		this.setState({x: 100});
		this.setState({end: 100});
		this.setState({reset: true});
	}

	/**
	 * @description Funktion, die den automatischen Durchlauf steuert
	 * @param {*} value der aktuelle Wert im Durchlauf
	 */
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

	/**
	 * @description Renderingfunktion, die die Darstellung der App App4 steuer
	 * @returns gibt die Darstellung in HTML für die App App4 zurück
	 */
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

/**
 * @description Exportoption, um die App App4 sichtbar zu machen
 */
export default App4;