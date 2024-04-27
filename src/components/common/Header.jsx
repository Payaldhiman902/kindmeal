import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div class="header">
        <div id="logo"><img src="https://www.kindmeal.my/images/logo-kindmeal.png" /></div>
        <div id="sm">
          <a href="https://www.kindmeal.my/widget.htm" target="_blank"><img src="https://www.kindmeal.my/images/follow_blog_grey.png" /></a>
          <a href="https://www.facebook.com/KindMeal.my" target="_blank" ><img src="https://www.kindmeal.my/images/follow_facebook_grey.png" /></a>
          <a href="https://twitter.com/KindMeal" target="_blank"> <img src="https://www.kindmeal.my/images/follow_twitter_grey.png" /></a>
        </div>

        <div id="entry">
          <Link style={{ marginTop: "-30px", marginRight: "10px",marginLeft:"-50px" }} to="/login" ><p2>Login</p2></Link>
          <a style={{ marginTop: "-30px", marginRight: "20px", }} href="https://www.facebook.com/" target="_blank" ><p2 id="face"  >Facebook</p2></a>
          <a style={{ marginTop: "-30px", marginRight: "20px", }} href="#"><p2 id="face"  >Email</p2></a>
          <Link style={{ marginTop: "-30px", }} to="/signup"><p2> | Sign Up</p2></Link>

        </div>


      </div>

      <div id="navbigcon">
        <div id="navcon">
          <div> <Link to='/'>Home</Link> </div>
          <div> <Link to='/Mealdeal'>Meal Deals</Link> </div>
          <div> <Link to='/#'>KindMoments</Link> </div>
          <div> <Link to='/#'>Hot Picks</Link> </div>
          <div> <Link to='/#'>Recipes</Link> </div>
          <div> <Link to='/map'>Directory</Link> </div>
          <div> <Link to='/#'>Articles</Link> </div>
          <div> <Link to='/help'>Help</Link> </div>
        </div>
      </div>
    </div>
  )
}

export default Header