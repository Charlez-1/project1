#  End of phase 1 project.

## Project Description
This project you interact with a site where a user can buy, sell and rent a car with prices available and images clear to display the project.

## System Requirements
- Node 18+
- A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
- Operating System (Windows 10+, MacOS, Linux, etc.)
- A text editor capable of running JavaScript (Visual Studio Code, Vim, etc.)
- RAM >= 4GB
- Disk space >= 1GB

## Technologies Used
1 HTML
2 CSS
3JavaScript
4 Fetch API

## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

## Usage
1 Enter the price in the input box provided.
2 Click the "enter" button.
3 The cars will appear when price is searched.


## API
The site fetches data from a local server running on
```console
$ json-server --watch db.json
```
### Creating a db.json
```
{
    "users": [
      {
        "id": 1,
        "name": "Alice Smith",
        "email": "alice@example.com"
        
      },
      {
        "id": 2,
        "name": "Bob Johnson",
        "email": "bob@example.com"
        
      }
    ],
    "posts": [
      {
        "id": 1,
        "userId": 1,
        "content": "Just learnt to drive !",
        "date": "2024-10-17"
      },
      {
        "id": 2,
        "userId": 2,
        "content": "new month new car!",
        "date": "2024-10-16"
      },
      {
        "id": 3,
        "userId": 1,
        "content": "Loving the journey so far!",
        "date": "2024-10-15"
      }
    ],
    "sessions": [
      {
        "sessionId": "abc123",
        "userId": 1,
        "date": "2024-10-18"
      }
    ]
  }

   

## License
This project is licensed under the MIT License(https://github.com/Charlez-1/project1/blob/master/LICENSE).

## Contacts
For any questions or suggestions, please open an issue or contact elvis.kuria@student.moringaschool.com

## Render Link
[link](https://project1-1-0edg.onrender.com)
