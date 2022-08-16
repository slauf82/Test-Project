import React from 'react';

/**
 * @description App1 soll zeigen, wie auf Ereignisse mit einem Buttonklick reagiert werden kann
 */
export class App1 extends React.Component
{
	/**
	 * @constructor Konstruktor der Klasse
	 * @param {*} props die Eigenschaften der Klasse
	 */
	constructor(props)
	{
		super(props);
		this.state = {
			count: 0,
			buttonCSSStyle:{width:200, height:30, fontSize:20},
			labelCSSStyle:{marginLeft: 10, marginRight: 100, fontSize:20},
			listCSSStyle:{listStyle:"none", display:"inline", margin:0, padding:0},
		}
	}

	/**
	 * @description inkrementiert den Wert von 'count' um 1
	 */
	incCount = () =>
	{
		this.setState(prevState => {return {count: prevState.count + 1}});
	}

	/**
	 * @description setzt den Wert von 'count' auf 0 zurück
	 */
	incReset = () =>
	{
		this.setState({count: 0});
	}

	/**
	 * @description die Renderingfunktion der Klasse
	 * @returns gibt ein Label mit der aktuellen Zählung, einen Button zum Inkremetieren und einen Button zum Rücksetzen zurück
	 */
	render() {
		const { buttonCSSStyle, labelCSSStyle } = this.state;
		return (
		    <div>
				<label style={labelCSSStyle}>{this.state.count}</label>
				<button style={buttonCSSStyle} onClick={this.incCount.bind(this)}>Count</button>
			    <button style={buttonCSSStyle} onClick={this.incReset.bind(this)}>Reset</button>
			</div>
		);
	}
}

/**
 * eine Exportoption für die Klasse App1, um diese nach Außen sichtbar zu machen
 */
export default App1;