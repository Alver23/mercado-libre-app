<h1 align="center">Welcome to Mercado libre app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://coveralls.io/github/Alver23/mercado-libre-app?branch=main" target="_blank">
    <img alt="Coveralls" src="https://coveralls.io/repos/github/Alver23/mercado-libre-app/badge.svg?branch=main" />
  </a>
  <a href="https://github.com/Alver23/mercado-libre-app#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Alver23/mercado-libre-app/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Alver23/mercado-libre-app/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Alver23/mobiera-app" />
  </a>
  <a href="https://twitter.com/23Alver" target="_blank">
    <img alt="Twitter: 23Alver" src="https://img.shields.io/twitter/follow/23Alver.svg?style=social" />
  </a>
</p>

> application used to search for any type of products and have the possibility to buy

Before you begin, ensure you have met the following requirements:
* Install [git](https://git-scm.com/downloads)
* Install [nodejs](https://nodejs.org/es/download/)
* Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

If use docker, and docker-compose
* Install [docker](https://docs.docker.com/get-docker/)
* Install [docker compose](https://docs.docker.com/compose/install/)

### ✨ [Demo](http://ec2-34-239-156-72.compute-1.amazonaws.com/)

## Install
To install mercado libre app, follow these steps:
* Clone the source locally:
  ```bash
  $ git clone https://github.com/Alver23/mercado-libre-app.git <project-name>
  $ cd <project-name>
  ``` 
* Installing dependencies:
  ```bash
  $ npm i
  ```

## Usage

### Using with docker
To use mercado libre app, follow these steps:

* Run the following command:
  ```bash
  $ cd <project-name>
  $ ./docker-run.sh
  ```

### Using with machine local

* Enter the project folder:
  ```bash
  $ cd <project-name>
  ```

* Add the .env file:
  ```bash
  $ touch config/environments/.env
  ```
  **Note:** add the values for properties "NEWRELIC_LICENSE_KEY", "NEWRELIC_LOG_LEVEL" if you want to run the new relic monitoring
  
* Add environment variables:

  Mode: **development**
  ```bash
  $ npm run env:dev
  $ npm run dev
  ```

  Mode: **production**
  ```bash
  $ npm run env:prod
  $ npm run build
  $ npm run start
  ```

**Note:** After of run the previous command, open your browser with the following URL `http://localhost:3000` to see the demo

## Running the tests ⚙️

[//]: # (Explain how to run automated tests for this system)

### Running unit tests 🔩

The unit test in the app is configuring only to test the logic, not e2e, to generate a test file, only is necessary to add this in `<project-name>/src/client/__tests__/` for pages, and `<project-name>/src/**/__tests__/` for other withe the format `<name>.spec.{ts, tsx}`.

```bash
$ npm test
```
**Note:** If you want exclude or modify test configuration, apply this change in `jest.config.ts`

### Running linter 🖋

The project work with **ESlint** configuration using **Prettier** as rules template.

```bash
$ npm run lint && npm run stylelint
```

### Running Sonarqube

This tool allow run analysis of the project code and check if developer apply best practices and haven't any vulnerabilities in this using **Typescript**.

Before running this process it is necessary to configure the following environment variables in config/environment/.env file:

```
SONARQUBE_HOST_URL=<Sonarqube URL>
SONARQUBE_TOKEN=<Sonarqube Token>
```

Run analysis

```bash
$ npm run sonarqube
```

## Built with 🛠️

[//]: # (Mention the development libraries and frameworks you used to create your project)

* [Framework: Next.js](https://nextjs.org/)
* [Testing React: Enzyme](https://enzymejs.github.io/enzyme/)
* [Testing: Jest](https://jestjs.io/)
* [Formatter: Prettier](https://prettier.io/docs/en/index.html)
* [Linter: ESLint](https://eslint.org/)
* [Linter: Stylelint](https://stylelint.io/)
* [Tailwindcss](https://tailwindcss.com/)
* [Css with superpwers: Sass](https://sass-lang.com/)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* [Standard version](https://github.com/conventional-changelog/standard-version)
* [Git hooks: husky](https://github.com/typicode/husky)

## Author

👤 **Alver Grisales**

* Website: https://github.com/Alver23
* Twitter: [@23Alver](https://twitter.com/23Alver)
* Github: [@Alver23](https://github.com/Alver23)
* LinkedIn: [@alvergrisales](https://linkedin.com/in/alvergrisales)

## 🤝 Contributing

To contribute to Mobile app, follow these steps:
1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Alver Grisales <viga.23@hotmail.com>](https://github.com/Alver23).<br />
This project is [MIT](https://github.com/Alver23/mercado-libre-app/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
