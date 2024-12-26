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

### Technology Used
- Typescript
- React
- Material-UI (MUI)
- React-router-dom
- dayjs (open source date library)
- axios

### Implementation Highlights
- Implemented modular and reusable components such as Chart, DateTime Picker, and Radio Button, enabling consistent design and functionality across the application. Designed a Template Wrapper to seamlessly integrate the Header, Footer, and Content, ensuring a unified layout structure and streamlined development for future enhancements.
- Leveraged TypeScript across the entire project to ensure type safety, reduce runtime errors, and improve code maintainability. 
- Integrated React Router DOM to manage routing efficiently, ensuring smooth navigation throughout the application. Implemented a Protected Route Wrapper to safeguard restricted routes by allowing conditional access. While no conditions are currently added, this structure lays the groundwork for future authentication and authorization mechanisms, enhancing the application's security and user experience.