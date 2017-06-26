import React, { Component } from 'react';

export class ToAdd extends Component {
	handleSubmit(event) {
	   	this.props.addToList()
	    event.preventDefault();
	  }
	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
			<div className="input-group">
		      <input 
		      	type="text" 
		      	className="form-control" 
		      	onChange = {this.props.onChangeText.bind(this)}
		      	value = {this.props.inputText}
		      	placeholder="Search for..."/>
		      <span className="input-group-btn">
		        <button 
		        	style={{background: this.props.buttonColor,}}
		        	className="btn btn-default" 
		        	onClick = {this.props.addToList.bind(this)}
		        	type="button">Go!
		        </button>
		      </span>
		    </div>
		    </form>
		)
	}
}


// render(){
// 		return(
// 			<div className="input-group">
// 		      <input 
// 		      	type="text" 
// 		      	className="form-control" 
// 		      	onChange = {this.handleOnchangeText.bind(this)}
// 		      	value = {this.state.inputText}
// 		      	placeholder="Search for..."/>
// 		      <span className="input-group-btn">
// 		        <button 
// 		        	style={{background: this.props.buttonColor,}}
// 		        	className="btn btn-default" 
// 		        	onClick = {this.submitList.bind(this)}
// 		        	type="button">Go!
// 		        </button>
// 		      </span>
// 		    </div>
// 		)
// 	}