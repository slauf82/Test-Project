import React from 'react';
import ComboBox from 'react-responsive-combo-box';
import ReactDOM from 'react-dom';
import App1 from '../src/app1.js';
import App2 from '../src/app2.js';
import App3 from '../src/app3.js';
import App4 from '../src/app4.js';
import App5 from '../src/app5.js';

/**
 * @author Sebastian Lauf
 * @description Hauptklasse, soll Appauswahl ermöglichen und nur eine node_modules Bibliothek haben, anstatt dess jede App das benötigt
 */
export class Main1 extends React.Component
{
	/**
	 * @constructor Konstruktor zur Initialisierung
	 * @param {*} props Properties
	 */
	constructor(props)
	{
		super(props);
		this.state = {
			comboboxCSSStyle:{height:30, fontSize:20, listStyle:"none", display:"inline", margin:0, padding:0},
			menudata: ["Select an APP", "App1", "App2", "App3", "App4", "App5"],
			selectedValue: 0,
		}
	}

	/**
	 * @description Renderfunktion der Hauptklasse
	 */
	render()
	{
		const { comboboxCSSStyle, menudata} = this.state;
		
		/**
		 * @returns HTML-Code für Mainklasse
		 */
		return (
			<view>
				<ComboBox 
					style={comboboxCSSStyle} 
					placeholder="Select an APP" 
					options={menudata} 
					value={this.state.selectedValue}
					renderOptions={(option) => (
						<div className="comboBoxOption">{option}</div>
					)}
					onSelect={onSelect.bind(this)}>
				</ComboBox>
			</view>
		)
	}
}

/**
 * @returns 
 */
export default Main1;

/**
 * @param option Die Appauswahl
 * @description Funktion zur Auswahl und zum Rendern der getroffenen Appauswahl 
 */ 
function onSelect(option)
{
	if(option === this.state.menudata[0])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
	    </view>, document.getElementById('root'));
	}
	/**
	 * @description wenn Option die erste App ist, ganz egal wie der Name dazu ist
	 */
	if(option === this.state.menudata[1])
	{	
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App1></App1>
	    </view>, document.getElementById('root'));
	}
	/**
	 * @description wenn Option die zweite App ist, ganz egal wie der Name dazu ist
	 */
	if(option === this.state.menudata[2])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App2></App2>
	    </view>, document.getElementById('root'));
	}
	/**
	 * @description wenn Option die dritte App ist, ganz egal wie der Name dazu ist
	 */
	if(option === this.state.menudata[3])
	{	
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App3></App3>
	    </view>, document.getElementById('root'));
	}
	/**
	 * @description wenn Option die vierte App ist, ganz egal wie der Name dazu ist
	 */
	if(option === this.state.menudata[4])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App4></App4>
	    </view>, document.getElementById('root'));
	}
	/**
	 * @description wenn Option die fünfte App ist, ganz egal wie der Name dazu ist
	 */
	if(option === this.state.menudata[5])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App5></App5>
	    </view>, document.getElementById('root'));
	}
	this.setState({selectedValue: option});
}

/**
 * Rendern der Hauptklasse
 */
ReactDOM.render(<Main1></Main1>, document.getElementById('root'))