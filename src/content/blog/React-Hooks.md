---
title: "React-Hooks"
description: "React Hooks are functions that allow you to hook into React state and lifecycle features from function components."
pubDate: "Jul 3 2025"
heroImage: ""
---

In **React**, hooks like `useState` and `useEffect` are essential for managing state and side effects in functional components. Let's break down the most common hooks, starting with **`useState`** and **`useEffect`**, and then look at some other useful ones.

---

## 1. **`useState`** — Managing State in Functional Components

**`useState`** allows you to add state to your functional components.

### Syntax:

```js
const [state, setState] = useState(initialState);
```

* `state`: The current state value.
* `setState`: A function to update the state.
* `initialState`: The initial value of the state.

### Example:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);  // State for counter

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

* Here, `count` holds the state, and `setCount` updates the count when the button is clicked.

### Common Use Cases:

* Form inputs (text, checkboxes)
* Toggle states (e.g., showing/hiding UI elements)
* Counters
* Managing UI state such as active items or selection states

---

## 2. **`useEffect`** — Managing Side Effects

**`useEffect`** lets you perform side effects in function components, such as fetching data, subscribing to services, or directly interacting with the DOM.

### Syntax:

```js
useEffect(() => {
  // Side effect logic here
}, [dependencies]);
```

* **Side effect**: Things like fetching data, setting up a subscription, or manually changing the DOM.
* **`dependencies`**: The second argument (array) determines when the effect runs. If it's empty, the effect runs only on mount and unmount (like `componentDidMount`).

### Example:

```jsx
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching data once component mounts
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);  // Empty array means this runs only once after mount

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;
```

### Common Use Cases:

* Fetching data from an API
* Running animations
* Updating the document title
* Setting up event listeners or subscriptions
* Cleanup on component unmount

---

## 3. **`useContext`** — Sharing State Across Components

**`useContext`** allows you to pass data deeply through the component tree without prop drilling.

### Syntax:

```js
const context = useContext(MyContext);
```

### Example:

```jsx
import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme.background, color: theme.color }}>Hello, Theme!</div>;
};

const App = () => {
  const theme = { background: 'black', color: 'white' };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};

export default App;
```

### Common Use Cases:

* Global state management (e.g., theme, authentication state)
* Sharing props across deeply nested components

---

## 4. **`useReducer`** — Managing More Complex State

**`useReducer`** is an alternative to `useState` for managing more complex state logic in React, especially when the state has multiple sub-values or when the state transition logic is complex.

### Syntax:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### Example:

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

### Common Use Cases:

* Complex state transitions
* Redux-like state management without an external library
* Managing arrays or objects with complex updates

---

## 5. **`useMemo`** — Memoizing Expensive Calculations

**`useMemo`** is used to memoize the result of a function so that it is only recomputed when its dependencies change. This is useful for optimizing performance, especially with expensive calculations.

### Syntax:

```js
const memoizedValue = useMemo(() => expensiveFunction(value), [value]);
```

### Example:

```jsx
import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = ({ num }) => {
  const result = useMemo(() => {
    console.log('Calculating...');
    return num * num;  // Expensive calculation
  }, [num]);

  return <div>Result: {result}</div>;
};

const App = () => {
  const [num, setNum] = useState(1);

  return (
    <div>
      <ExpensiveCalculation num={num} />
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  );
};

export default App;
```

### Common Use Cases:

* Optimizing expensive calculations
* Preventing unnecessary re-renders
* Memoizing expensive lists or filtering operations

---

## 6. **`useCallback`** — Memoizing Functions

**`useCallback`** memoizes a function, preventing it from being recreated on every render unless its dependencies change.

### Syntax:

```js
const memoizedCallback = useCallback(() => { /* function */ }, [dependencies]);
```

### Example:

```jsx
import React, { useState, useCallback } from 'react';

const Button = ({ onClick }) => <button onClick={onClick}>Click me</button>;

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button onClick={increment} />
      <p>Count: {count}</p>
    </div>
  );
};

export default App;
```

### Common Use Cases:

* Prevent unnecessary re-renders of components that rely on callbacks
* Prevent functions from being recreated every time

---

## 7. **`useRef`** — Accessing DOM Elements and Storing Mutable Values

**`useRef`** is useful for accessing DOM elements directly or for storing mutable values that don’t cause re-rendering when updated.

### Syntax:

```js
const myRef = useRef(initialValue);
```

### Example:

```jsx
import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();  // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
```

### Common Use Cases:

* Accessing DOM elements (like focusing an input)
* Storing persistent values across renders (without triggering re-renders)
* Keeping track of previous state or values in a functional component

---

### Conclusion: When to Use Each Hook

* **`useState`**: For simple state management in components.
* **`useEffect`**: For side effects like data fetching, subscriptions, or manual DOM manipulation.
* **`useContext`**: For passing data through the component tree without props.
* **`useReducer`**: For more complex state logic.
* **`useMemo`**: To optimize performance by memoizing values.
* **`useCallback`**: To optimize performance by memoizing functions.
* **`useRef`**: For accessing DOM elements or persistent mutable values.

Each of these hooks serves a specific purpose to make functional components more powerful and efficient. You can mix and match them depending on the complexity of your React components!
