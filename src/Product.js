function Product({anyWord}) {

    return(
        <div className="products">
            {anyWord.map((element => {
                const {name, price, image} = element;

                return(<div className="product-card" key={element.id}>
                    <img src={image} alt="product" width="300px" height="200px"/>
                    <div>
                        <h3>{name}</h3>
                        <h4>Price: $ {price}</h4>
                    </div>
                </div>)
            }))}
        </div>
    )
}

export default Product;