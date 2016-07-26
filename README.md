# node-version

Compare global node version to project node version and provides a message if the two match or not.



For every project add the node version to package.json, this is the project node version

  "engines": {
    "node": "v5.5.0"
  }

-------------------------------------------------------------


##How to use

Call the node-version.js script inside package.json scripts

  "scripts": {
    "nodeVer": "node ./node-version.js"
  }

npm run nodeVer

This should provide an error message or success message, if the step above has not been completed then it will not work (engines).



##Combine scripts

npm run dev

  "scripts": {
    "dev": "npm run nodeVer && npm run webpack:dev",
    "webpack:dev": "./node_modules/.bin/webpack --progress --profile --colors
    "nodeVer": "node ./node-version.js"
  },

dev command combines nodeVer and webpack:dev using && double ampersand
