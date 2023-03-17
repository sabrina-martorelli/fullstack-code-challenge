
## Elucidat Fullstack code challenge

This code challenge will ask you to demonstrate your Laravel and React experience.

## Background
Your task is to create a simple web application that allows users to search for and view information about books using Laravel and React. You will be working with a JSON that contains data about books.

One of your colleagues has kindly done *some* setup for you:
- They have much of the setup containerised in Docker
- Installed Laravel with PHP 8
- Set up a Migration & Seed data, for Book titles, authors and summaries. But they do not run automatically!
- Set up 1 endpoint to get all the books.
- Made an empty React project in the `client` directory

## Requirements

- The application should enable users to search for books based on its Title OR Author.
- It should enable users to sort by published date (A new concept).
- It should allow users to input new books.
- It should have some tests in both the React code and in the Laravel code
    - To save time & effort, it's acceptable to limit the tests to 5 different tests.
    - Think careful about which tests are most important, and which demonstrate your skills best.
- Style the application and make it look professional and user-friendly.

## Guidelines
- The task should take between 1-2 hours.
- You are free to use any third-party libraries or packages that you feel are appropriate for the task.

## Getting started
To get started, clone the repository:
- Run `docker compose up` to get started with the laravel site
- Then `cd client; npm install; npm start` to start the React app
