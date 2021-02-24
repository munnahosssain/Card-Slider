// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const people = ['Rohim', 'Korim', 'Johir', 'Khalek', 'Jubair', 'Jakir'];
    const products = [
        { name: 'PhotoShop', price: '$90.50' },
        { name: 'Illustrator', price: '$80.99' },
        { name: 'PremiumPro', price: '$100.99' },
        { name: 'LightRoom', price: '$40.99' }
    ]
    return (
        <div className="App">
            <header>
                <Counter></Counter>
                <Users></Users>
                <ul>
                    {
                        people.map(people => <li>{people}</li>)
                    }
                    {
                        products.map(products => <li>{products.name}</li>)
                    }
                </ul>
                {/* dynamic call */}
                {/* <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>
                <Product product={products[3]}></Product> */}

                {/* Dynamic short version */}
                {
                    products.map(pd => <Product product={pd}> </Product>)
                }
            </header>
        </div>
    );
}
function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>User: {users.length}</h3>
            <ul>
                {
                    users.map(user=><li>{user.name}</li>)
                }
            </ul>
        </div>
    )
}
function Counter() {
    const [count, setCount] = useState(313);
    const increaseHandle = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const decreaseHandle = () => setCount(count - 1)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaseHandle}>Increase</button>
            <button onClick={decreaseHandle}>Decrease</button>
        </div >
    )
}
function Product(props) {
    const productsStyle = {
        backgroundColor: 'gray',
        color: 'red',
        height: '200px',
        width: '200px',
        borderRadius: '10px',
        border: '2px solid lightblue',
        float: 'left',
        margin: '5px',
        padding: '5px'
    }
    return (
        <div style={productsStyle}>
            {/* <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <button>Buy now</button> */}

            {/* return dynamically */}
            <h2>{props.product.name}</h2>
            <h2>{props.product.price}</h2>
            <button>Buy now</button>
        </div>
    )
}
export default App;
