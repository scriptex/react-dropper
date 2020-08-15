[![GitHub release](https://img.shields.io/github/release/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/commits/master)
[![Build Status](https://travis-ci.com/scriptex/react-dropper.svg?branch=master)](https://travis-ci.com/scriptex/react-dropper)
[![npm](https://img.shields.io/npm/dt/react-dropper.svg)](https://www.npmjs.com/package/react-dropper)
[![npm](https://img.shields.io/npm/v/react-dropper.svg)](https://www.npmjs.com/package/react-dropper)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-dropper/README.md)](https://github.com/scriptex/react-dropper/)

# React Dropper

Pick color from an image in React

## Install

```sh
npm i react-dropper

# or

yarn add react-dropper
```

## About

Info about the component

## Usage

```javascript
import React from 'react';
import Dropper from 'react-dropper';

import MyImage from '../images/image.jpg';

ReactDOM.render(
	<Dropper
		width={400}
		height={400}
		color="#000000"
		image={MyImage}
		className="react-dropper"
		onChange={(color, sync) => {
			// Based on the event type
			// the color can be updated or not
			// If the event type is click the color is updated
			// If the event type is mousemove or click, the color is the updated color
			// If the event type is mouseleave, the color is the old color (coming from props)

			// The sync flag indicates whether the color has been updated
		}}
  	/>,
	document.getElementById('demo')
);
```

## Props

1. Width - width of the canvas area
2. Height - height of the canvas area
3. Color - the initial color of the canvas
4. Image - url of the image asset - JPG or PNG supported and CORS enabled for external resources
5. onChange - function which accepts `color` and `sync` arguments (explained above)

## Demo

Please [click here](https://github.com/scriptex/react-dropper/demo/index.html) to see the demo.

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Freact-dropper&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
