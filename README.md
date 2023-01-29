- Requirements: 
    - Types of users:
        - manager
        - technician

    - manager:
        - see all tasks from all technicians
        - can delete tasks 
        - notified when some technicians performs tasks

    - technician :
        - do his/her tasks
        - see your tasks
        - update your tasks

    - tasks:
        - has summary (max:2500char)
        - date it was performed
        - summary contain personal information


- Practical
    - Create API endpoint to save a new task
    - Create API endpoint to list tasks
    - Notify manage about each performed task (“The tech X performed the task Y on date Z”)
    - Notification shouldn't block any request
    - Unit tests required


- Technologies:
    - RabbitMQ (message broker)
    - MySQL database
    - Docker 
    - Docker-compose
    - Nginx
    - Node js
    - React js
    - Typescript


Steps: 
    1 - Create MySQl container with volume - docker-compose
    2 - Create node api with nginx in front of it
    2 - Create node api with: typescript, eslint and unit tests
    3 - Crete api endpoints to perform tasks
    4 - Container RabbitMQ
    5 - Write RabbitMQ code in node.js
    6 - Notify manager when technician perform task (Add message in queue)
    7 - Create ReactApp with: Typescript, eslint and react-testing-library
    8 - Dockerize react app
    9 - Start components development
    10 - Call endpoints according userType and check notifications