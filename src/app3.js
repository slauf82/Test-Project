import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import Select from 'react-select';
import de from 'date-fns/locale/de';
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('de', de);

/**
 * @description App3 soll eine Auswahl für einen Flugbuch enthalten und dann soll ein Datum eingegeben werden können. Das Datum ist auf korrekte Eingabe zu überprüfen.
 */
export class App3 extends React.Component
{
	/**
	 * @constructor der Konstruktor für App3
	 * @param {*} props die Eigenschaften zu App3
	 */
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

	/**
	 * @description wenn eine Auswahl aus dem Auswahlfeld getroffen wurde, wird die Auswahl jetzt geprüft
	 * @param {*} selectOption die getroffene Auswahl des Auswahlfeldes 
	 */
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
	
	/**
	 * @description Prüfung auf die deutsche Datumsangabe in der Form dd.MM.yyyy
	 * @returns das RegExp-Objekt für diese Prüfung
	 */
	getRegExpValidDate = () =>
	{
		return new RegExp("^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$");
	}
	
	/**
	 * @description Prüfung auf die britisch-englischen Datumsangabe in der Form dd/MM/yyyy oder auch der us-amerikanischen Datumsangabe MM/dd/yyyy
	 * @returns das RegExp-Objekt für diese Prüfung
	 */
	getRegExpValidEnglishDate = () =>
	{
		return new RegExp("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$");
	}

	/**
	 * @description wenn das Startdatum im Eingabefeld geändert wird, dann wird diese Funktion aktiv
	 * @param {*} date das geänderte Startdatum aus dem Eingabefeld
	 */
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

	/**
	 * @description wenn das Zieldatum im Eingabefeld geändert wird, dann wird diese Funktion aktiv
	 * @param {*} date das geänderte Zieldatum im Eingabefeld
	 */
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

	/**
	 * @description wenn im Starteingabefeld das Datum aus dem aufgeklappten Kalender gewählt wird, das Datumsformat wird automatisch erkannt
	 * @param {*} date das Startdatum, welches nach Auswahl eines Datums aus dem aufgeklappten Kalender ergibt
	 */
	datepickerFlightStartChange = (date) =>
	{
        this.setState({valueFlightStart: date});
	}

	/**
	 * @description wenn im Zieleingabefeld das Datum aus dem aufgeklappten Kalender gewählt wird, das Datumsformat wird automatisch erkannt
	 * @param {*} date das Zieldatum, welches nach Auswahl eines Datums aus dem aufgeklappten Kalender ergibt
	 */
	datepickerFlightEndChange = (date) =>
	{
		this.setState({valueFlightEnd: date});
	}

	/**
	 * @description wenn der Flug via Button dann bestätigt wird, gibt es die Bestätigung via Alert-Meldung
	 */
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

	/**
	 * @description Die Renderingfunktion für die App3
	 * @returns die Darstellung in HTML für die App App3
	 */
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

/**
 * @description Exportoption, um die App App3 sichtbar zu machen
 */
export default App3;