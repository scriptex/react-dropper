[![GitHub release](https://img.shields.io/github/release/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-dropper.svg)](https://github.com/scriptex/react-dropper/commits/master)
[![Build Status](https://travis-ci.org/scriptex/react-dropper.svg?branch=master)](https://travis-ci.org/scriptex/react-dropper)
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

import * as MyImage from '../images/image.jpg';

ReactDOM.render(
	<Dropper
		size={1}
		width={200}
		height={250}
		image={MyImage}
		onSelect={(props) => {
			console.log(props);
		}}
		onMouseMove={(props) => {
			console.log(props);
		}}
		onTouchMove={(props) => {
			console.log(props);
		}}
	/>,
	document.getElementById('demo')
);
```

## Props

1. Size - the size of the picker or how many pixels to get - default 1
2. Width - width of the canvas area
3. Height - height of the canvas area
4. Image - url of the image asset - JPG or PNG supported and CORS enabled for external resources
5. onSelect - function which accepts `props` object as argument
6. onMouseMove - function which accepts `props` object as argument
7. onTouchMove - function which accepts `props` object as argument


## LICENSE

MIT
