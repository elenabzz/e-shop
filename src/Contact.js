function Contact() {
    return(
    <div className="about">
        <img src="https://plus.unsplash.com/premium_photo-1668473366519-ac76b1e8e8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="pic" width="100%" height="350px"/>
        <h2>Contact us</h2>

        <div className="form">
            <form action="https://formspree.io/f/xoqbadde" method="POST">
            <div className="contain">
                <label>Your email: </label>
                <input type="email" name="email" className="space"/>
            </div>
            <div className="contain">
                <label>Your message: </label>
                <textarea name="message"></textarea>
            </div>

            <button className="btn" type="submit">Send</button>
            </form>
        </div>
    </div>
    )
}
export default Contact;