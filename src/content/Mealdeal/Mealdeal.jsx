import React, { useEffect, useState } from 'react';
import { productdata } from '../../assets/sata';

const Mealdeal = () => {
   
  const[pro, setPro] = useState([])

useEffect(()=>{
  setPro(productdata)
},[])
return(
  <>
    <div>
      <div>
        {/* Header */}
        <div className="header">
          <div id="logo"><img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="KindMeal Logo" /></div>
          <div id="sm">
            <a href="https://www.kindmeal.my/widget.htm" target="_blank"><img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="Follow Blog" /></a>
            <a href="https://www.facebook.com/KindMeal.my" target="_blank"><img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="Follow Facebook" /></a>
            <a href="https://twitter.com/KindMeal" target="_blank"><img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="Follow Twitter" /></a>
          </div>
          <div id="entry">
            <a href="#" target="_blank"><p2>Login</p2></a>
            <a href="https://www.facebook.com/" target="_blank"><p2>Facebook</p2></a>
            <a href="#3"><p2>Email</p2></a>
            <a href="#4"><p2>| Sign Up</p2></a>
          </div>
        </div>
        {/* Navigation */}
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
      </div>

    </div>
    <div id="box">
      <div id="container" style={{ display: "inline", width: '130%' }}>
        <div id="headline"  >
          <h1 style={{ marginLeft: "-470px" }}>Paste Meat-Free Deals </h1>
          <h1 style={{ marginTop: "-60px" }} >|</h1>
          <h2 style={{ marginTop: "-40px", marginLeft: "330px" }}>Restaurants In Malaysia</h2>
        </div>

        <p style={{ marginTop: "-10px" }}>Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free
          Coupon"
          to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is
          needed.
          If you share it on social media, you'll even DOUBLE your discount!</p>
        <p>Download our <a href="https://www.kindmeal.my/mobile.htm">mobile app</a> now to easily get coupons and
          start dining in a few seconds.
          Effortlessly save
          lives,
          health, environment and money now!</p>

        <div id="select" >
          <form action="" id="form">
            <input type="text" className="opt" id="search" placeholder="Search Shop or Deal Name" />
            <select name="" className="opt" id="category">
              <option value="all">All Categories</option>
              <option value="pasta">Pasta</option>
              <option value="burger">Burger</option>
              <option value="pizza">Pizza</option>
              <option value="salad">Salad</option>
            </select>
            <select name="" className="opt" id="location">
              <option value="all">All location</option>
              <option value="Kuala Lumpur"> Kuala Lumpur</option>
              <option value="Petaling Jaya"> Petaling Jaya</option>
              <option value="Ampang"> Ampang</option>
              <option value="Ara Damansara"> Ara Damansara</option>
              <option value="Bangsar"> Bangsar</option>
              <option value="Bangsar South">Bangsar South</option>
            </select>
            <input type="submit" id="red" value="Search Deals" />
            <button id="green">Browse Restaurants</button>
          </form>
        </div>
      </div>
    </div>
    <div>
      <div id="bannerbox">
        <img id="bannerimage" src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg" alt="bannerimage" />
      </div>
      <div className="pagenation">

      </div>
<h1>



</h1>
      <div className="">
        <div className="" style={{ border: "2px solid black", height: "200px", width: "50%" }}>
          { Array.isArray(pro) && pro.map((product, index) => (
            <div key={index} className="product">
              <img src={product?.productImg} alt={product?.productName} />
              <h3>{product.productName}</h3>
              <p>{product.cafeName} - {product.location}</p>
              <p>{product.para}</p>
              <p>{product.discount} {product.discountpercent}</p>
              <p>{product.expire} - {product.expireday}</p>
              <p>Price: {product.Price}</p>
            </div>
          ))}
        </div>
      </div>
   


      <div id="powerimg">
        <div id="lastImg">
          <img src="https://www.kindmeal.my/images/banner_whykindmeal.png" />
        </div>
      </div>

      <div id="table_container">
        <div id="card">
          <div>
            <table>
              <thead>
                <tr>
                  <th id="left">General</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th id="left">Features</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th id="left">Social Media</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>KindMeal Widget</td></tr>
                <tr><td>Facebook</td></tr>
                <tr><td>Twitter</td></tr>
                <tr><td>Instagram</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th id="left">Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>iPhone & iPod App</td></tr>
                <tr><td>Android App</td></tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th id="left" className="togetmargin">Exciting Promos</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Gadhimai: Ending Mass Slaughter</td></tr>
                <tr><td>Free Meals</td></tr>
                <tr><td>Food Bloggers</td></tr>
                <tr><td>Uber CHIRP</td></tr>
                <tr><td>Jane Goodall Contest</td></tr>
                <tr><td>Win Digi iPhone 6</td></tr>
                <tr><td>Feed The Poor</td></tr>
                <tr><td>Win Superhero Gifts</td></tr>
                <tr><td>Win an iPad Mini 3</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th id="left">PetFinder.my</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Adopt A Pet</td></tr>
                <tr><td>Smartphone Apps</td></tr>
                <tr><td>WAGazine</td></tr>
                <tr><td>Discussion Forum</td></tr>
                <tr><td>Medical Fund</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </>
);
}

export default Mealdeal

