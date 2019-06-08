import React from 'react'
import p1 from './img/p1.jpg'


export const Info = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1556742526-795a8eac090e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80/316x316",
        desc: 'Caffe Latte',
        price: '$4.50'
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80/316x316",
        desc: "'famous' Americano",
        price: '$3.50'
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1525480122447-64809d765ec4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80/316x316",
        desc: 'it is meeee',
        price: '2.50'
    },

    {
        id: 4,
        img: <img width="316" height="316" src={p1} />,
        desc: 'it is me',
        price: '2.50'
    },
    {
        id: 5,
        img: <img src={p1} />,
        desc: 'it is mee',
        price: '2.50'
    },
    {
        id: 6,
        img: <img src={p1} />,
        desc: 'it is meeee',
        price: '2.50'
    },
]