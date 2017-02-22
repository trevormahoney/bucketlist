import React, { Component } from 'react';
import NavBarHeader from './nav';
import Signin from './auth/signin';
import Video from './video/video';

	export default class App extends Component {
  		render() {
    			return (
      			<div>
      				<NavBarHeader />
              {this.props.children}
      				<Video />
      			</div>
    			);
  		}
	}
