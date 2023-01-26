function Warranty() {
    return(
        <div className="about">
            <img src="https://plus.unsplash.com/premium_photo-1668473367234-fe8a1decd456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="pic" width="100%" height="350px"/>
            <h2>Support Enquiry</h2>
            <p>Have a question or seek technical advice? Our support team is happy to help. Please fill out the form:</p>
        
        <div className="form">
            <form>
                <div className="contain">
                    <label>Name: </label>
                    <input type="text" placeholder="Name" className="space"/>
                </div>
                <div className="contain">
                    <label>Email: </label>
                    <input type="email" placeholder="Email" className="space"/>
                </div>
                <div className="contain">
                    <label>Type:</label>
                </div>
                <div className="contain">
                    <label>
                        <input type="radio" name="type"/>Accessories
                    </label>
                    <label>
                        <input type="radio" name="type"/>Devices
                    </label>
                    <label>
                        <input type="radio" name="type"/>Health Devices
                    </label>
                    <label>
                        <input type="radio" name="type"/>Home Devices
                    </label>
                </div>
                
                <div className="contain">
                    <label>Choose a product: </label>
                    <select className="space">
                        <option>headphones</option>
                        <option>watch</option>
                        <option>camera</option>
                        <option>scale</option>
                        <option>thermometer</option>
                        <option>humidifier</option>
                    </select>
                </div>
                <div className="contain">
                    <label>Description: </label>
                    <input type="text" placeholder="Comment" className="space"/>
                </div>
                    <button className="btn" type="submit">Submit</button>
            </form>
            </div>
    </div>
    )
}

export default Warranty;