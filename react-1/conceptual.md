### Conceptual Exercise

  

Answer the following questions below:

  

- What is React? When and why would you use it?
	- React is a front-end framework, meaning it should be used to design the front-end of an application
	- Front-end frameworks provide a blueprint for apps that allow the re-use of code and provide templating of HTML. 
	- React makes it easy to make reusable "view components' that encapsulate logic and HTML into a class, making it easier to build modular applications.

- What is Babel?
	- Babel is used when JSX must be "transpiled" to JavaScript
	
- What is JSX?
	- JSX is like HTML embedded in JavaScript
	- JSX isn't legal JavaScript and has stricter rules than HTML

- How is a Component created in React?
	-	One way of creating components is by creating functions that know how to render themselves into HTML
		-	These components are called "functional components"
	-	Components can also be used by creating class that define how to render themselves

 
- What are some difference between state and props?
	- Unlike state, props are arguments that are passed into functional components
	- Unlike state, props are immutable and cannot be altered the functional component they are being passed in 
	- States is data specific to component and can change, hence is the data will ever change, it needs to be in state


- What does "downward data flow" refer to in React?
	- describes the flow of data from parent components to child components. 
	- A parent component defines a function and passes that function as a prop to a child components
		- the child component invokes the prop
		- parent function is called, setting the state in the parent component, and the parent component is re-rendered along with it children 
		  
- What is a controlled component?
	- With controlled components, React controls what is shown and what happens when users trigger events
	- React state essentially is the "single source of truth"


- What is an uncontrolled component?
	- With uncontrolled components, React is not in control of the component state. 


- What is the purpose of the `key` prop when rendering a list of components?
	- Key props are unique identifiers that help react identify which items are changed/added/removed
	- Keys should be given to repeated elements to provide a stable identity


- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	- Keys should be stable and never change. Hence, using an array index is a poor choice because, it does not guarantee that key props for an element will always remain the same. Removing/adding/changing the order or elements in an array will thus change the key prop of components in a list of components. 


- Describe useEffect. What use cases is it used for in React components?
	- useEffect is a built in hook for "side-effect" 
	- useEffect is used when you want certain things to happen at certain times, otherwise these "side-effects" will occur after every rendering and rerendering of components. 
	- Some use cases include: 
		- Fetching data
		- starting a timer 
		- manually changing the DOM


- What does useRef do? Does a change to a ref value cause a rerender of a component?
	- Essentially useRef creates a local variable that persists and is independent of state
	- useRef returns a mutable object with a key of ***current*** whose value is equal to the initial value passed into the hook
	- Mutating the object does not trigger a rerender of the component


- When would you use a ref? When wouldn't you use one?
	- In a few cases where we need to imperatively modify a child outside of the typical data flow, which can be an instance of a React Component or DOM element. 
	- Few good cases : 
		- Managing focus, text selection, or media playback
		- Triggering imperative animations
		- Integrating with third-party DOM libraries
	- Aviod using refs for anything that can be done declaratively using things like props and states


- What is a custom hook in React? When would you want to write one?
	- JavaScript function that typically uses built in hooks 
	- Hooks are made to 
		- abstract logic 
		- handle repeated tasks 
		- generate your own JSX