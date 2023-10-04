import React from "react";
import "../BannerPage/home.css";
import Product from "../ProductPage/Product";
import BannerSlide from "../Header/BannersSlide";
import { Link } from "react-router-dom";
import Login from "../LoginPage/Login";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <BannerSlide />
        <div className="home-row">
          <Product
            id="12321341"
            title="Acer Aspire 5 A515-56-36UT, 15.6 Full HD Display, 11th Gen Intel Core i3-1115G4 Processor, 4GB DDR4, 128GB NVMe SSD, WiFi 6, Windows 11 Home (S Mode)"
            price={1125.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71233PTgAjL._AC_SX679_.jpg"
          />
          <Product
            id="49538094"
            title="Roku Express 4K+ | Roku Streaming Device 4K/HDR, Roku Voice Remote, Free & Live TV"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71EZAE6fljL._AC_SX466_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="490854"
            title="
            Kindle Paperwhite (8 GB) – Now with a 6.8 display and adjustable warm light - Without Lockscreen Ads - Black"
            price={852.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61P+vrvFZ9L._AC_SL1000_.jpg"
          />

          <Product
            id="4903850"
            title="SAMSUNG Electronics Galaxy Watch 4 44mm R870 Smartwatch GPS WiFi Bluetooth (International Model) (Black), (SM-R870)"
            price={399.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={198.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="13"
            title="
            GIGABYTE B650M DS3H (AM5/ LGA 1718/ AMD/ B650/ Micro ATX/ 5-Year Warranty/ DDR5/ PCIe 4.0 M.2/ PCIe 4.0/ USB 3.2"
            price={745}
            rating={4}
            image="https://m.media-amazon.com/images/I/81LJcmxuEPL._AC_SL1500_.jpg "
          />

          <Product
            id="13"
            title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
            price={745}
            rating={4}
            image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
          />
          <Product
            id="14"
            title="D 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
            price={1879}
            rating={5}
            image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
          />
          <Product
            id="12"
            title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
            price={629}
            rating={3}
            image="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="1896532"
            title="iHome 2 Port USB Wall Charger: AC Pro Multiport USB Charger"
            price={16.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/8147Byy8CXS._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg"
          />

          <Product
            id="1896532"
            title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            price={722}
            rating={4}
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          />
          <Product
            id="2785665"
            title="Solid Gold Petite Micropave"
            price={899}
            rating={5}
            image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
          />

          <Product
            id="245622"
            title="JBL FLIP 5, Waterproof Portable Bluetooth Speaker, Black, Small"
            price={410}
            rating={5}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="3378"
            title="COOFANDY Men's Suit Jacket and Vest Set Slim Fit 2 Pieces Suits Two Button Blazer Jacket "
            price={389}
            rating={5}
            image="https://m.media-amazon.com/images/I/614mp3WCqKL._AC_UX569_.jpg"
          />

          <Product
            id="3"
            title="Mens Cotton Jacket"
            price={89}
            rating={5}
            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          />
          <Product
            id="4"
            title="Mens Casual Slim Fit"
            price={125}
            rating={3}
            image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          />
          <Product
            id="5"
            title="Mens Casual Premium Slim Fit T-Shirts"
            price={98}
            rating={5}
            image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          />
        </div>

        <div className="home-row">
          {/* https://m.media-amazon.com/images/I/61U4h+PfExL._AC_SL1080_.jpg */}

          <Product
            id="356"
            title="Cuisinart 15-Piece Knife Set with Block, High Carbon Stainless Steel"
            price={499}
            rating={5}
            image="https://m.media-amazon.com/images/I/61U4h+PfExL._AC_SL1080_.jpg"
          />

          <Product
            id="3"
            title="Modern Home Narrow Sliding Storage Organizer Rack"
            price={499}
            rating={5}
            image="https://m.media-amazon.com/images/I/61H5xMP8s5L._AC_UL320_.jpg "
          />
          <Product
            id="4"
            title="IMUSA USA B120-42V Aluminum Espresso Stovetop Coffeemaker 3-Cup, Silver"
            price={699}
            rating={3}
            image="https://m.media-amazon.com/images/I/51tOIsbcjBS._AC_UL320_.jpg"
          />
          <Product
            id="5"
            title="Amazon Basics 8 Sheet Cross Cut Paper and Credit Card Shredder with 4.1 Gallon Bin, Black"
            price={500}
            rating={5}
            image="https://m.media-amazon.com/images/I/81vKaylqd6L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="31"
            title="American Flag with Machine Guns Mens Novelty Tank Top Gym Muscle"
            price={20}
            rating={5}
            image="https://m.media-amazon.com/images/I/71l+R6CF4rL._AC_SL1500_.jpg "
          />

          <Product
            id="31"
            title="Body-Solid (EXM3000LPS) Multi-Station 210lb Dual Weight Stack Machine for Home & Commercial Gym"
            price={491}
            rating={5}
            image="https://m.media-amazon.com/images/I/81oRa-SJJqL._AC_SX425_.jpg "
          />
          <Product
            id="41"
            title="Bowflex SelectTech 552 Adjustable Dumbbells"
            price={799}
            rating={4}
            image="https://m.media-amazon.com/images/I/71+pOdQ7iKL._AC_SX466_.jpg"
          />
          <Product
            id="51"
            title="Marcy Recumbent Exercise Bike with Resistance ME-709"
            price={300}
            rating={5}
            image="https://m.media-amazon.com/images/I/61y65rHxiZL._AC_SX425_.jpg"
          />
        </div>
        <div className="SignIn-container">
          <div className="footer-border">
            <p>See personalized recommendations</p>
            <Link to="/Login" className="Button-link">
              <div className="button-container">
                <button className="in-button">Sign in</button>
              </div>
            </Link>
            <p>
              New customer?{" "}
              <Link to="/Login" className="link">
                Start here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
