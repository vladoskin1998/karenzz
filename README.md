-npm install
-npm start

http://localhost:5000/api-docs/ - описание всех методов через swagger

Метод начисления средств на баланс. Принимает id пользователя и сколько средств зачислить.
Метод списания средств с баланса. Принимает id пользователя и сколько средств списать.
http://localhost:5000/api/transaction/change-balance
{
    "id": "6307774215ae4ca1d6e0ef75",
    "money": 10
}
{
    "_id": "6307774215ae4ca1d6e0ef73",
    "balance": 91,
    "currency": "USD",
    "history": [
        {
            "date": "2022-08-25T18:21:14.619Z",
            "transaction": 10,
            "_id": "6307bdb7bd4f4b13de1bcfc8"
        },
    ]
}


Метод перевода средств от пользователя к пользователю. Принимает id пользователя с которого нужно списать средства, id пользователя которому должны зачислить средства, а также сумму.
{
    "idFrom": "6307774215ae4ca1d6e0ef75",
     "idTo":"6307774215ae4ca1d6e0ef73", 
     "money": 20
}
{
    "balanceFrom": {
        "_id": "6307774215ae4ca1d6e0ef75",
        "balance": 20,
        "currency": "USD",
        "history": [
            {
                "date": "2022-08-25T13:20:45.725Z",
                "transaction": 25,
                "_id": "6307774215ae4ca1d6e0ef76"
            }
        ]
    },
    "balanceTo": {
        "_id": "6307774215ae4ca1d6e0ef73",
        "balance": 92,
        "currency": "USD",
        "history": [
            {
                "date": "2022-08-25T18:21:14.619Z",
                "transaction": 10,
                "_id": "6307bdb7bd4f4b13de1bcfc8"
            }
        ]
    }
}


Метод получения текущего баланса пользователя. Принимает id пользователя.
http://localhost:5000/api/transaction/get-balance/?id=6307774215ae4ca1d6e0ef70
{
    "money": 21
}


Метод получения списка транзакций. Принимает id пользователя.
http://localhost:5000/api/transaction/get-balance/?id=6307774215ae4ca1d6e0ef70
[
    {
        "date": "2022-08-25T13:20:45.725Z",
        "transaction": 25,
        "_id": "6307774215ae4ca1d6e0ef76"
    },
    {
        "date": "2022-08-25T13:20:45.725Z",
        "transaction": 25,
        "_id": "6307776015ae4ca1d6e0ef79"
    },
]