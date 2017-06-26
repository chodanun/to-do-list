import React, { Component } from 'react';

export class Todo extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	inputText: '',
	  	listItem: [],
	  };
	}

	handleOnchangeText(e){
		this.setState({
			inputText: e.target.value ,
		})
	}
	submitList(e){
		this.setState({
			listItem: [...this.state.listItem,this.state.inputText],
			inputText: '',
		})
	}
	deleteListItem(index){
		const result = this.state.listItem
		result.splice(index,1)
		this.setState({
			listItem: result,
		})
	}
  render() {
    return (
        <div>
          	<div className="col-lg-6">
          		<div className="title">
          			<h1>To-do-list</h1>
          		</div>
			    <div className="input-group">
			      <input 
			      	type="text" 
			      	className="form-control" 
			      	onChange = {this.handleOnchangeText.bind(this)}
			      	value = {this.state.inputText}
			      	placeholder="Search for..."/>
			      <span className="input-group-btn">
			        <button 
			        	className="btn btn-default" 
			        	onClick = {this.submitList.bind(this)}
			        	type="button">Go!
			        </button>
			      </span>
			    </div>
			    <ul className="list-group">
			    {
			    	this.state.listItem.map( (val, index) =>{
			    		return <div key = {index+val} onClick={this.deleteListItem.bind(this,index)}>
			    					<li className="list-group-item" >{val}</li>
			    				</div>
			    	})
			    }
			    </ul>
			  </div>
        </div>
    );
  }
}
