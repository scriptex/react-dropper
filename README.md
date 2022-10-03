[![Travis CI](https://travis-ci.com/scriptex/react-dropper.svg?branch=master)](https://travis-ci.com/scriptex/react-dropper)
[![Github Build](https://github.com/scriptex/react-dropper/workflows/Build/badge.svg)](https://github.com/scriptex/react-dropper/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/react-dropper/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/react-dropper&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-react-dropper-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/react-dropper/badge)](https://www.codefactor.io/repository/github/scriptex/react-dropper)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/react-dropper/README.md?pixel)](https://github.com/scriptex/react-dropper/)

# React Dropper

> Pick a color from any image in React

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/react-dropper?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/react-dropper?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/react-dropper?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/react-dropper)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/react-dropper?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/react-dropper?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/react-dropper?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-dropper?style=plastic)

## Install

```sh
npm i react-dropper

# or

yarn add react-dropper
```

## Demo

This component allows you to pick any color from any image rendered in a React application. See [the demo here](https://react-dropper.atanas.info).

## Usage

```javascript
import React from 'react';
import { Dropper } from 'react-dropper';

import MyImage from '../images/image.jpg';

ReactDOM.render(
  <Dropper
    width={400}
    height={400}
    image={MyImage}
    className="react-dropper"
    onChange={(color, event) => {
      // The color is the selected color
      // The event is the event type - click, mousemove, etc
    }}
  />,
  document.getElementById('demo')
);
```

## Props

| Prop        | Type       | Required | Default                                  | Description                                                           |
| ----------- | ---------- | -------- | ---------------------------------------- | --------------------------------------------------------------------- |
| `image`     | `string`   | true     | ''                                       | URL of the image asset (JPG or PNG) -CORS enabled for external assets |
| `width`     | `number`   | false    | 300                                      | Width of the canvas area (in px)                                      |
| `height`    | `number`   | false    | 150                                      | Height of the canvas area (in px)                                     |
| `className` | `string`   | false    | 'react-dropper'                          | CSS classname for the rendered element                                |
| `onChange`  | `function` | false    | (color: string, type: string) => unknown | An optional function which accepts two arguments                      |

The `onChange` function accepts two arguments:

- `color`: the selected color
- `type`: the type of the event - 'click', 'mousemove', etc. Useful when deciding whether you want to store the color or not.

## Demo

Please [click here](https://github.com/scriptex/react-dropper/demo/index.html) to see the demo.

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
