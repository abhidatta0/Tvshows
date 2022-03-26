You should reimplement the BIT Shows application with the identical UI and the following additional requirements: 

API Docs: 
API TV Maze - https://www.tvmaze.com/api
Shows: https://api.tvmaze.com/shows

## Stack:
React with TypeScript (required)
Axios - http client (required)
Material UI (required)
Using hooks, functional components and context (required)
Monorepo setup with separation of concerns - (example: ui, services, utils) (required)
Requirements
As a first time visitor I should be able to see email input to login only with an email. Login is local only. If I leave a page and come back I would need to login again.
Each app instance is allowed to have only users from a specific domain. If I'm a first user of the app, attempting to login with an email will create an account for me and `lock` the domain for the following users. Every following user must have the email with the same domain as the locked one to be able to create a new account, or to be able to login if already used the app.
Attempting to login with the email outside of the organization will present an appropriate error.
As a logged in user
List shows
List show details on show card click
Search shows by name from the displayed shows
Theme switch / Dark & light mode
TV show sorting by name and/or by rating (required with context)
Save favorite shows and show them on a separate page as favorites. Saved shows should be scoped by user
Option to logout
Option to remove account

## Notes
Make sure your code is versioned and published on GitHub/GitLab and you should send us a link. In README.md of the project, you should list how to run the project, link to the published project if any, and description of your solution where you explain your decisions, assumptions, or limitations of the application if any. Ideally you should also integrate some simple CI/CD.

## Notes
If you’re uncertain about any details of the project, feel free to make your own decisions but also be prepared to explain decisions you made along the way. We will pay particular attention to project setup and structure, code quality, commit history, and functionality of the application.
