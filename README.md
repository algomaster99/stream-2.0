# stream-2.0
stream is a music streaming application made with django, django rest framework and django channels as backend technologies. The frontend part is made with reac
t. It can stream live music on a PC while you can control it from other devices
on the same network.

# Dependecies
* python3
* pip
* virtualenv
* npm packages

# Build and Run
1. Clone the repository

    `$ git clone https://github.com/algomaster99/stream-2.0.git`
    
    `$ cd stream-2.0`
2. Set-up virtual environment

    `$ sudo apt-get install python3-venv`
    
    `$ python3 -m venv <env_name>`
    
    `$ source <env_name>/bin/activate`
    Virtual environment is set-up and activated.
3. Install requirememnts
    `$ cd ./stream`
    
    `$ pip3 install requirements.text`
    All backend dependencies are installed.
    
    `$ cd ../stream-frontend`
    
    `$ npm install`
    All frontend dependenices are installed.
4. Migrate files

    `$ cd ../stream`
    
    `$ python3 manage.py makemigrations stream-2.0`
    
    `$ python3 manage.py migrate`
5. Start the backend server

    `$ sudo docker run -p 6379:6379 -d redis:2.8`
    
    `$ python3 manage.py runserver`
6. Start the frontend server

    `$ cd ../stream-frontend`
    
    `$ npm start`
7. Open browser
    i) The music will stream on localhost:3000/stream
    ii) But first register on localhost:3000/register
    iii) Create superuser so that your account gets approved
    
        `$ cd ../stream`
        
        `$ python3 manage.py createsuperuser`
    iv) Go to localhost:8000/stream/admin to approve your account.
    v) After approval, go to localhost:3000/login and login.
    vi) Search for your favourite music and start listening.
