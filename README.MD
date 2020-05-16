# JWT EXEMPLE
(https://jwt-exemple.herokuapp.com/)[https://jwt-exemple.herokuapp.com/]
## POST /new-user
body
```json

{
	"password":"123456",
	"confirmpassword":"123456",
	"name":"joao",
	"username": "joazinho"
}
```
## POST /auth
body
```json

{
	"password":"123456",
	"username": "joazinho"
}
```
## GET /profile
headers
['x-access-token']
```json


	{
        "_id": "5ec050b7463996267471f9dc",
        "username": "ramondomiingozaa",
        "name": "Ramon Domingos",
        "created_at": "2020-05-16T20:44:39.000Z",
        "__v": 0
    }
```

