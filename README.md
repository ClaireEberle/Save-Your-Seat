# Save-Your-Seat

## Description

The application allows both restaurant-goers and restaurant owners to manage their restaurant reservation. For cutomers, they will be able to book reservation on available operational hours. For restaurant owners, they will be able to set up restaurant operation hours, capacity and menu and manage reservations they recevied.

# Table of contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Contributing](#contributing)
- [Installation](#installation)
- [Usage](#usage)
- [License](#usage)
- [screenshots](#screenshots)
- [Review](#review)

## User Story

```md
AS a restaurant customer,
I WANT to make reservation on the restaurant I selected at the available hour
SO THAT I can enjoy the meal without waiting for a seat.

As a restaurant owner,
I WANT to manage several restaurants in one application 
SO THAT management efficiency is improved.
```

## Acceptance Criteria

```md
GIVEN I am using make the 
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/Work%20Day%20Scheduler.gif)
![Make reservation (2)](https://user-images.githubusercontent.com/67940686/218874939-4e21badc-02b1-45e3-b7d0-a8d0fe463af3.gif)

## Contributing
Team 9 Project 2 <br>
Yanqing Lou   | Project Manager <br>
Claire Eberle | Views <br>
Heiu Nguyen   | Controllers <br>
Sidney Basa   | Models <br>
UW Coding Bootcamp (c) 2023

## Installation
This program requires node package manager to be installed <br>
Step 1: Copy the SSH key if applicable <br>
Step 2: Clone this repository to a folder in your local machine <br> 
Step 3: Open Git Bash, Windows Powershell or other CLI terminal <br>
Step 4: Change to the directory to the folder where you cloned this repository <br>
Step 5: The fastest way to interact with this program is to type code . for vs code <br>
Step 6: In Visual Studio Code, click to the server.js in the save-your-seat folder <br>
Step 7: Right click on index.js and in the drop down menu, open this in a terminal window <br>
Step 8: In the terminal window, install the node package mamanger by typing npm install <br>
Step 9: Now run the program, in the termnial type node server.js <br>

## Usage
This program is accessible from the web browser <br>
Step 1: Open a web browser <br>
Step 2: In the address bar type localhost:3000 <br>
Step 3: The page Make a Reservation should load <br>
Step 4: If this is your first time visiting the page, sign up as a new cutomer <br>
Step 5: Then follow the prompts to create a reservation <br>
Step 6: If this is your first time visiting the page as an owner, sign up as an owner <br>
Step 7: Then follow the prompts to create a restaurant, add hours open and tables available <br>

## License
MIT License <br>

## screenshots
Homepage<br>
![Home page of the website save your seat](https://user-images.githubusercontent.com/67940686/219255770-32b5112a-0b6d-42f1-9d10-f75a7b848448.jpg)

Customer sign in<br>
![Customer sign in page](https://user-images.githubusercontent.com/67940686/219256356-4bb46798-307b-43f1-a150-ac91d7fc3736.jpg)

Customer sign up<br>
![Customer sign up page](https://user-images.githubusercontent.com/67940686/219256442-4c949b79-d331-40c3-bc7d-7b183791d6f1.jpg)

Owner sign up<br>
![Owner's sign up page](https://user-images.githubusercontent.com/67940686/219256476-76cdb21a-62b9-48a3-bcb5-adcdf52d4da8.jpg)

Reservation page to choose a restaurant and date<br>
![A form to make a reservation](https://user-images.githubusercontent.com/67940686/219256520-c966cfb2-c74d-4a2f-a114-0be7ff74fdf1.jpg)
 
Time feature to choose an available time<br>
![Time page to choose vailable time](https://user-images.githubusercontent.com/67940686/219256591-310d011d-8b6d-43dc-9d78-1294264e888a.jpg)

## Review
* The URL of the deployed application <br>
https://make-reservation.herokuapp.com/
* The URL of the GitHub repository, with a unique name and a README describing the project <br>
https://github.com/ClaireEberle/Save-Your-Seat
