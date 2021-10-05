# GetFit-Guru App

## Description

## The Homepage (Not Logged In)
![](https://i.imgur.com/u4igkhV.png)

## Concept and User Stories

## Features

## What It Includes, Technology Used, Languages, Packages and Frameworks
- Mongoose User schema and model
- Settings for the database
- Passport and passport-jwt for authentication
- JSON Web Token
- Passwords that are hashed with BCrypt
- Cors
- Axios

## Code Snippets

## How To Access This App

## Installation and Setup Instructions

## Models
### Exercise Model
| Column Name | Data Type | Notes |
| --------- | ---------------- | -------------- | 
| _id | Integer | Serial Primary Key, Auto-generated |
| type | String | Required: true |
| muscleGroup | String | Required: true |
| name | String | Required: true |
| img_url | String | Must be provided |
| equipment | String | Must be provided |
| steps: | Array[] |


### Goal Model
| Column Name | Data Type | Notes |
| --------- | ---------------- | -------------- | 
| _id | Integer | Serial Primary Key, Auto-generated |
| durationGoal | Number | Must be provided |
| weightGoal | String | Must be provided |
| repsGoal | Number | Must be provided |
| setsGoal | Number | Must be provided |
| distanceGoal | Number | Must be provided |
| exercise | mongoose.Schema.Types.ObjectId | ref: Exercise |
| user | mongoose.Schema.Types.ObjectId | ref: User |

### Progress Model
| Column Name | Data Type | Notes |
| --------- | ---------------- | -------------- | 
| _id | Integer | Serial Primary Key, Auto-generated |
| exercise | mongoose.Schema.Types.ObjectId | ref: Exercise |
| date | date | new Date()|
| duration | Number | Must be provided |
| weight | Number | Must be provided |
| reps | Number | Must be provided |
| sets | Number | Must be provided |
| distance | Number | Must be provided |

### Routine Model
| Column Name | Data Type | Notes |
| --------- | ---------------- | -------------- | 
| _id | Integer | Serial Primary Key, Auto-generated |
| day | String | Enum: Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday  |
| targetArea | String | Must be provided |
| exercises | mongoose.Schema.Types.ObjectId | ref: Exercise |

### User Model
| Column Name | Data Type | Notes |
| --------- | ---------------- | -------------- | 
| _id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided  |
| email| String | Must be unique / used for login |
| password | String | Stored as a hash |
| timesLoggedIn | Number | used to track the amount of times a user logs in |
| date | date | new Date()|
| routines | mongoose.Schema.Types.ObjectId | ref: Routine |
| progress | mongoose.Schema.Types.ObjectId | ref: Progress |
| goals | mongoose.Schema.Types.ObjectId | ref: Goal |

## Routes
| Routes | Routes Method Used | Notes|
| --------- | ---------------- | -------------- | 
| exercises.js | GET, POST | CurrentUser exercises, passport authenticate |
| goals.js | GET, POST | Get goals/list goals, passport authenticate  |
| progress.js | GET, POST | Get progress/list progress, passport authenticate |
| routines.js | GET, PUT, DELETE | Get routines/list routines/delete routines, passport authenticate |
| users.js | GET, POST | Controls sign up/login/profile/auth of user, passport authenticate|

## Conclusion






