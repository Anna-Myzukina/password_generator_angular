# Pw Password Generator

![screen](https://github.com/Anna-Myzukina/password_generator_angular/blob/main/4lhaio.gif)

This project was generated with:
* [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

* [Bootstrap](https://getbootstrap.com/) version 4.5.3

* Deploying Angular app with [vercel.com](https://vercel.com/) (*early it was now.sh)

### Try Live version:

- [ ] [Password Generator first live version](https://password-generator-angular-one.vercel.app/)
- [ ] [Password Generator live versio second](https://password-generator-angular.anna-myzukina.vercel.app)
- [ ] [Password Generator live versio third](https://password-generator-angular-git-main.anna-myzukina.vercel.app)

## [3+ Ways to Add Bootstrap 4 to Angular](https://www.techiediaries.com/angular-bootstrap/)

## Step 1 — Installing Angular CLI v10

```
$ `$ npm install -g @angular/cli`
```
```
$ `$ ng new name-of-your-app`
```

!Most importantly, choose CSS as the stylesheet format because we’ll use the CSS version of Bootstrap in our tutorial.

The command will generate the directory structure and necessary files for the project and will install the required dependencies.

Next, navigate inside the root folder of your project:

```
$ `$ cd name-of-your-app`
```

## Development server

```
$ `ng serve` for a dev server. 
```

Navigate to `http://localhost:4200/`. Your app will be served from `http://localhost:4200/`
The app will automatically reload if you change any of the source files.

## Step 2 — Installing Bootstrap 4 in Your Angular 10 Project:

In this step, we’ll proceed to add Bootstrap 4 to our Angular 10 application.

There are various ways that you can use to install Bootstrap in your project:

Installing Bootstrap from npm using the npm install command,
Downloading Bootstrap files and adding them to the src/assets folder of your Angular project,
Using Bootstrap from a CDN.
Let’s proceed with the first method. Go back to your command-line interface and install Bootstrap 4 via npm as follows:

```
$ npm install bootstrap
```

This will also add the bootstrap package to package.json. At the time of writing this tutorial, bootstrap v4.3.1 will be installed.

The Bootstrap 4 assets will be installed in the node_modules/bootstrap folder. You'll need to tell Angular where to look for them.

Next, you also need to install jQuery using the following command:

```
$ npm install jquery
```
## Step 3 (Method 1) — Adding Bootstrap 4 to Angular 10 Using angular.json:

Open the angular.json file of your project and include:

node_modules/bootstrap/dist/css/bootstrap.css in the projects->architect->build->styles array,
node_modules/bootstrap/dist/js/bootstrap.js in the projects->architect->build->scripts array,
node_modules/bootstrap/dist/js/bootstrap.js in the projects->architect->build->scripts array,

As follows:

![screen](https://github.com/Anna-Myzukina/password_generator_angular/blob/main/screen1.PNG)

## Step 3 (Method 2) — Adding Bootstrap 4 to Angular 10 Using index.html

You can also include Bootstrap files from node_modules/bootstrap using the index.html file.

Open the src/index.html file and add the following tags:

A <link> tag for adding the bootstrap.css file in the <head> section,
A <script> tag for adding the jquery.js file before the closing </body> tag,
A <script> tag for adding the bootstrap.js file before the </body> tag.

This is an example:

        <!doctype html><html lang="en">
        <head>  
        <meta charset="utf-8">  
        <title>Angular Bootstrap 4 Examples</title>  <base href="/">  
        <meta name="viewport" content="width=device-width, initial-scale=1">  
        <link rel="icon" type="image/x-icon" href="favicon.ico">  
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
        </head>
        <body>  
        <app-root></app-root>  
        <script src="../node_modules/jquery/dist/jquery.js"></script>  <script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>    
        </body>
        </html>

## Step 3 (Method 3) — Adding Bootstrap 4 to Angular 10 Using styles.css

We can also use the styles.css file to add the CSS file of Bootstrap to our project.

Open the src/styles.css file of your Angular project and import the bootstrap.css file as follows:

        @import "~bootstrap/dist/css/bootstrap.css"
        This replaces the previous method(s), so you don’t need to add the file to the styles array of the angular.json file or to the index.html file.

Note: The JavaScript file(s) can be added using the scripts array or the <script> tag like the previous methods.

## Code scaffolding

```
$ `ng generate component component-name`
```

 to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```
$ `ng build`
```

 to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

```
$ `ng test`
```

to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

```
$ `ng e2e` 
```

to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use 

```
`$ ng help`
```

 or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


                <div>
                <label>Enter length</label>
                <input (input)="onChangeLength($event.target.value)" />
                </div>

                <div>
                <label>Use Letters</label>
                <input (change)="onChangeUseLetters()" type="checkbox" />
                </div>

                <div>
                <label>Use Numbers</label>
                <input (change)="onChangeUseNumbers()" type="checkbox" />
                </div>

                <div>
                <label>Use Symbols</label>
                <input (change)="onChangeUseSymbols()" type="checkbox" />
                </div>

                <div>
                <button [disabled]="!(length && (includeLetters || includeSymbols || includeNumbers))" 
                (click)="onButtonClick()">Generate!</button>
                </div>

                <div>
                <label>Your password</label>
                <input [value]="password" />
                </div>


