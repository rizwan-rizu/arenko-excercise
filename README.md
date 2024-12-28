# Arenko FE exercise

This exercise scaffold uses [Vite](https://vite.dev/) for build and [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and [User event](https://testing-library.com/docs/user-event/intro/) for tests. The scaffold includes a [Github Actions](https://docs.github.com/en/actions/about-github-actions/understanding-github-actions) workflow to run build, lint and test jobs.

## Candidate instructions

### 1. Initialise git repository

- Create a **private** repo for the project in Github. Do not create a public repo for the exercise or share any of the exercise. Doing so will disqualify you from the selection process. Use [this link](https://github.com/new?visibility=private&template_owner=arenko-group&template_name=fe-exercise&name=arenko-fe-exercise-2024) to generate your repo with the starter files.
- Clone the repo to your local machine.

### 2. Local development

Run the `npm i` and then commit and push your initial commit. The exercise includes CI workflow - check in your Github project that the workflow runs successfully.

You can then start the exercise, good luck! 🍀

#### Commands

- `npm i` install the dependencies
- `npm start` run the development server
- `npm test` run tests (will be in watch mode in development)
- `npm run lint` run eslint

### 3. Submitting the exercise

- Ensure you have met the criteria
- Check that the Actions workflows are passing
- Add the reviewer's email / Github name as [collaborators](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) on your repo.
- Contact the recruiter to let them know you have completed the exercise.

## Candidate README

### Deployment: 
The application is deployed on Vercel and is accessible at https://arenko-excercise.vercel.app for live test.

### Technology Used
- Typescript
- React
- Material-UI (MUI)
- React-router-dom
- dayjs (open source date library)
- axios

### Implementation Highlights
#### Modular & Reusable Components

To ensure a consistent design and functionality across the application, I focused on creating modular and reusable components such as Chart, DateTime Picker, and Radio Button etc. These components reduce redundancy and facilitate scalability. Additionally, I developed a Template Wrapper that seamlessly integrates the Header, Footer, and Content, ensuring a unified layout structure. This modularity streamlines development and simplifies future enhancements.

#### TypeScript for Type Safety

I leveraged TypeScript throughout the project to enforce strong typing. This approach significantly reduces runtime errors, enhances developer productivity, and improves code maintainability. Using TypeScript allowed me to detect potential issues early during development and provided better tooling support.

#### Routing with React Router DOM

Efficient navigation was implemented using React Router DOM, providing a smooth user experience throughout the application. A Protected Route Wrapper was added to conditionally restrict access to certain routes. While no conditions are currently active, this foundational setup is designed to support future authentication and authorization requirements, enhancing security and user experience.

#### Dark & Light Mode with React Context API

I implemented a ThemeProvider using the React Context API to manage global theming. This allowed seamless toggling between dark and light modes while persisting user preferences via localStorage. A custom useThemeContext hook was introduced for easy access to the theme state and toggling functionality, ensuring a user-friendly implementation.

#### Error Boundary

To enhance application stability, I implemented a React Error Boundary. This gracefully catches JavaScript errors in the component tree, displays a fallback UI, and prevents the entire UI from crashing, thereby ensuring a resilient user experience.

#### Unit Testing

I focused on testing individual components and functions to ensure expected behavior and early detection of bugs. This approach helps maintain code quality and reliability, particularly for critical application features.

#### State Management with useReducer

For complex state management, I opted for the useReducer hook. This approach offers better control and organization compared to multiple useState calls. By implementing a reducer and action creators, I ensured clear and predictable state updates, resulting in a cleaner and more maintainable state logic.

#### GitHub Actions

I utilized GitHub Actions to automate workflows, ensuring all workflows pass successfully. This helped maintain code quality and prevent deployment issues by running automated checks during the development process.

#### Custom API Service

A centralized and reusable API service was developed using Axios. It includes request and response interceptors for dynamic header management (e.g., Authorization tokens) and error handling (e.g., automatic token refresh on 401/403 responses). This structure streamlines HTTP requests and ensures consistency across the application.


### Accessibility Features
The CarbonIntensity component is designed with accessibility in mind, ensuring a user-friendly experience for people with diverse abilities. Here are some of the key accessibility features integrated into the component:
#### Semantic HTML Elements
The <Container> is defined with the role="main" attribute, signaling it as the primary content area for screen readers. Additionally, headings and labels are structured using <Typography> for better clarity and usability with assistive technologies.
#### Accessible Labels
ARIA attributes, such as aria-label and aria-labelledby, are used to provide meaningful descriptions for elements like the chart, loading spinner, and radio buttons. For instance, the loading spinner includes the aria-label="Loading chart data" attribute, making its purpose clear to screen reader users.
#### Error Announcements
The Alert component includes role="alert", ensuring error messages are immediately announced by screen readers. This helps users quickly understand and resolve any issues.
#### Keyboard Navigation
All interactive elements, such as the Radio Button group and DateTimeField, are fully accessible via keyboard navigation. Focusable elements follow a logical order, making the interface intuitive and easy to use without a mouse.
#### Fallbacks for Missing Data
When required inputs are missing, the application provides clear messages like "Select dates to see chart." These messages guide users on what actions to take next, reducing confusion and improving usability.

### Thoughts and Reflections
#### Why These Choices?

Each library and tool was chosen for its proven ability to solve specific challenges:

- TypeScript provided type safety, making the codebase more robust.
- Material-UI accelerated UI development with pre-designed components.
- React Router DOM and Axios are industry standards for routing and HTTP communication, ensuring reliability and maintainability.
- React Context API offered an elegant solution for global theming without introducing additional dependencies (Redux).
- dayjs provided simplified date and time manipulation with an intuitive API.

### What Would I Do With More Time?

#### Given additional time, I would:

- Enhance unit testing coverage by incorporating integration and end-to-end tests using tools like Cypress or Playwright.
- Incorporate additional accessibility features to ensure a more inclusive user experience.
- Extend the Error Boundary implementation with logging services like Sentry for better monitoring and debugging.
- Enhance the application's responsiveness to better support all screen sizes. While I have utilized flex-wrap to allow elements to adjust dynamically, I could further refine the layout by incorporating Material-UI's (MUI) media query utilities. This would enable me to define breakpoints and create more tailored layouts, ensuring an even better user experience on devices of all sizes, from mobile to desktop.

### Screenshots

![Screenshot 1](./src/assets/images/Screenshot%202024-12-28%20at%202.40.18 PM.png)
![Screenshot 2](./src/assets/images/Screenshot%202024-12-28%20at%202.41.12 PM.png)
![Screenshot 3](./src/assets/images/Screenshot%202024-12-28%20at%202.41.31 PM.png)