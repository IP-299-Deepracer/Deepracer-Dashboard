# IP-299-Deepracer

Welcome to our Programming Project repository for Deepracer Dash, a cloud-based dashboard application for Deepracer training and events.

## DEEPRACER DASH

Deepracer Dash provides a comprehensive, high-resolution interface designed to leverage the capabilities of the Global Operations Visualization (GOV) Lab's 40-megapixel tiled display wall at RMIT City Campus. It combines high-resolution views and training diagnostics in a unified interface.

### TECH STACK OVERVIEW

#### FRONT-END

- The front-end of Deepracer Dash is built using the React framework and MaterialUI, providing a sleek and modern user interface.
- The application features two main pages: 'Dashboard' and 'Leaderboard'.
- The Top bar, consistent across all pages, includes a search bar, settings icon, and the DeepRacer Logo.
- The side bar, also consistent across all pages, features a hamburger icon for collapsibility, the DeepRacer Logo, and a list of different pages.

##### DASHBOARD

- The Dashboard displays key metrics including the fastest model name, time, rewards earned, and another stat to be determined.
- A mini leaderboard displays the top 5 models, with the top 3 highlighted in Gold, Silver, and Bronze.
- Note: The leaderboard displayed on the dashboard is currently manually filled and requires backend integration.
- The final component is a map displaying the training of models.

##### LEADERBOARD

- The Leaderboard page provides a complete view of all models and their statistics.
- Each row in the leaderboard is associated with a "View Stats" button. Clicking this button opens a dialog box containing a graphical view of all statistics related to the model.

#### AUTHENTICATION

- The application uses Firebase for user authentication.
- It includes a login and registration system with form validation and error handling.
- The registration form checks for password strength, ensuring it has at least 8 characters, contains a number or symbol, and uses at least one uppercase letter.
- The login form provides a generic error message for invalid email or password to prevent user enumeration.
- The application state is updated based on the authentication state, and the user is redirected to the dashboard upon successful login or registration.

#### BACK-END

- [Details about the back-end setup and technologies]

#### LOGS

- [Details about logging]

#### INTEGRATION & DEPLOYMENT

- [Details about how the application is integrated and deployed]

### TEAM

Our project team consists of:

- Rishi
- Jay
- Baris
- Anakin
- Dom
