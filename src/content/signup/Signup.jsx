import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const initialValues = {
    fullName: '',
    gender: '',
    email: '',
    password: '',
    terms: false,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    terms: Yup.boolean().oneOf([true], 'Must accept Terms & Conditions'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:4000/users', values);
      console.log(response.data)
      const data = response.data;

      if (data) {
        // Store user data in localStoragen
        localStorage.setItem('usersData', JSON.stringify(data));
        // Navigate to the desired location after successful signup
        navigate('/'); // Assuming you're using React Router for navigation
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again later.');
      
    }
    setSubmitting(false);
  };
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
          <a style={{ marginTop: "-30px", marginRight: "10px" }} href="login.html" target="_blank" ><p2>Login</p2></a>
          <a style={{ marginTop: "-30px", marginRight: "20px", }} href="https://www.facebook.com/" target="_blank" ><p2 id="face"  >Facebook</p2></a>
          <a style={{ marginTop: "-30px", marginRight: "20px", }} href="#"><p2 id="face"  >Email</p2></a>
          <a style={{ marginTop: "-30px", }} href=""><p2> | Sign Up</p2></a>
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


          <div className="box_3">
            <h2>Why KindMeal?</h2>
            <ul style={{fontSize:"10px"}}>
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
        <div id="right_box" >
          <div id="info" style={{border:"white"}}>
            <h1>Food Lover? Sign Up Now or <a href=" https://www.facebook.com/"> Login With Facebook </a> </h1>
            <br />

            <p style={{ fontSize: "15px" }}>
              Discover tasty meat-free meals and dine instantly — no coupon
              payment, booking or printing is required.
            </p>
            <br />

            <p style={{ fontSize: "15px" }}>
              KindMeal is a fun, exciting and cool new way for you to show your
              compassion towards animals. We <br />
              collaborate with kind restaurants and cafes across the nation to
              bring you delicious meat-free foods that will <br />
              not only help save precious animal lives, but improve your health
              and save your money at the same time!
            </p>



            <div id="signup_part">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div id="name">
                      <h3 style={{ marginTop: "40px" }} className="name">Your Name</h3><br /><br />
                      <Field type="text" name="fullName" id="fullName" style={{ marginTop: "-80px" }} />
                      <ErrorMessage name="fullName" component="div" className="error" />
                    </div>

                    <div id="name">
                      <h3 className="name">Gender</h3>
                      <div id="radio">
                        <Field type="radio" name="gender" id="male" value="male" style={{ marginTop: "-55px", marginLeft: "-150px", display: "flex" }} />
                        <label htmlFor="male" style={{ marginTop: "-30px", marginLeft: "10px" }}>MALE</label>

                        <Field type="radio" name="gender" id="female" value="female" style={{ marginTop: "-55px", marginLeft: "-14px" }} />
                        <label htmlFor="female" style={{ marginTop: "-30px", marginLeft: "130px" }}>FEMALE</label>
                      </div>
                      <ErrorMessage name="gender" component="div" className="error" />
                    </div>

                    <div id="name">
                      <h3 className="name"> Email </h3>
                      <Field type="email" name="email" id="email" style={{ marginTop: "-20px", marginLeft: "-20px" }} />
                      <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div id="name">
                      <h3 className="name">Password</h3>
                      <Field type="password" name="password" id="password" style={{ marginTop: "-20px", marginLeft: "-20px" }} />
                      <ErrorMessage name="password" component="div" className="error" />
                    </div>

                    <div id="name">
                      <label>
                        <Field type="checkbox" name="terms" style={{ marginLeft: '290px', marginBottom: "-30px", width: "20px", marginTop: "10px" }} />
                        I agree to KindMeal.my's <span style={{ color: "red" }}>Terms & Conditions</span>
                      </label>
                      <ErrorMessage name="terms" component="div" className="error" />
                    </div>

                    <button type="submit" disabled={isSubmitting} style={{ border: '2px solid blue', borderRadius: "10%", backgroundColor: "blue", color: "white", marginLeft: "40%", marginTop: "10px" }}>
                      Join Now
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <div id="lastImg">
        <img src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="How KindMeal Works" />
      </div>


    </div>
  );
}

export default Signup;
