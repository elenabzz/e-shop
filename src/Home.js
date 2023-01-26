import { useState } from "react";
import Buttons from "./Buttons";
import { data } from './data';
import Product from "./Product";

function Home() {

    const [products, setProducts] = useState(data);

    const chosenProducts = (searchTerm) => {
        const newProducts = data.filter(element =>
            element.searchTerm === searchTerm);
            setProducts(newProducts);
    }

    return(<div>
        <div className="about">
            <h2>E-Shop</h2>
            <p>The latest tech gadgets at a great price! We have electronic accessories, trendy phone cases, portable devices and more. </p>
        </div>
        <Buttons filteredProducts = {chosenProducts}/>
        <Product anyWord = {products}/>
    </div>
    )
}
export default Home;