import React, { Component } from 'react';

export class Tasks extends Component {
	render(){
		return (
			<ul className="list-group">
		    {
		    	this.props.listItem.map( (val, index) =>{
		    		return <div key = {index+val} onClick={this.props.deleteListItem.bind(this,index)}>
		    					<li className="list-group-item" >{val}</li>
		    				</div>
		    	})
		    }
		    </ul>
		)
	}
}
