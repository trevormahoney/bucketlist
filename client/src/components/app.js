import React, { Component } from 'react';

import JSXIntro from './1_JSXIntro';
import ComponentsIntro from './2_ComponentsIntro';
import PropsIntro from './3_PropsIntro';
import StateIntro from './4_StateIntro';

	export default class App extends Component {
  		render() {
    			return (
      			<div>
      				<h1>React Intro</h1>
      				<JSXIntro />
      				<ComponentsIntro />
      				<PropsIntro name="Michael Bolton" title="The Neverending Elevator Music" />
      				<StateIntro />
      			</div>
    		);
  		}
	}
