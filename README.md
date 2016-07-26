# npm-compare-node-versions

Compare your global node version to project node version and provides a message if the two match or not.


##How to use
npm install npm-cnv --save


###Step 1
Add the required node version to be used in the project to the package.json

```javascript
  "engines": {
    "node": "v5.5.0"
  }
```



###Step 2
Add node module to the package.json

```javascript
  "scripts": {
    "nodeVer": "./node_modules/.bin/npm-cnv"
  }
```

###Step 3
npm run nodeVer

This should provide an error message or success message, if the step above has not been completed then it will not work (engines).



##Combine scripts

npm run dev

```javascript
  "scripts": {
    "dev": "npm run nodeVer && npm run webpack:dev",
    "webpack:dev": "./node_modules/.bin/webpack --progress --profile --colors
    "nodeVer": "./node_modules/.bin/npm-cnv"
  },
```

dev command combines nodeVer and webpack:dev using && double ampersand
