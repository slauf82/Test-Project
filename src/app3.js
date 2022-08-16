import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import Select from 'react-select';
import de from 'date-fns/locale/de';
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('de', de);

export class App3 extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			buttonCSSStyle:{width:200, height:30, fontSize:20},
			selectCSSStyle:{width:200, height:30, fontSize:20, borderColor:"black"},
			datepickerCSSStyle:{backgroundColor:"white", color:"black", width:200, height:30, fontSize:20},
			datepickerFlightStartEnabled: true,
			datepickerFlightEndEnabled: true,
			datepickerInputFlightStart: new Date(),
			datepickerInputFlightEnd: new Date(),
			selectedValue: "", 
			selectOptions:[
				{value: "", label: ""},
				{value: "one-way-flight", label: "one way flight"},
				{value: "return-flight", label: "return flight"},
				{value: "two-way-flight", label: "two way flight"},
			],
			valueFlightStart: new Date(),
			valueFlightEnd: new Date(), 
		}
	}

	onSelect = (selectOption) =>
	{
		if(selectOption.value === "")
		{
			this.setState({datepickerFlightStartEnabled: true});
			this.setState({datepickerFlightEndEnabled: true});
		}
		if(selectOption.value === "one-way-flight")
		{
			this.setState({datepickerFlightStartEnabled: false});
			this.setState({datepickerFlightEndEnabled: true});
		}
		if(selectOption.value === "return-flight")
		{
			this.setState({datepickerFlightStartEnabled: true});
			this.setState({datepickerFlightEndEnabled: false});
		}
		if(selectOption.value === "two-way-flight")
		{
			this.setState({datepickerFlightStartEnabled: false});
			this.setState({datepickerFlightEndEnabled: false});
		}
		this.setState({selectedValue: selectOption});
	}

	getRegExpValidDate = () =>
	{
		return new RegExp("^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$");
	}
	
	getRegExpValidEnglishDate = () =>
	{
		return new RegExp("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$");
	}

	datepickerInputFlightStartChange = (date) =>
	{
		alert(this.getRegExpValidDate().test(format(date, 'dd.MM.yyyy')));
		if(this.getRegExpValidDate().test(format(date, 'dd.MM.yyyy')))
		{
			this.setState({datepickerCSSStyle:{...this.state.datepickerCSSStyle, backgroundColor:"green", color:"white"}});
		}
		else
		{
			if(this.getRegExpValidEnglishDate().test(format(date, 'dd/MM/yyyy')) || this.getRegExpValidEnglishDate().test(format(date, 'MM/dd/yyyy')))
			{
				this.setState({datepickerCSSStyle:{...this.state.datepickerCSSStyle, backgroundColor:"yellow", color:"black"}});
			}
		else
			{
				this.setState({datepickerCSSStyle:{...this.state.datepickerCSSStyle, backgroundColor:"red", color:"white"}});
			}
		}
		this.setState({valueFlightStart: date});
		alert(this.state.datepickerCSSStyle.backgroundColor);
		alert(this.state.datepickerCSSStyle.color);
	}

	datepickerInputFlightEndChange = (date) =>
	{
		if(this.getRegExpValidDate().test(format(date, 'dd.MM.yyyy')))
		{
			this.setState({datepickerCSSStyle:{...this.state.datepickerCSSStyle, backgroundColor:"green", color:"white"}});
		}
		else
		{
			if(this.getRegExpValidEnglishDate().test(format(date, 'dd/MM/yyyy')) || this.getRegExpValidEnglishDate().test(format(date, 'MM/dd/yyyy')))
			{
				this.setState({datepickerCSSStyle:{...this.state.datepickerCSSStyle, backgroundColor:"yellow", color:"black"}});
			}
			else
			{
				this.setState({datepickerCSSStyle:{...this.state.datepickerCSSStyle, backgroundColor:"red", color:"white"}});
			}
		}
		this.setState({valueFlightEnd: date});
	}

	datepickerFlightStartChange = (date) =>
	{
        this.setState({valueFlightStart: date});
	}

	datepickerFlightEndChange = (date) =>
	{
		this.setState({valueFlightEnd: date});
	}

	bookFlight = () =>
	{
		if(this.state.selectedValue.value === "one-way-flight")
		{
			alert("A one-way-flight at "+this.getFormattedDate(this.state.valueFlightStart)+" is booked for you.");
		}
		if(this.state.selectedValue.value === "return-flight")
		{
			alert("A return-flight at "+this.getFormattedDate(this.state.valueFlightEnd)+" is booked for you.");
		}
		if(this.state.selectedValue.value === "two-way-flight")
		{
			alert("A one-way-flight at "+this.getFormattedDate(this.state.valueFlightStart)+" and a return-flight at "+this.getFormattedDate(this.state.valueFlightEnd)+" is booked for you.");
		}
	}

	getFormattedDate = (date) =>
	{
		return date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
	}

	render() {
		let {
			selectCSSStyle,
			selectedValue,
			selectOptions,
			datepickerCSSStyle,
			valueFlightStart,
			valueFlightEnd,
			buttonCSSStyle,			
		} = this.state;
		const datepickerInputFlightStartChange = this.datepickerInputFlightStartChange.bind(this);
		const datepickerInputFlightEndChange = this.datepickerInputFlightEndChange.bind(this);
		const datepickerFlightStartChange = this.datepickerFlightStartChange.bind(this);
		const datepickerFlightEndChange = this.datepickerFlightEndChange.bind(this);
		
		/*
		const Control = ({ children, ...props }) => (
  			<components.Control {...props}>
    			{children}
  			</components.Control>
		);

		const GoodSelect = props => <Select {...props} components={{ Control }} />
		<DatePicker disabled={this.state.datepickerFlightStartEnabled} locale="de" style={datepickerCSSStyle} dateFormat="dd.MM.yyyy" onChange={this.datepickerInputFlightStartChange.bind(this)} onSelect={this.datepickerFlightStartChange.bind(this)} selected={valueFlightStart}></DatePicker>  
		<br/>
		<DatePicker disabled={this.state.datepickerFlightEndEnabled} locale="de" style={datepickerCSSStyle} dateFormat="dd.MM.yyyy" onChange={this.datepickerInputFlightEndChange.bind(this)} onSelect={this.datepickerFlightEndChange.bind(this)} selected={valueFlightEnd}></DatePicker>  
		
		<input type="date" placeholder={valueFlightStart} onChange={this.datepickerInputFlightStartChange.bind(this)}></input>
		<br/>
		<input type="date" placeholder={valueFlightEnd} onChange={this.datepickerInputFlightEndChange.bind(this)}></input>
				
		*/

		return (
		    <div>
				<Select style={selectCSSStyle} placeholder="Please select an option" onChange={this.onSelect.bind(this)} value={selectedValue} options={selectOptions}></Select>
				<br/>
				<DatePicker disabled={this.state.datepickerFlightStartEnabled} locale="de" style={datepickerCSSStyle} dateFormat="dd.MM.yyyy" onChange={(date) => datepickerInputFlightStartChange(date)} onSelect={(date) => datepickerFlightStartChange(date)} selected={valueFlightStart}></DatePicker>  
				<br/>
				<DatePicker disabled={this.state.datepickerFlightEndEnabled} locale="de" style={datepickerCSSStyle} dateFormat="dd.MM.yyyy" onChange={(date) => datepickerInputFlightEndChange(date)} onSelect={(date) => datepickerFlightEndChange(date)} selected={valueFlightEnd}></DatePicker>  
				<br/>
				<button style={buttonCSSStyle} onClick={this.bookFlight.bind(this)}>Book</button>
			</div>
		);
	}
}

export default App3;