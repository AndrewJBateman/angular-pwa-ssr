# :zap: Angular PWA SSR

* Angular app with Server Side Rendering working as a Progressive Web App. Deployed to Netlify.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-pwa-ssr?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-pwa-ssr?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-pwa-ssr?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-pwa-ssr?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular PWA SSR](#zap-angular-pwa-ssr)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:flashlight: Testing](#flashlight-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Using Angular Server Side Rendering (ngUniversal) and Service Workers for a Progressive Web App
* Node v14, npm v7, @angular/cli v12 & @angular/core v12 installed globally

## :camera: Screenshots

![Frontend screenshot](./img/lighthouse.png)

## :signal_strength: Technologies

* [Angular framework v12](https://angular.io/)
* [Angular Universal v12](https://angular.io/guide/universal) Server-Side Rendering(SSR) by a Node Express web server
* [Angular Express Engine v12](https://www.npmjs.com/package/@nguniversal/express-engine) for running Angular Apps on the server for server side rendering
* [Google Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse) to check quality of website

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `npm outdated` to see if any npm dependencies are outdated. Note: @types/node kept at older version to prevent errors
* Run `ng serve` for a non-SSR dev server. Frontend will open at `http://localhost:4200/` - refreshes on code changes
* Run `npm run dev:ssr` for an SSR dev server. Frontend will open at `http://localhost:4200/` - refreshes on code changes
* Run `npm run build` to generate a build file without SSR
* Run `npm run build:ssr` to generate a build file with SSR. Add `defer` to browser css file ref.
* Run `npm run serve:ssr` to see on a dev server `http://localhost:4000`
* Run `npm run prerender` to prerender SSR app

## :wrench: Testing

* Run `ng test` to run Jasmine unit tests via [Karma](https://karma-runner.github.io) - passes 2/2 tests

## :computer: Code Examples

* function to serve browser content using SSR - code from ngUniversal

```typescript
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular-pwa-ssr/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

```

## :cool: Features

* Dummy `Robots.txt` & `sitemap.xml` documents added to get perfect Lighthouse score

## :clipboard: Status, Testing & To-Do List

* Status: Working basic SSR app with PWA deployed to Netlify. 100% perfect Lighthouse score
* Testing: not tested yet
* To-Do: Add content. `Robots.txt` & `sitemap.xml` files will need updating with correct data

## :clap: Inspiration/General Tools

* Google

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
