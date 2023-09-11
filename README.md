# IP-299-Deepracer
The repository for our Programming Project

## DEEPRACER DASH 
Deepracer is a cloud-based Dashboard application that provides a comprehensive, high-resolution interface for Deepracer training and events. This unified interface offers a combination of high-resolution views and training diagnostics, all designed to exploit the capabilities of the Global Operations Visualization (GOV) Lab's 40-megapixel tiled display wall at RMIT City Campus.

### TECH STACK OVERVIEW

### FRONT-END
- The front-end framework used for deepracer dash application is React and MaterialUI.
- The dashboard currently consists of two working pages, 'Dashboard' and 'Leaderboard' page.
- The Top bar of the application is reflected across all current and future pages and has three main components, which includes, search bar, settings icon and the DeepRacer Logo.
- The side bar of the application is also reflected across all current and future pages. The top of the side bar includes hamburger icon which makes the side bar closeable. This is followed by the DeepRacer Logo and Name under which different pages are listed. (Light Purple background)
##### DASHBOARD
- The Dashboard consists of several boxes which show case the fastest model name, time, rewards earned and "One other stat TBD".
- The row below consists of a small leaderboard displaying the top 5 models, where the first 3 are coloured Gold, Silver and Bronze.
- <strong>The leaderboard displayed on the dashboard still requires integration with backend, as it currently manually filled.</strong>
- The final component is the map on which models are being trained.

##### LEADERBOARD
- The leaderboard page is the complete view, where all models and their statistics can be found.
- Each row in the leaderboard is associated with a button "View Stats" which when clicked, will open a dialog box which will contain graphical view of all statistics related to the model.

### BACK-END

### LOGS

### INTEGRATION & DEPLOYMENT
- The CI pipeline performs the basics e.g. performing lint test
- As there are no test files in the code base, the "test" step automatically passes
- The CI pipeline includes a package stage, which will pack the codebase and then upload the artifact which can then be used for deployment.
=======

The group consists of:
- Rishi
- Jay
- Baris
- Anakin
- Dom
