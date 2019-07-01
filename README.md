<p>
<h2 align="center">UNC Coding Bootcamp Project #3</h2>
</p>
<!-- PROJECT SHIELDS -->

[![Build Status][build-shield]]()
[![Contributors][contributors-shield]]()
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/TylerCEdge/project-3">
    <img src="https://github.com/TylerCEdge/project-3/blob/master/frontend/src/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">The aMeizing Rejects</h3>

  <p align="center">
    Project 3 for UNC Coding Bootcamp 
    <br />
    <a href="https://github.com/TylerCEdge/project-3"><strong>Explore the Documentation »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

[![G A M E O N][product-screenshot]](DevReadme/FrontEnd/UI/07.01.19ui.png)

<!--!!!!!!add deployed link here!!!!!!-->

For our team project #3 we created a website that allows the user to view and search video game information, sort by recent titles that are popular as well as see upcoming titles that will be released within a given parameter.

Here's why:

<!--Put some bullet points about why we built this app, I.E. the problems we're trying to address with this app.  -->

- No wide spread resource for finding new games based on user-reported input
- Other websites push sponsered content to front page
- Popular resources often have a cluttered UI which can confuse users
- Lack of personalized content delivery for gamers
- People over-look small developer based titles from lack of exposure

### Built With

<!-- This section should list any major frameworks that you built your project using. -->

- [Bootstrap](https://getbootstrap.com)
- [JQuery](https://jquery.com)
- [React](https://React.com)
- [Node](https://node.com)
- [Express](https://laravel.com)
- [MongoDB](https://www.mongodb.com/)

  <!-- GETTING STARTED -->

## Getting Started

Follow these basic steps to run this app on your local machine.

### Prerequisites

Here is a list of packages and libraries necessary to run this app on a local machine.

- npm

```sh
npm install npm@latest -g
```
_must npm install inside root directory as well as frontend directory_

- MongoDB

```sh
npm install mongodb
```

### Installation

1. Get a free API Key at [https://api.igdb.com](https://api.igdb.com/signup)
2. Clone the repo

```sh
git clone https:://github.com/your_username_/Project-Name.git
```

3. Install NPM packages

```sh
npm install
```

4. Start Local Servers

  _from main directory_ 

```sh
- npm run client

```
  _from sub-directories_
```sh
- Backend: node server.js
- Frontend: yarn start
```

5. Enter your API in `config.js`

```JS
const API_KEY = 'ENTER YOUR API';
```

<!-- USAGE EXAMPLES -->

## Usage

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<p>
<h3>PLACEHOLDER</h3>
</p>

_For more examples, please refer to the [Documentation](https://github.com/TylerCEdge/project-3/blob/master/README.md)_

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Team UnAmeiezed' - [Who's Ameizing](https://i.imgur.com/a6hu0Bx.mp4) - unameized@gmail.com

Project Link: [https://github.com/TylerCEdge/project-3](https://github.com/TylerCEdge/project-3)

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-5-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[product-screenshot]: https://github.com/TylerCEdge/project-3/blob/master/DevReadme/FrontEnd/UI/productScreenShot.png
