
const data = [
    {
        id: 1,
        "productName": "Apple",
        "category": "Fruit",
        "freshness": "Fresh",
        "description": "A juicy fruit with a crisp texture.",
        "price": 0.50,
        "comment": "These are the best apples I've ever tasted!",
        "date": "2022-06-01",
        "new": true
    },
    {
        id: 2,
        "productName": "Orange",
        "category": "Fruit",
        "freshness": "Fresh",
        "description": "A citrus fruit with a sweet taste.",
        "price": 0.75,
        "comment": "The oranges were a little sour this time.",
        "date": "2022-06-02"
    },
    {
        id: 3,
        "productName": "Banana",
        "category": "Fruit",
        "freshness": "Fresh",
        "description": "A sweet fruit with a soft texture.",
        "price": 0.30,
        "comment": "The bananas were perfectly ripe and delicious.",
        "date": "2022-06-03"
    },
    {
        id: 4,
        "productName": "Strawberry",
        "category": "Fruit",
        "freshness": "Fresh",
        "description": "A small, sweet fruit with a red color.",
        "price": 1.00,
        "comment": "The strawberries were a little overripe this time.",
        "date": "2022-06-04"
    },
    {
        id: 5,
        "productName": "Blueberry",
        "category": "Fruit",
        "freshness": "Fresh",
        "description": "A small, round fruit with a blue color.",
        "price": 1.25,
        "comment": "The blueberries were a little tart this time.",
        "date": "2022-06-05"
    },
]
const reducer = (state = data, action) => {
    if (action.type === 'get') {
        return state;
    }
    else if (action.type === 'add') {
        return [...state, action.payload];
    }
    else if (action.type === 'delete') {
        return state.filter((el) => el.id !== action.payload);
    }
    else return state;
}

export default reducer;