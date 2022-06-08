# Unit 3 Project Worksheet

## Product Description 
 Our pocket Sommelier will allow a resturant to enter their wine list, along with key characteristics of the wines being added in order to make a wine suggestion easier for the waiter / waitress server a table.

## Wire Frames

https://drive.google.com/file/d/1uaGO3PPkuQgvsXU8cZc3nVn1VRdJsgKE/view

## React Architecture

APP
|
Select User|___ Resturant DB Entries
           |
           |___ Waiter Interface
           
## Backend Schema 

### Wine
---
```json
{
    "Type": String,
    "Variety": String,
    "Producer": String,
    "Vintage": Number,
    "Price": {
        {"Bottle": Number},
        {"Glass": Number}
    },
    "Notes": [String],
    "Pairings": [{
        {"ref": 'Food',
         "type": ObjectId
        }
    }],
}
```
### Food Pairing
---
```json
{
    "Dish": String,
    "Price": Number,
    "Pairings": [{
        {"ref": 'Wine',
         "type": ObjectId
        }
    }]
}
```
## Backend Routes

Backend Routes will preform full CRUD Op Allowing a "admin user" to create update, and delete datum, along with allowing a base user to read the information stored in the database.

## MVP
| Component | Time | Priority |
|----------|----------|----------|
|Home Screen| 3hrs  |   5   |
|Admin UI|  5hrs    |   5   |
|Waiter UI| 8hrs    |   5   |
|Back End | 8hrs    |   5   |


## Project Manager Rotation

1.  Julia
2.  Mike 
3.  Anas
4.  Jacob


## Programming Schedual 

The project will be a team collaberation using mainly mob programming but dividing work loads appropraitly.

|Day| Front End | Goal |Back End | Goal|
|----------|----------|----------|----------|----------|
|Monday| Julia - Anas | Begin Init Dev | Jacob - Mike | Begin Init Dev |
|Tuesday| Julia - Anas | Working UI | Jacob - Mike | Begin Init Dev | Seeded DB
|Wednesday| Jacob - Mike | UI Logic | Julia - Anas | CRUD
|Thursday| Jacob - Mike | Deployment | Julia - Anas | Deployment