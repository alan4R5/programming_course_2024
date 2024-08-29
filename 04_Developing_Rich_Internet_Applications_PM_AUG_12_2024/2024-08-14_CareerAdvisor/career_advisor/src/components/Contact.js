import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <form action="/action_page.php">
                <label
                    style={{
                        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "100%",
                        fontWeight: "bold",
                        paddingLeft: "2%",
                    }}
                    htmlFor="name"
                >
                    Name:
                </label>
                <br />
                <input type="text" id="name" name="name" />
                <br />
                <br />
                <label
                    style={{
                        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "100%",
                        fontWeight: "bold",
                        paddingLeft: "2%",
                    }}
                    htmlFor="email"
                >
                    Email:
                </label>
                <br />
                <input type="text" id="email" name="email" />
                <br />
                <br />
                <label
                    style={{
                        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "100%",
                        fontWeight: "bold",
                        paddingLeft: "2%",
                    }}
                    htmlFor="message"
                >
                    Message:
                </label>
                <br />
                <textarea id="review" name="review" rows="8" cols="120"></textarea>
                <br />
                <input
                    style={{
                        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "200%",
                    }}
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Contact;