import React from 'react';
//import ReactDOM from 'react-dom';

export class App1 extends React.Component
{
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

	incCount = () =>
	{
		this.setState(prevState => {return {count: prevState.count + 1}});
	}

	incReset = () =>
	{
		this.setState({count: 0});
	}

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

export default App1;