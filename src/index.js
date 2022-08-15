import React from 'react';
import ComboBox from 'react-responsive-combo-box';
import ReactDOM from 'react-dom';
import App1 from '../src/app1.js';
import App2 from '../src/app2.js';
import App3 from '../src/app3.js';
import App4 from '../src/app4.js';
import App5 from '../src/app5.js';

export class Main1 extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			comboboxCSSStyle:{height:30, fontSize:20, listStyle:"none", display:"inline", margin:0, padding:0},
			menudata: ["Select an APP", "App1", "App2", "App3", "App4", "App5"],
			selectedValue: 0,
		}
	}

	render()
	{
		const { comboboxCSSStyle, menudata} = this.state;
		
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

export default Main1;

function onSelect(option)
{
	if(option === this.state.menudata[0])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
	    </view>, document.getElementById('root'));
	}
	if(option === this.state.menudata[1])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App1></App1>
	    </view>, document.getElementById('root'));
	}
	if(option === this.state.menudata[2])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App2></App2>
	    </view>, document.getElementById('root'));
	}
	if(option === this.state.menudata[3])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App3></App3>
	    </view>, document.getElementById('root'));
	}
	if(option === this.state.menudata[4])
	{
		ReactDOM.render(
		<view>
			<Main1></Main1>
			<App4></App4>
	    </view>, document.getElementById('root'));
	}
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

ReactDOM.render(<Main1></Main1>, document.getElementById('root'))