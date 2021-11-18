# DM's Familiar - Capstone

## Developer : Matthew Taylor

    This project is a personal passion project for me stemming from seeing my peers, colleagues, and other creatives struggle keeping their ideas organized and stress free. Sadly this has lead to many of them dropping what could have been wonderful worlds and settings for their next book, film, or even DnD Campaigns. This is what my application is for, a helpful means for a creative to put their stories, references, and characters all in one place where they can view them and organize them in a stress-free manner as they work. 

    To accomplish this the technologies I used for the backend were: Firebase’s Firestore Database, OAuth Authentication, and cloud storage, Django, and Django REST Framework. For the frontend the technologies and libraries used were: React.JS, Bootstrap, React-Bootstrap, React-Router, Axios, and Firebase Authentication.

### Notable Features:
    #### Frontend:
    -User Creation with Google sign in capability and OAuth Authentication utilizing Firebase
    -Project Creation with a customisable template utilizing React Components create only what the user selects.
    -Fully dynamic Project list page that will adjust as projects are added or deleted via CRUD operations.
    -Dashboard that populates as you create more content and displays it in a clear and intutive manner.
    -Ability to adjust what is or isn't displayed on the dashboard quick and easily.
    -Able to upload Word DocX and have it translated into the database to be displayed along with any other documents created.
    -Fully interactive customer sheet that you create or edit as needed. 
    
    #### Backend:
    -Full CRUD functionality for all models, including scaffolding for future features in the frontend IE: Video, Audio, etc
    -REST API fully functioning with Firebase's Firestore Database to store and recieve data through HTTP requests from the frontend.

    #### Database:
    -Firestore cloud database for all general storage
    -Google Cloud Storage will be utilized in a future iteration for Images, Video, and Audio
    


