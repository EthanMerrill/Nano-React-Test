# How I built this website





## Daily Log:

### Day 1


### Day 2 

- got the markdown parser to work
- used the react-markdown module to do this 
- Looked into how to implement styles 
- I found that Material UI is most likely the best choice <a href = "https://material-ui.com/"> Material UI</a>. Although this does seem like another intermediary step between the raw material design components <a href="https://material.io/design/">Material Design Web Components</a>

### Day 3

Todo:
- [X] Add a material component to a page 
- [ ] Add an example force directed diagram to the page. 
- [ ] Start to implement Firebase Firestore in the site
- [ ] Integrate Firebase Hosting


### Day 4 

- Made a simple circle with d3 integrated into JSX 

### Day 5

- Have to break out of function components because the ref attribute does not work in them. Apparently this is because function components do not have instances. some day I'll learn what this means! <a href='https://reactjs.org/docs/refs-and-the-dom.html'>React and Refs</a>
- Experimented with non function components, but hit a tough spot when trying to render the d3 components onto the svg. 
- I got some components onto an svg, but interactivity is a complete mystery. I have a new plan B:
    - what if I just write all the d3 js (not in JSX) in the html page? THis is a problem for tomorrow.

### Day 6

I decided to make the d3 force directed chart work on its own. I created a folder called d3sandbox to do this. THe next step is to make it work in the react module. 