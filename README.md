# PromoPro

PromoPro is a task management and productivity application with speech-to-text features. 

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features

- Task management with timer functionality.
- User authentication and authorization (Login and Signup).
- Speech-to-text conversion for easy input.
- ...

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB server running locally or accessible.

### Installation

### Clone the repository:

    ```bash
    git clone https://github.com/your-username/PromoPro.git

1. Navigate to the project directory:

        ```bash
        cd PromoPro

2.Install dependencies:

    ```bash
    npm install

3. Open an other cmd in the folder db in the project and run the commund:

       ```bash
        nodemon server.js

4. Open your browser and navigate to http://localhost:5000

### Folder Structure
PromoPro/
|-- db
|-- public/
|-- src/
|   |-- components/
    |   |-- assets/ 
|   |   |-- auth/
|   |   |-- navBar/
|   |   |-- speech/
|   |   |-- TaskManager/
|   |   |-- timerManager/
|   |-- js/
|   |   |-- Store/
|   |   |-- ...
|-- .env.example
|-- .gitignore
|-- package.json
|-- README.md
|-- ...
