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
- I tried to break up as many UI pieces as possible into their own componenets for readability, usability, and code organization.
- I decided to add a highlight around each of the partner tiles so that it gave a comfortable feel for the user when you hover over it.
- I also made the logo jump up when you hover over a company logo, just like the C4C official website does. 
- I made my data accessible from a file so that it was easy to access it and the data would remain the same even after the program stopped running.
- I added as many comments as possible into my code to make it clear where parts of the program start and finished.

## Reflection
- While working on this project, I learned a lot about creating UIs in React and accessing data from a stored location using the Express JS framework. Now knowing this, I would have drawn out on paper what features I should include and how to incorporate them into coponents easier. This would have made it easier for me to break every feature into a component instead of lumping some features together. 
- If I had more time, I would have spent more time working on the Edit Partner section of the application. I got very close to finishing it successfully, but wasn't able to fully crack it. 
- One issue I ran into while working on this project was finding how to pass the data in a PartnerTile to a popup with that corresponding project information. I had to do some research online and on stack overflow (lol) in order to learn from mroe experienced developers so that I could learn how to make my application functional. 
- The bonus features that I implemented included a search bar for partners, the ability to filter by project activity, and many others described in the Features section above. I chose to add them because they would add more detail and value to the application, allowing for more ease of use and access. For example, adding authentication (sort of) via a Northeastern email is the first step to begin to ensure that only NU students are accessing the data correctly. Furthermore, adding the ability to click off of a popup makes the design of my application more intuitive.

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
5. TO LOGIN (if prompted):
- Username: abc@northeastern.edu ("abc" can be anything)
- Password: anything lol (not very secure but it's a proof of concept)

6. Error handling
- If the app crashes, try running `pkill -f node` and then `npm run dev` again.
- If the data fails to load open a terminal in VSCode (ctrl + '~') and open Ports, and add 4000
- If it says "no results for '' " then reload the page, and the updated data should load. This is an error I wasn't able to figure out in time.
