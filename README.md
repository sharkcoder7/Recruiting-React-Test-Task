<img src="./pga_logo.png" width="100" height="100" />

## PGA RECRUITING - REACT LEADERBOARD PROJECT

The purpose of this project is to give candidates the opportunity to showcase their skills using React, JavaScript, and overall Application Development.

## Overview

The application that candidates must complete will be a simple, generic score leaderboard, letting its users display, add, remove, and edit players.

Candidates should write clean, declarative, and functional code and abide by good design principles.

## Requirements

* Application must be written in React.

* The application must support the following main features:
  * Have a form so users can add/edit players. The form must include the following three fields: `firstName:String`, `lastName:String`, `score:Integer[0,100]`
  * Display the leaderboard in a tabular format sorted by `score`, and `lastName` in ASCENDING order. Therefore, if two players have the same `score`, the sorting will fall back to `lastName`
  * The names displayed on the leaderboard should be combined into one field when displaying as such: `lastName, firstName`
  * Have the ability to remove players by clicking a `Delete` button in the leaderboard.

### Sample leaderboard design:

| Name          | Score |        |
| ------------- | ----- | ------ |
| Geary, Alice  | 96    | Delete |
| Junge, John   | 96    | Delete |
| Vera, Rob     | 88    | Delete |

## Submitting the project
 * Candidate should create a new repo for this project on their own GitHub account
 * Complete application
 * Deploy application to a production environment
 * Notify PGA contact that repo is ready for review, providing both URLs to the repo and running app

## Bonus

It's encouraged that candidates add additional and reasonable features to the leaderboard to contribute to its function. Similarly, candidates should feel free to include more advanced programming techniques and concepts of their particular interests.
