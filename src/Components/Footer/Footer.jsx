import React, { useState, useEffect } from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a timeout to delay the API call until the user stops typing
    setTypingTimeout(
      setTimeout(() => {
        checkIfEmailIsSubscribed(value);
      }, 500) // 500ms delay
    );
  };

  const checkIfEmailIsSubscribed = async (email) => {
    if (email) {
      try {
        const res = await fetch(
          `http://localhost:3001/api/check-subscription`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        const data = await res.json();
        if (data.isSubscribed) {
          setIsSubscribed(true);
        } else {
          setIsSubscribed(false);
        }
      } catch (error) {
        console.error("Error checking subscription status:", error);
      }
    }
  };

  const handleSubscribeClick = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert("Subscribed successfully!");
        setIsSubscribed(true); // Disable button after subscription
      } else {
        const result = await res.json();
        alert(result.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an issue with the subscription process.");
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            className="footer-subscribe"
            onClick={handleSubscribeClick}
            disabled={!email || isSubscribed} // Disable button if email is empty or already subscribed
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Mr Parte. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
