# Tasks management app

## Introduction
In this app, manager creates and assign to technician execute them. When someone completes his/her task the manager receive a notification saying: 
`The tech Technician X performed the task First task on date January 30th 2023, 1:19:35 am`

- Requirements: 

    This application has two types of users manager and technician

    - manager: can see all tasks from all technicians, can delete tasks, notified when some technicians performs tasks

    - technician : perform his/her tasks, see your tasks, update your tasks


- Practical
    - Create API endpoint to save a new task
    - Create API endpoint to list tasks
    - Notify manage about each performed task (“The tech X performed the task Y on date Z”)
    - Notification shouldn't block any request
    - Unit tests required

## How does it work

To use this app is super simple, go to project root folder, type command below and docker compose does everything for you:

    $ docker compose up

Basically it will up MySql with the database `managementdb` with some initial data, rabbitMQ, and node js application.

To kill all containers type: 

    $ docker compose down

Postman docs (Do not forget to pass user id in the headers, this identify which type of user is. It happens because this app does not have authentication system so far):

    https://documenter.getpostman.com/view/13507787/2s935hQmkm


To run unit tests go in tasks-api folder and run:

    $ npm run test
    $ npm run coverage

## Technologies:
    - RabbitMQ (message broker)
    - MySQL database
    - Docker 
    - Docker-compose
    - Node js
    - Typescript
