import React from 'react';

function TableContainer() {
  return (
    <div>
      <div  style={{height:"600px"}} id="table_container">
        <div id="card">
          <div>
            <table>
              <tr>
                <th  id="left">General</th>
              </tr>
              <tr ><td >Home</td></tr> 
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
                <th id="left" className="togetmargin">Exciting Promos</th>
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
        <div id="lastPara">
          <p>
            Copyright © KindMeal.my, 2014 - 2022. All rights reserved.<br />
            This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TableContainer;
