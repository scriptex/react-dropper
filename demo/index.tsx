import * as React from 'react';
import { render } from 'react-dom';

import Dropper from '../src/';

render(
	<Dropper
		size={1}
		width={200}
		height={250}
		image="https://via.placeholder.com/150"
		onSelect={props => {
			console.log(props);
		}}
		onMouseMove={props => {
			console.log(props);
		}}
		onTouchMove={props => {
			console.log(props);
		}}
	/>,
	document.getElementById('demo')
);
