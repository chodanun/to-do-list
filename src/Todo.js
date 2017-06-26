import React, { Component } from 'react';
import {ToAdd} from './ToAdd'
import {Tasks} from './Tasks'
export class Todo extends Component {
	// static propTypes = {
	//   buttonColor: React.PropTypes.string.isRequired,
	// }
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
	submitList(){
		console.log("CLICK")
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
			    <ToAdd 
			    	buttonColor={this.props.buttonColor}
			    	onChangeText={this.handleOnchangeText.bind(this)} 
			    	inputText={this.state.inputText}
			    	addToList={this.submitList.bind(this)}
			    />
			    <Tasks
			    	listItem = {this.state.listItem}
			    	deleteListItem = { (index)=> this.deleteListItem(index)}
			    />
			    
			  </div>
        </div>
    );
  }
}
