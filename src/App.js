// import logo from './logo.svg';
import './App.css';

function App() {
    const products = [
        { name: 'PhotoShop', price: '$90.50' },
        { name: 'Illustrator', price: '$80.99' },
        { name: 'PremiumPro', price: '$100.99' },
        { name: 'LightRoom', price: '$40.99' }

    ]
    return (
        <div className="App">
            <header>
                {/* <Product name={products[0].name} price={products[0].price}></Product>
                <Product name={products[1].name} price={products[1].price}></Product>
                <Product name={products[2].name} price={products[2].price}></Product>
                <Product name={products[3].name} price={products[3].price}></Product> */}

                {/* dynamic call */}
                <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>
                <Product product={products[3]}></Product>
            </header>
        </div>
    );
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
