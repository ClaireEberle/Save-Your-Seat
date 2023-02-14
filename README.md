# Save-Your-Seat

## Description

The application allows both restaurant-goers and restaurant owners to manage their restaurant reservation. For cutomers, they will be able to book reservation on available operational hours. For restaurant owners, they will be able to set up restaurant operation hours, capacity and menu and manage reservations they recevied.


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

## Review

* The URL of the deployed application
https://make-reservation.herokuapp.com/
* The URL of the GitHub repository, with a unique name and a README describing the project
https://github.com/ClaireEberle/Save-Your-Seat