# Installation and Setup

The project is based on https://github.com/angular/quickstart

## Prerequisites
      
**Verify that you are running at least node `v4.x.x`
by running `node -v`   in a terminal/console window.
You must see atleast 4.5.x. or latest

`npm -v` in a terminal/console window.
2.15 atleast or latest
 

Install below tools

```bash
npm install typescript   -g

npm install typings    -g

npm install karma-cli
```

 
```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run typings -- install`

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.
 
 
### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`
 
 
The `HTML-Reporter` is also wired in. That produces a prettier output; look for it in `~_test-output/tests.html`.

### Proxy server

Have proxy server? To set typings proxy,

on the application root folder, create a file ".typingsrc", update the proxy detail
```
{
    "proxy" : "http://username:password@10.9.64.4:8002"
}
```

note: replace @ symbol with %40


to set npm proxy:

open command line/terminal:

```
npm config set proxy http://username:password@10.9.64.4:8002

npm config set https-proxy http://username:password@10.9.64.4:8002
```
