# MOTORWAY-EXPRESS

motorway-express is an API developed in Node.js that returns a vehicle's information and vehicle's state on the given timestamp.


## Cloning the Repository

In a command prompt, navigate to the desired folder and run the following command:
```
git clone https://github.com/andycham/motorway-express
```
Change to the application root folder (motorway-express):
```
cd motorway-express
```

## Installing Dependencies

Ensure that Node >= 14.0.0, npm >= 5.6 and Docker are installed.
To install the dependencies for the application, run the following command from the etmc folder:
```
npm install
```

## Running the app

To run the app using docker containers, type the following command:
```
docker compose up
```

## The Input

Open a web browser and go to http://localhost:3000/vehicle/3/2022-09-12 10:00:00+00
```
Result should say 
{"id":3,"make":"VW","model":"GOLF","state":"selling"}
```

## Running the tests

To run the tests, ensure that the containers are running then run the following command:
```
npm test
```

Test output should be:

```
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.17.3                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v18.13.0 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          2 found (homeController_test.cy.js, vehiclesController_test.cy.js)             │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  homeController_test.cy.js                                                       (1 of 2)


  Home page
    √ Check status of home page of endpoint (66ms)
    √ Check content of home page of endpoint (41ms)


  2 passing (119ms)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     0 seconds                                                                        │
  │ Spec Ran:     homeController_test.cy.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF
  -  Finished compressing: 0 seconds

  -  Video output: C:\dev\motorway-express\cypress\videos\homeController_test.cy.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  vehiclesController_test.cy.js                                                   (2 of 2)


  Vehicle search
    √ Check status of vehicle search endpoint (63ms)
    √ Check content of vehicle search endpoint selling (53ms)
    √ Check content of vehicle search endpoint selling (49ms)
    √ Check content of vehicle search endpoint sold (49ms)


  4 passing (232ms)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     0 seconds                                                                        │
  │ Spec Ran:     vehiclesController_test.cy.js                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF
  -  Finished compressing: 0 seconds

  -  Video output: C:\dev\motorway-express\cypress\videos\vehiclesController_test.cy.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  homeController_test.cy.js                119ms        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  vehiclesController_test.cy.js            229ms        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        348ms        6        6        -        -        -

```
