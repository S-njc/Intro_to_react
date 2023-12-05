# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- useState
 - returns an array with 2 elemets 

```js
import { useState } from "react";

const [value, setValue] = useState(0);
```

## Hooks
- Use, Hooks are identified by thier format and key word 'use'
- Hooks are function that let you hook into thew lifecycle of a function component
- Only call hooks at the top level 
- Dont call them insde loops, conditions or nest functions
- Only call hooks from React functions, not regular function

```js
const Hello {
    console.log(h)
}
```
## useEffect
3 cases 
1. empty dependecy array 
```js
useEffect(() => {
 //...
},[])// will run once
```

2. Passing a dependency array 
```js
useEffect(() => {
 //...
},[value, specialValue])// run again if value or specialValue are different
```

3. no dependency array
```js
useEffect(() => {
 //...
})// will re-run after every single render and re render
```