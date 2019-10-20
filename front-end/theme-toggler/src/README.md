Title: React Theme Toggler

Requirements:  
- Use React context and state to implement a dark theme across the React app.
- Time to complete: 2 hours

Additional Information: 

    To get the starter files: 
    - Fork this repo to your own remote repo
    - Clone the repo from your remote repo using "git clone"
    - cd into the project on your local machine
    - npm install project dependencies
    - Use the starter files to complete the drill
    - The solution can be found on branch 'solution'

    - You don't need to write any CSS or content - that is already included in the starter files. Once complete when you click the "Toggle Theme" button it will toggle between light and dark theme CSS styles. Your job is to use React context to toggle the word "dark" on the className of two elements when the "Toggle Theme" button is clicked:  
        - <nav /> element 
        - <section className="App" /> element 
    - You can start by creating a React context object and a provider class object. Wrap the entire ThemeApp in the Provider so that the entire app has access to the context. 
    - There are multiple ways to implement this, but one way is to use a provider class object to declare 1) a state variable with a boolean value 2) a toggle function that updates state when the toggle button is clicked 3) a render function that renders ThemeContext.Provider with the function and state as the 'value' prop. You will also need to implement an onClick method on the "Toggle Button" in the Nav component to trigger the state change.
    - Look at the solution files to see one possible solution for this exercise.






