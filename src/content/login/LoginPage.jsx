import React, { useState, useEffect } from 'react';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [userData, setUserData] = useState(null); // State to hold user data from localStorage

    useEffect(() => {
        // Retrieve user data from localStorage on component mount
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleOnChange = (e) => {
        console.log("Input changed"); // Add this line to check if the function is called
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Check if the user exists in stored data
        if (userData && userData.email === formData.email && userData.password === formData.password) {
            // Perform login actions
            console.log("Login successful");
        } else {
            // Handle invalid credentials
            console.log("Invalid credentials");
        }
    }

    return (

        <div>
            <div className="header">
                <div id="logo">
                    <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="KindMeal Logo" />
                </div>
                <div id="sm">
                    <a href="https://www.kindmeal.my/widget.htm" target="_blank">
                        <img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="Follow Blog" />
                    </a>
                    <a href="https://www.facebook.com/KindMeal.my" target="_blank">
                        <img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="Follow Facebook" />
                    </a>
                    <a href="https://twitter.com/KindMeal" target="_blank">
                        <img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="Follow Twitter" />
                    </a>
                </div>
                <div id="entry">
                    <a style={{ marginTop: "-30px", marginRight: "10px", marginLeft: "-50px" }} to="/login" ><p2>Login</p2></a>
                    <a style={{ marginTop: "-30px", marginRight: "20px", }} href="https://www.facebook.com/" target="_blank" ><p2 id="face"  >Facebook</p2></a>
                    <a style={{ marginTop: "-30px", marginRight: "20px", }} href="#"><p2 id="face"  >Email</p2></a>
                    <a style={{ marginTop: "-30px", }} to="/signup"><p2> | Sign Up</p2></a>

                </div>
            </div>

            <div id="navbigcon">
                <div id="navcon">
                    <div><a href="index.html">Home</a></div>
                    <div><a href="mealdeal.html">Meal Deals</a></div>
                    <div><a href="#">KindMoments</a></div>
                    <div><a href="#">Hot Picks</a></div>
                    <div><a href="#">Recipes</a></div>
                    <div><a href="map.html">Directory</a></div>
                    <div><a href="#">Articles</a></div>
                    <div><a href="help.html">Help</a></div>
                </div>
            </div>

            <div id="container">
                <div id="left_box">
                    <div className="leftbox_innerbox">
                        <img src="https://www.kindmeal.my/images/join_normal.png " alt="" />
                        <p> <a href="signup.html"> Food Lover Sign Up </a> </p>
                    </div>

                    <div className="leftbox_innerbox">
                        <img src=" https://www.kindmeal.my/images/join_shop.png " alt="" />
                        <p> <a href="rsignup.html"> Restaurants Sign Up </a></p>
                    </div>


                    <div className="box_3" >
                        <h2>Why KindMeal?</h2>
                        <ul style={{ fontSize: "10px" }}>
                            <li>Exclusive meat-free deals</li>
                            <li>Share yummy food moments</li>
                            <li>Meet friendly food lovers</li>
                            <li>Discover cool restaurants</li>
                            <li>Email updates on tasty deals</li>
                            <li>Instant coupons &amp; dining</li>
                            <li>No upfront payment, booking or printing</li>
                        </ul>
                        <p>More about KindMeal»</p>
                    </div>
                </div>
            </div>
            <div className='container' style={{ width: "100%", marginLeft: "40%", marginTop: "-55%" }}>
                <div id="right_box" style={{ width: "110%", height: "50%", marginTop: "10px" }}>
                    <div className="login_logo" style={{ marginLeft: "-70px" }}><img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="KindMeal Logo"
                    /></div>
                    <div className="login_text"
                        style={{ marginLeft: "130px", marginTop: "-10px" }}>
                        MemberLogin</div>
                    <form onSubmit={onSubmit}>
                        <label style={{ marginTop: "-20px" }}>Email</label>
                        <input 
                        id="email"
                        name="email" // Make sure the name attribute matches the key in formData
                        required
                        type="text"
                        placeholder="Your Email"
                        style={{ marginTop: "5px", marginLeft: "-50px" }}
                        onChange={handleOnChange}
                        value={formData.email}/>
                        <br />
                        <label style={{ marginLeft: "0px", marginTop: "-10px" }}>Password</label>
                        <input
                            id="password"
                            name="password"
                            required type="password"
                            placeholder="Your Password"
                            style={{ marginTop: "-10px", marginLeft: "-50px" }}
                            onChange={handleOnChange}
                            value={formData.password} /><br />
                        <input id="login_button" type="submit" value="Login" /><br />
                    </form>
                    <hr />

                    <div className="facebook"><img src="https://www.pngkit.com/png/full/190-1905592_login-with-facebook-button-png-facebook-login-button.png" alt="Facebook Login Button" /></div>
                    <div className="login_item">
                        <p><a href="signup.html">Forget Password?</a></p>
                        <a href="signup.html"><p>Not a Member? Sign up FREE!</p></a>
                    </div>

                </div>
            </div>
            <div id="lastImg">
                <img src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="How KindMeal Works" />
            </div>
            <div id="table_container">
                <div id="card">
                    <div>
                        <table>
                            <tr>
                                <th id="left">General</th>
                            </tr>
                            <tr><td>Home</td></tr>
                            <tr><td>Sign Up</td></tr>
                            <tr><td>Businesses / Restaurateurs</td></tr>
                            <tr><td>Advertising</td></tr>
                            <tr><td>About KindMeal.my</td></tr>
                            <tr><td>Help & FAQ</td></tr>
                            <tr><td>Terms & Conditions</td></tr>
                            <tr><td>Inspiring Partners</td></tr>
                            <tr><td>Lifestyle Ambassadors</td></tr>
                            <tr><td>Jobs & Careers</td></tr>
                            <tr><td>Contact Us</td></tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th id="left">Features</th>
                            </tr>
                            <tr><td>Meat-Free Deals</td></tr>
                            <tr><td>Tasty Menus</td></tr>
                            <tr><td>Kind Moments</td></tr>
                            <tr><td>Meat-Free Recipes</td></tr>
                            <tr><td>Member Recommendations</td></tr>
                            <tr><td>Featured Restaurants</td></tr>
                            <tr><td>Vegetarian & Vegan Directory</td></tr>
                            <tr><td>Food Map</td></tr>
                            <tr><td>Become A Superhero</td></tr>
                            <tr><td>Vegan News & Vegetarian Articles</td></tr>
                            <tr><td>Latest Comments</td></tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th id="left">Social Media</th>
                            </tr>
                            <tr><td>KindMeal Widget</td></tr>
                            <tr><td>Facebook</td></tr>
                            <tr><td>Twitter</td></tr>
                            <tr><td>Instagram</td></tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th id="left">Mobile</th>
                            </tr>
                            <tr><td>iPhone & iPod App</td></tr>
                            <tr><td>Android App</td></tr>
                        </table>
                        <table>
                            <tr>
                                <th id="left" class="togetmargin">Exciting Promos</th>
                            </tr>
                            <tr><td>Gadhimai: Ending Mass Slaughter</td></tr>
                            <tr><td>Free Meals</td></tr>
                            <tr><td>Food Bloggers</td></tr>
                            <tr><td>Uber CHIRP</td></tr>
                            <tr><td>Jane Goodall Contest</td></tr>
                            <tr><td>Win Digi iPhone 6</td></tr>
                            <tr><td>Feed The Poor</td></tr>
                            <tr><td>Win Superhero Gifts</td></tr>
                            <tr><td>Win an iPad Mini 3</td></tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th id="left">PetFinder.my</th>
                            </tr>
                            <tr><td>Adopt A Pet</td></tr>
                            <tr><td>Smartphone Apps</td></tr>
                            <tr><td>WAGazine</td></tr>
                            <tr><td>Discussion Forum</td></tr>
                            <tr><td>Medical Fund</td></tr>
                        </table>
                    </div>
                </div>
            </div>
            <div id="lastPara">
                <p>
                    Copyright © KindMeal.my, 2014 - 2022. All rights reserved.<br />
                    This website promotes compassionate, meat-free dining experience.
                    Some food may contain eggs, dairy products or alcohol,
                    please view individual listings for details.
                </p>
            </div>

        </div>
    )
}

export default LoginPage