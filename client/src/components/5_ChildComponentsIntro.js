import React from 'react';

class ChildComponentsIntro extends React.Component {
	constructor(){
		super();
		this.state = {
			joke: "Kenny G"

		}
	}
	changeStateCustomMethod(event){
		this.setState({joke: event.target.value})
	}
	render() {
		return (
			<div>
				<h3>Child Componets</h3>
				<p>Use the input field to see the state change.</p>
					<p>{this.state.joke} is the greatest saxophone player of all time.</p>
					<ChildComponent updateProps={this.changeStateCustomMethod.bind(this)} />
			</div>
		);
	}
}

const ChildComponent = (props) =>
	<input type="text" onChange={props.updateProps}/>

export default ChildComponentsIntro