<h1 align="center">
E-MENU
<br>
 Menu Booking App Hackathon
</h1>

<p align="center">
The menu booking app aims to revolutionize the dining experience by allowing users to 
scan a QR code at their table, place an order from their mobile device, and have the 
order sent directly to the kitchen's queueing system. This will streamline the order 
process, improve efficiency, and enhance customer satisfaction.
</p>
 <p align="center">
  <a href="https://drive.google.com/file/d/1_2ewsbhrPRzLnq6dJ_LyZFMaW8eDpdZx/view?usp=sharing">Project Wiki</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a> •

</p>
<br>
<br>

## Tech Stack

- Next.js
- Express.js
- Node.js
- MongoDB

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the project from the Github 'tapup-fe' main branch (dev). Copy the clone link.

```bash
  e.g. https://github.com/jmmaglonzo/E-MENU.git
```

2. Open your target folder where you want to clone the project, then right-click and open your Terminal (Command Prompt/Powershell/Gitbash). Enter the following command plus the clone link to execute.

```bash
git clone https://github.com/jmmaglonzo/E-MENU.git
```

3. Change directory to the project folder.

```bash
cd E-menu-fe
```

4. Install the dependencies.

```bash
npm i
```

or

```bash
npm install
```

5. Start the server to test if the website is functional.

```bash
npm run dev
```

6. A localhost link will be provided in the terminal. In case the website does not open automatically in the browser, use the localhost link to open it manually in the browser.

```bash
  e.g. http://localhost:3000/
```

7. To stop the server, type the following shortcut key: ctrl + 'C', then press 'Y' after the specified command is shown in the terminal.

```bash
  e.g. ^C^CTerminate batch job (Y/N)?
```

## Contributing

Please follow these best practices when contributing to the project:

- **Tickets**: Always check the project board or issue tracker for available tickets before starting work on a new feature or bug fix. Assign yourself to the ticket to indicate that you're working on it.

- **Stay Updated** : To ensure your local repository is up to date with the latest changes from the main development branch (`develop`), follow these steps:

- **Branches**: Create a new branch for each ticket you're working on. Branch names should be the title of the ticket you're working on.

1.  Get your ticket number and ticket name from the agile collaboration website (Taiga.com).

```bash
  e.g. 01-FE-Dashboard-Menu
```

2. Go to your terminal (Command Prompt/Powershell/Gitbash). To ensure that you're on the main branch, enter the following command, then press 'Enter' to execute.

```bash
git checkout develop
```

3. To stay updated with the Origin repository.

```bash
git pull origin develop
```

4. Create a new branch: use your ticket number + ticket name as your branch name.

```bash
git checkout -b "01-FE-Dashboard-Menu"
```

5. You may proceed and start coding.

## Commit Guidelines

- **Commits**: Follow these steps to commit and push your changes to the repository:

1. Make Small, Atomic Commits

- Each commit should represent a single logical change. This makes it easier to understand the project history and simplifies code reviews.

2. Write Clear and Descriptive Commit Messages

- Use the imperative mood in the commit message, e.g., "feat: add changes" instead of "add changes" or "Fixes bug".
- Start with a short (50 characters or less) summary of the change.

3. Commit Frequently

- Commit your work regularly to avoid losing progress and to share your changes with others early and often.
- Aim for small, incremental commits that make it easier to track and understand changes.

4. Include All Related Changes

- Ensure that all changes related to a single task or bug fix are included in the same commit.
- Avoid mixing unrelated changes in a single commit.

5. Add a Commit for Every File Change

- Whenever you make changes to a file, add a commit that specifically addresses those changes.
- This practice ensures that the history of each file is clear and easy to follow.

For commit messages refer to this [conventional-commit-types](https://github.com/commitizen/conventional-commit-types/blob/master/index.json)

## Code Reviews

- After opening the PR, notify senior developers via Slack or any other communication channel your team uses. Let them know that your PR is ready for review and provide a link to the ticket and PR.
