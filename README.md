# unzipCypress
cypress plugin to decompress zip files using a library: decompress 
<p align="center">
  <a href="https://www.cypress.io"><img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/></a>
</p>
<p align="center">
  <a href="https://on.cypress.io">Documentation</a> |
  <a href="https://on.cypress.io/changelog">Changelog</a> |
  <a href="https://on.cypress.io/roadmap">Roadmap</a>
</p>

<h3 align="center">
  The web has evolved. Finally, testing has too.
</h3>

<p align="center">
  Fast, easy and reliable testing for anything that runs in a browser.
</p>
<p align="center">
  Join us, we're <a href="https://cypress.io/jobs">hiring</a>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/cypress">
    <img src="https://img.shields.io/npm/dm/cypress.svg" alt="npm"/>
  </a>
  <a href="https://gitter.im/cypress-io/cypress">
    <img src="https://img.shields.io/gitter/room/cypress-io/cypress.svg" alt="Gitter chat"/>
  </a>
    <a href="https://stackshare.io/cypress">
    <img src="https://img.stackshare.io/misc/follow-on-stackshare-badge.svg" alt="StackShare"/>
  </a><br />
</p>


# Need to install decompress

```bash
npm install decompress
```
                                                                    
# Usage
---------------------------------
 ### cypress\integration\test.spec.js


```cy.task('unzipping', { path, file })```


# Create unzip fuction
---------------------------------
### cypress\plugins\unzipping.js

```
const decompress = require('decompress');

const unzip = ({ path, file }) => decompress(path + file, path + 'unzip/' + file.replace('.zip', ''))

module.exports = {
    unzip,
}
```

# Use function as Cypress task (plugin)
---------------------------------------
### cypress\plugins\index.js

```
const unzipping = require('./unzipping')

module.exports = (on, config) => {
    on('task', {
        'unzipping': unzipping.unzip,
    })
}
```

### GOOD WORK! 
