import React from 'react';

/**
 * @description App2 soll eine direkte Umrechnung von °C in °F und vice versa ermöglichen ohne einen Buttonklick o. ä. zu benötigen
 */
export class App2 extends React.Component
{
	/**
	 * @constructor der Konstruktor der Klasse App2
	 * @param {*} props die Eigenschaften derf Klasse App2
	 */
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

	/**
	 * @description diese Funktion wird in dem Moment aufgerufen, indem die Angabe in °C verändert wird
	 * @param {*} event das Event, das bei einer Angabenveränderung aktiv wird
	 */
	gradCelsiusChange = (event) =>
	{
		this.setState({valueGradCelsius: event.target.value});
		this.setState({valueGradFahrenheit: (event.target.value * 9 / 5) + 32});
	}

	/**
	 * @description diese Funktion wird in dem Moment aufgerufen, indem die Angabe in °F verändert wird
	 * @param {*} event das Event, das bei einer Angabenveränderung aktiv wird
	 */
	gradFahrenheitChange = (event) =>
	{
		this.setState({valueGradCelsius: (event.target.value - 32)  * 5 / 9});
		this.setState({valueGradFahrenheit: event.target.value});
	}

	/**
	 * @description die Renderingfunktion, die ein Eingabefeld für °C, ein Label für die Angabe °C, ein Eingabefeld für °F und ein Label für die Angabe °F zurückgibt
	 * @returns die Darstellung in HTML für die App App2
	 */
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

/**
 * @description Exportoption um die App App2 sichtbar zu machen
 */
export default App2;