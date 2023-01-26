import { useState } from "react";
import { data } from "./data";
import './App.css';

const src = "https://cdn.glitch.com/326c244a-cd98-462f-9388-ff69e9c0d798%2FVideo.mp4?v=1615789949761";
const description = "The latest tech gadgets at a great price! We have electronic accessories, trendy phone cases, portable devices and more. Buying gadgets in our store, you can be absolutely sure that you will receive a completely new, original product, which is covered by a warranty. The Company founded in Russia in 2020, is specialised in online reselling of innovative electronics. The company is represented worldwide by a network of branch offices in the EU, the US and Asia.";

function About() {
    const [showMore, setShowMore] = useState(false);
    const [product, setProduct] = useState(0);
    const {id, name, price, image} = data[product];

    const previousPerson = () => {
        setProduct((product => {
            product --;
            if (product < 0) {
                return data.length -1;
            }
            return product;
        }))
    }
    const nextPerson = () => {
        setProduct((product => {
            product ++;
            if (product > data.length -1) {
                product = 0;
            }
            return product;
        }))
    }

    return(
        <div>
            <video src={src} type="video/mp4" autoPlay loop muted controls width="100%" />
            <div className="about">
                <h2>E-Shop</h2>
                <p>{showMore ? description : description.substring(0, 170) + " ..."}
                <button className="showbtn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
            </div>

            <div className="form">
                <div>
                    <h2>Products</h2>
                </div>
                <div>
                    <img src={image} alt="pic" width="400px" height="300px"/>
                </div>
                <div>
                    <h3>{id} - {name}</h3>
                </div>
                <div>
                    <h4>Price: $ {price}</h4>
                </div>
                <div>
                    <button className="change" onClick={previousPerson}>Previous</button>
                    <button className="change" onClick={nextPerson}>Next</button>
                </div>          
            </div>            
        </div>
    )
}
export default About;