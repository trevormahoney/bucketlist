import React, { Component } from 'react';
import NavBarHeader from './nav';
import Video from './video/video'
import BandList from '../containers/BandList';

	export default class App extends Component {
  		render() {
    			return (
      			<div>
      				<NavBarHeader />
      				<BandList />
      			</div>
    			);
  		}
	}
