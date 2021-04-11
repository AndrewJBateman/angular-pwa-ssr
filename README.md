# :zap: Angular PWA SSR

* Angular PWA with Server Side Rendering (SSR)

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-pwa-ssr?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/AndrewJBateman/angular-pwa-ssr?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-pwa-ssr?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-pwa-ssr?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/AndrewJBateman/angular-pwa-ssr?style=for-the-badge)

**\* Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Using Angular Server Side Rendering

## :camera: Screenshots

![Frontend screenshot](./img/home.jpg)

## :signal_strength: Technologies

* [Angular framework v11](https://angular.io/)
* [Angular Universal v11](https://angular.io/guide/universal) Server-Side Rendering(SSR) by a Node Express web server
* [Angular Express Engine v11](https://www.npmjs.com/package/@nguniversal/express-engine) for running Angular Apps on the server for server side rendering
* [Google Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse) to check quality of website

## :floppy_disk: Setup - Backend

* Install dependencies using `npm i`

## :floppy_disk: Setup - Frontend

* Install dependencies using `npm i`
* Run `npm outdated` to see if any npm dependencies are outdated.
* Get yourself API keys for the Nasa, Google Maps and News apps
* Run `ng serve` for a non-SSR dev server. Frontend will open at `http://localhost:4200/` - refreshes on code changes
* Run `npm run dev:ssr` for an SSR dev server. Frontend will open at `http://localhost:4200/` - refreshes on code changes
* Run `npm run lint` to lint test entire client-side codebase using TSLint.
* Run `npm run build` to generate a build file without SSR
* Run `npm run build:ssr` to generate a build file with SSR. Add `defer` to browser css file ref.
* Run `npm run serve:ssr` to see on a dev server `http://localhost:4000`

## :wrench: Testing

* Run `ng test` to run Jasmine unit tests via [Karma](https://karma-runner.github.io)
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## :computer: Code Examples

* function to...

```typescript

```

## :cool: Features - Frontend

* tba

## :clipboard: Status, Testing & To-Do List

* Status: Working basic SSR app with PWA. near perfect Lighthouse score
* Testing: not tested yet
* To-Do: add content

## :clap: Inspiration/General Tools

* [Techiediaries: Angular 10/9 SEO: Adding Title and Meta Tags to Your Universal App](https://www.techiediaries.com/angular-seo-title-and-meta-tags/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
