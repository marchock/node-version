# node-version

Compare your global node version to project node version and provides a message if the two match or not.



##How to use


###Step 1
Add the required node version to be used in the project to the package.json

```javascript
  "engines": {
    "node": "v5.5.0"
  }
```




###Step 2
Call the node-version.js script inside package.json scripts

```javascript
  "scripts": {
    "nodeVer": "node ./node-version.js"
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
    "nodeVer": "node ./node-version.js"
  },
```

dev command combines nodeVer and webpack:dev using && double ampersand
