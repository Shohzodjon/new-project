import React from "react";
import Navbar from "../navbar/Navbar";
import GooglePlay from "../../assets/imges/googleplay.png";
import AppStore from "../../assets/imges/appstore.png";
import HomeImg from "../main-component/right-side/img/food_5.png";
import MealImg from "../main-component/right-side/img/food_6.png";
import MealImg2 from "../main-component/right-side/img/food_4.png";
import MealImg3 from "../main-component/right-side/img/food_3.png";
// style
import "./home.css";

const Home = () => {
  return (
    <section className="home--section">
      <header className="home--section__header">
        <Navbar />
        <div className="container">
          <div className="home--section--flex">
            <div className="home--flex--info">
              <h1>Order food anytime, anywhere</h1>
              <p>
                Browse from our list of specials to place your order and have
                food delivered to you in no time. Affordable, tasty and fast!
              </p>

              <div className="home--google--app">
                <img src={GooglePlay} alt="google--play" />
                <img src={AppStore} alt="app--store" />
              </div>
            </div>

            <div className="home--flex--img">
              <div className="home--img">
                <img src={HomeImg} alt="home img" />
              </div>
            </div>
          </div>

          <section className="home--section--meal">
            <h2 className="meal--title">Special Meals of the day!</h2>
            <p className="meal--pragh">
              Check our sepecials of the day and get discounts on all our meals{" "}
              and swift delivery to what ever location within Ilorin.
            </p>

            <div className="meal--cart--wrapp">
              <div className="meal--cart">
                <div className="meal--cart--img">
                  <img src={MealImg} alt="meal img" />
                </div>
                <div className="meal--cart--info">
                  <h3>Stir fry Pasta</h3>
                  <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
              </div>
              <div className="meal--cart">
                <div className="meal--cart--img">
                  <img src={MealImg2} alt="meal img" />
                </div>
                <div className="meal--cart--info">
                  <h3>Meat Balls</h3>
                  <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
              </div>
              <div className="meal--cart">
                <div className="meal--cart--img">
                  <img src={MealImg3} alt="meal img" />
                </div>
                <div className="meal--cart--info">
                  <h3>Burger Meal</h3>
                  <p>Stir fry pasta yada yada yada because of Sesan</p>
                </div>
              </div>
            </div>
          </section>

          <section className="home--section--update">
            <div className="home--upate--flex">
              <div className="update--flex--left">
                <h2>Get notified when we update!</h2>
                <p>
                  Get notified when we add new items to our specials menu,
                  update our price list of have promos!
                </p>
              </div>
              <div className="update--flex--right">
                <input type="email" placeholder="gregphillips@gmail.com" />
                <button type="submit">Get notified</button>
              </div>
            </div>
          </section>
        </div>
      </header>
    </section>
  );
};

export default Home;
