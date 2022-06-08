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


## Heroku
Create Heroku dapp meta-inmobiliaria-mockup in the Heroku platform.

Install Heroku CLI

Run the following commands

`heroku login --interactive`

`git init` ----> Only if the github/bitbcket/azure/aws repo has no remote configured from the local, otherwise ignore this step ( https://gist.github.com/smcunning/4bf71f65bc15a7f3e1c0d79a0049f3ea )

`heroku git:remote -a meta-inmobiliaria-mockup` ---> https://git.heroku.com/meta-inmobiliaria-mockup.git should have been created. Make sure /node_modules line is in the gitignore. Check the new heroku remote repo having been added in GitExtensions.

