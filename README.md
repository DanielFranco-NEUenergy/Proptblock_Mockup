## Prerequisite
* NodeJS installed on system
* [Metamask](https://docs.metamask.io/) - browser extension
* Account in metamask wallet

## Installation
Clone the repository and run the below commands.

`npm install`

`npm run dev` or `npm run start`

The node application will be running on express server on port 3000 or given port.

Open browser and type url **127.0.0.1:3000/**


## Heroku pushing
Create Heroku dapp realstateverse-descentralized-mockup in the Heroku platform.

Install Heroku CLI

Run the following commands

`heroku buildpacks:set heroku/nodejs` ---> To install a Buildpack URL set

`heroku buildpacks` ---> To check the buildpacks installed

Specify the "engines" field in package.json like this:
{
    "name": "metamask-connection",
    "version": "1.0.0",
    "engines": {
        "node": "16.x"
        },
    "description": "Connecting dapp with metamask using ethers.js library",
    .
    .
    .
}

`heroku login --interactive`

`git init`

`heroku git:remote -a realstateverse-descentralized-mockup` ---> https://git.heroku.com/meta-inmobiliaria-mockup.git remote should have been created locally.

Make sure /node_modules line is in the gitignore.

Make sure that dotenv dependencies is not in devDependencies. Continue with:

`git add .`

`git commit -am "First functional version"`

`git push heroku master` ---> wait for "https://realstateverse-descentralized-mockup.herokuapp.com/ deployed to Heroku" message to appear in the terminal

Follow the url or execute:

`heroku open`

In case of an error:

`heroku logs --tail`



----------------------------------------
NOTE:No two remotes can be simultaneously active when working with Heroku.