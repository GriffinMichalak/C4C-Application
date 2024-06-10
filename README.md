# Code4Community Partners Dashboard

This web app provides an easy-to-use dashboard UI that displays the partners that Code4Community is working with, or has worked with in the past. 

## Features
- Displays a list of partner organizations with their names, logos, descriptions (including how we support them), and if they're active or not
- Allows users to add and store partner data for new partners, a single central place
- Storage of all data long-term by writing to a file
- Allows users to filter partners by status (actively working with, not working with, all) via a dropdown
- Allows users to search for specific partners by name
- Allows users to search/filter partners based on search query
- Add a new partner
- Delete an existing partner
- Edit an existing partner (coming soon)
- Form validation for data type accuracy
- Responsive design for resizing
- Intuitive popup design where clicking off of popup closes it (not just the X)
- If two projects with the same ID are created, one is overwritten
- Login page to only enable Northeastern students to access the website


## Design Decisions
- An explanation of any design decisions that you made

## Reflection
- A short reflection of your work - some questions you may want to (but are not required
to) answer are:
- Did you learn anything from this project? If so, how might you have done this
differently knowing what you know now?
- What would you have done differently if you had more time?
- Did you run into issues during this project? If so, how did solve or work around
them?
- If you implemented any bonus features, what made you choose them?

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
```
git clone https://github.com/GriffinMichalak/C4C-Application.git
```
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website

    a. The backend will be available at `http://localhost:4000`

5. Error handling
- If the app crashes, try running `pkill -f node` and then `npm run dev` again.
- If the data fails to load open a terminal in VSCode (ctrl + '~') and open Ports, and add 4000
