See the log of my website development here: <a href="posts\WebsiteCreation.md">build log</a>

# Information for Project Milestone: Folder and File Structure:
**Ethan Portfolio**
* *src*
    * *Components* Stores all of the React components which are used in the project. These components are re-usable Javascript files which can take arguments such as html files, plaintext, markdown files, raw data, and more. A single page can have multiple components. Components listed in the subdirectory are the ones which will be used in the final website, if they are not listed here, they are for testing purposes only.
        * *Navbar.js* At the top of every page, will guide the user back to home or possibly through other sections of the site
        * *Header.js* Contains the about me section, only displayed on the home page. 
        * *HTMLPostParser.js* Will be used as a container for the Project posts. This module will take html as an argument, then simply return it. A way to nest a page within a page essentially. This component will contain the navbar and footer for site navigation. 
        * *MarkdownPostParser.js* Takes markdown (a file type with suffix .md) as an argument (known as a prop in React) and will render it in HTML
        * *ForceDirectedChart.js* the interactive visualization which helps users navigate the site. This module is the main part of the home page. 
 
* *posts* All the articles on my various projects
    * *post_img* All of the media for individual articles
        * *MockupOfSiteNavigation*
        * *WebsiteNavigationSketch*
    * *example.md* A file used for testing the markdown parsing capabilities
    * *WebsiteCreation.md* A file to log the development of the website
    * *Project1.html* ISO New England Summer Internship 
    * *Project2.html* WPI 3d Print Lab Process Improvement
    * *Project3.html* WPI Sweet Website Building
    * *Project4.html* Growbox Business Plan
    * *Project5.html* Growbox Involvement Overview
    * *Project6.html* Worclab Mask and Face Shield 3d Printing
    * *About.html* The header which describes me

* *gitignore* A file which tells github which files should not be uploaded. 
* *Package.json* Lists the dependencies required to run the site
* *App.js* The app component. In react the App component acts as the container for all other components.
* *index.html* Where the app component will be loaded. This contains just one `<div></div>` element which the app component is mounted to. 