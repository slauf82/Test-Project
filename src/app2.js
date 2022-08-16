import React from 'react';
//import ReactDOM from 'react-dom';

export class App2 extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			inputCSSStyle:{width:200, height:30, fontSize:20},
			labelCSSStyle:{marginLeft: 10, marginRight: 100, fontSize:20},
			valueGradCelsius: 0,
			valueGradFahrenheit: 32,
		}
	}

	gradCelsiusChange = (event) =>
	{
		this.setState({valueGradCelsius: event.target.value});
		this.setState({valueGradFahrenheit: (event.target.value * 9 / 5) + 32});
	}

	gradFahrenheitChange = (event) =>
	{
		this.setState({valueGradCelsius: (event.target.value - 32)  * 5 / 9});
		this.setState({valueGradFahrenheit: event.target.value});
	}

	render() {
		const { inputCSSStyle, labelCSSStyle, valueGradCelsius, valueGradFahrenheit } = this.state;
		return (
		    <div>
				<input style={inputCSSStyle} onChange={this.gradCelsiusChange.bind(this)} value={valueGradCelsius}></input>  
				<label style={labelCSSStyle}>° C</label>
			    <input style={inputCSSStyle} onChange={this.gradFahrenheitChange.bind(this)} value={valueGradFahrenheit}></input>  
				<label style={labelCSSStyle}>° F</label>
		    </div>
		);
	}
}

export default App2;