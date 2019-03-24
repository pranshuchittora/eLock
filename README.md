
<h1 align="center"> 
eLock
</h1>
<p align="center"> 
<img src="./buildAssets/icon/icon.png"/>
</p>

 > eLock is an electron based app with certain restrictions which helps to prevent malpratices to a greater extent.
>

<h1 align="center"> 
Features
</h1>

- Disabled Copy , Paste ...
- On change of application , the examination app quits.
- Special keys blocked.

<br/><br/>

# Getting Started

> ## Cloning repository
```bash
git clone https://github.com/pranshuchittora/eLock.git
```
> ## Installing dependencies
```bash
npm install
```
<h4 align="center"> 
OR
</h4>

```bash
yarn install
```
> ## Running the Project

```bash
npm start
```
<h4 align="center"> 
OR
</h4>

```bash
yarn start
```
>## Packaging the app
```bash
npm run build:win  #For windows
```
```bash
npm run build:mac  #For MacOS
```
```bash
npm run build:linux  #For Linux
``````
# Project Struture
    .
    +-- appLogic                 # Main Logic of the app
    |   +-- keys.json
    |   +-- mainMenu.js
    |   +-- restriction.js    
    +-- build                    # Contains builds for dist
    +-- buildAssts               # App assets
    +-- public                   # Webpage
    +-- index.js                 # Entry point
    +-- package.json             # No explanation required
    +-- README.md
