# LIBER COMPONENTS (deprecated)
### React Components Bundle & Build System
#### :rabbit2: whiterabbit
***
## HOWTOs
### Preview
* Make sure your component is exported in the bundle index **`src/index.js`**
  * **Example:** `export { Component } from './path-to-component';`

* Include it in our dev index **`src/index.dev.jsx`**
  * **Example:** `import { Component } from './';`

* Use our DevServer by executing **`yarn dev`**
* If any compilation errors occur, Webpack shall warn you in your Terminal and Console
* View your component by accessing **`https://localhost:SERVER_PORT`**
  * SERVER_PORT can be located and configured in `.env.dev`

### Release
* Make sure your component is working and properly tested
  * **`yarn test`**

* Commit using Commitizen by running:
  * **`yarn commit`** 

* The pre-commit routines shall test and build your components before commiting, follow the process on your terminal and when finished
  * **`git push`**

### Profit
* If everything is OK, create your Pull Request and wait for approval and merge into master
  * **`master = liber-components Production`**

* As soon as your Component is set in Production, you can now update the `liber-component` dependency and use it as you wish
  * **`yarn upgrade`**

* Import it on your project... and done!
  * **Example:** `import { Greeter } from 'liber-components';`

test
