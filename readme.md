# TypeScript CRUD API (feat. Express.js)

My end project is a simple API that simulates the CRUD features: create, read, update, or delete on student records

## Instructions for Build and Use

Steps to build and/or run the software:

1. make sure npm is installed (and potentially something from ts)
2. run tsc to make sure that all typescript files have been updated properly- they will show up in build after
3. in one terminal, run node .\build\express_crud_app.js, wait until it's listening on port 3000
4. in a new terminal run node .\build\client_simulation.js

Instructions for using the software:

1. Once you have followed the steps, you will see output in the terminal
2. this output should have the results of running each kind of function using the express API

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* typescript
* express.js
*

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Visual Studio Code](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
* [W3 Schools](https://www.w3schools.com/typescript/typescript_getstarted.php)
* [Typescript Lang](https://www.typescriptlang.org/)
* [Contentful](https://www.contentful.com/blog/what-is-typescript-and-why-should-you-use-it/)
* [Code with Mosh](https://www.youtube.com/watch?v=d56mG7DezGs)
* [5 Minute TypeScript Intro](https://www.youtube.com/watch?v=V78lbWLKMxo)


## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] I'd like to add even more typechecking to ensure that the incoming values from the JSON body are actually correct
* [ ] I want to have some more simulated requests that trigger different kinds of errors to ensure all cases are covered
* [ ] I'd also like to see about having automated tests that will run and get expected output
