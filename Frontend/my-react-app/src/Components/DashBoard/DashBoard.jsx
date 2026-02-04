import React, { useState } from "react";
import "./DashBoard.css";

import mobilerecharge from "../../assets/Images/MobileRecharge.png";
import dth from "../../assets/Images/Dth.png";
import electricity from "../../assets/Images/Electricity.png";
import emi from "../../assets/Images/Emi.png";
import fasttag from "../../assets/Images/Fastag.png";
import viewall from "../../assets/Images/ViewAll.png";
import bannerupi from "../../assets/Images/BannerUpi.jpg";

import { FaApple, FaGooglePlay, FaPlane, FaBus, FaTrain } from "react-icons/fa";
const DashBoard = () => {
  /* ================= STATES ================= */
  const [downloadText, setDownloadText] = useState("Download Paytm App");
  const [showMsg, setShowMsg] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  //state (FIXED)
  const [clickedCard, setClickedCard] = useState(null);

  // cards array (FIXED)
  const cards = [
    {
      id: 1,
      title: "Swipe left to keep it hush",
      desc: "Hide your past payments with a left swipe",
      img: [bannerupi],
      bg: "yellow",
    },
    {
      id: 2,
      title: "Expense tracking made smarter!",
      desc: "Now, download your statement in Excel/PDF format",
      img: [bannerupi],
      bg: "blue",
    },
    {
      id: 3,
      title: "We do the math, you do the spending.",
      desc: "Check total balance of all your linked bank accounts",
      img: [bannerupi],
      bg: "lightblue",
    },
  ];

  const handleDownload = () => {
    setDownloadText("Downloading...");
    setShowMsg(true);
  };

  /* ==================== Travelling ================== */

  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("Delhi (DEL)");
  const [to, setTo] = useState("Mumbai (BOM)");
  const [depart, setDepart] = useState("Sat, 31 Jan 26");
  const [returnDate, setReturnDate] = useState("");
  const [passenger, setPassenger] = useState("1 Traveller, Economy");
  const [fare, setFare] = useState("armed");

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  /* ========================= Bank Accounts ================= */

  const [amount] = useState(250);
  const [receiver] = useState("Ajay Gupta");
  const [status, setStatus] = useState(false);

  const handlePay = () => {
    setStatus(true);
    setTimeout(() => setStatus(false), 3000);
  };
  return (
    <div className="page">
      {/* ================= BANNER ================= */}
      <div className="banner-wrapper">
        <div className="banner">
          <div className="banner-text">
            <h2>Get UPI Statement in Excel / PDF</h2>
            <p>Track all your expenses. Only on Paytm App.</p>
          </div>

          <button className="banner-btn" onClick={handleDownload}>
            {downloadText}
            <FaApple className="store-icon" />
            <FaGooglePlay className="store-icon" />
          </button>
          {/*FIXED image syntax */}
          <img
            src={bannerupi}
            alt="BannerUPI"
            style={{ height: " 107px", width: "83px" }}
          />
        </div>

        {showMsg && <p className="download-msg">📱 App download started</p>}
      </div>

      {/* ================= RECHARGE SECTION ================= */}
      <div className="recharge-wrapper">
        <div className="recharge-box">
          <h3>Recharges & Bill Payments</h3>

          <div className="recharge-items">
            {[
              { id: "mobile", img: mobilerecharge, label: "Mobile Recharge" },
              { id: "dth", img: dth, label: "DTH Recharge" },
              { id: "fasttag", img: fasttag, label: "Fastag Recharge" },
              {
                id: "electricity",
                img: electricity,
                label: "Electricity Bill",
              },
              { id: "emi", img: emi, label: "Loan EMI" },
              { id: "viewall", img: viewall, label: "View All" },
            ].map((item) => (
              <div
                key={item.id}
                className={`item ${activeItem === item.id ? "active" : ""}`}
                onClick={() => setActiveItem(item.id)}
              >
                <img src={item.img} alt={item.label} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SIDE CARD */}
        <div className="side-card">
          <div className="className-text">
            <h3>
              Get Detailed Spend
              <br />
              Summary
            </h3>
            <p>
              Now check your
              <br />
              spends in a tap. <br />
              Only on Paytm.
            </p>
            <button
              onClick={handleDownload}
              style={{
                "border-radius": "10px",
                "background-color": "black",
                color: "#ffffff",
              }}
            >
              Download App
              <FaApple className="store-icon" />
              <FaGooglePlay className="store-icon" />
            </button>
          </div>
          <div className="">
            <img
              src={bannerupi}
              alt=""
              style={{
                width: "130px",
                height: "80%",
                marginLeft: "30px",
                marginTop: "50px",
              }}
            />
          </div>
        </div>
      </div>

      {/* ================= PROMO CARDS ================= */}
      <div className="promo-wrapper">
        <div className="promo-card1">
          <div className="promo-left">
            <div className="icon cashback">
              CASH
              <br />
              BACK
            </div>
            <div className="text">
              <h4>Do Mobile Recharge and Win ₹100</h4>
              <p>
                cashback. Promo: <b>TAKEITALL</b>
              </p>
            </div>
          </div>

          <button className="promo-btn1" onClick={() => setLeftClicked(true)}>
            {leftClicked ? "Recharged ✔" : "Recharge Now →"}
          </button>
        </div>

        <div className="promo-card2">
          <div className="promo-left">
            <div className="icon broadband">📶</div>
            <div className="text">
              <h4>Broadband Recharge</h4>
              <p>Bill due? Pay now & get rewarded</p>
            </div>
          </div>

          <button className="promo-btn2" onClick={() => setRightClicked(true)}>
            {rightClicked ? "Paid ✔" : "Pay Now →"}
          </button>
        </div>
      </div>

      {/* ================= FEATURE BOTTOM CARDS ================= */}
      <div className="feature-wrapper">
        {cards.map((card) => (
          <div key={card.id} className={`feature-card ${card.bg}`}>
            <div className="feature-content">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>

              <button
                className="download-btn"
                onClick={() => setClickedCard(card.id)}
              >
                {clickedCard === card.id
                  ? "Downloading… ✔"
                  : "Download App Now →"}
              </button>
            </div>

            <div className="feature-phone">
              <div className="phone-placeholder">
                <img
                  src={card.img}
                  alt=""
                  style={{
                    width: "120%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== Travelling ===================== */}
      <div className="travel-page">
        {/* TABS */}
        <div className="travel-tabs">
          <div className="tab active">
            <FaPlane /> Flights
          </div>
          <div className="tab">
            <FaBus /> Bus
          </div>
          <div className="tab">
            <FaTrain /> Trains
          </div>
          <div className="tab">
            <FaPlane /> Intl. Flights
          </div>

          <div className="paytm-logo">
            paytm <b>travel</b>
          </div>
        </div>

        {/* SEARCH CARD */}
        <div className="search-card">
          {/* TRIP TYPE */}
          <div className="trip-type">
            <label>
              <input
                type="radio"
                checked={tripType === "oneway"}
                onChange={() => setTripType("oneway")}
              />
              One Way
            </label>

            <label>
              <input
                type="radio"
                checked={tripType === "round"}
                onChange={() => setTripType("round")}
              />
              Round Trip
            </label>
          </div>

          {/* SEARCH ROW */}
          <div className="search-row">
            <div className="field">
              <p>From</p>
              <h3>{from}</h3>
            </div>

            <div className="swap" onClick={swapCities}>
              ⇄
            </div>

            <div className="field">
              <p>To</p>
              <h3>{to}</h3>
            </div>

            <div className="field">
              <p>Depart</p>
              <h3>{depart}</h3>
            </div>

            <div className="field">
              <p>Return</p>
              <h3 className="link">
                {tripType === "round" ? "Sun, 2 Feb 26" : "Add Return"}
              </h3>
            </div>

            <div className="field">
              <p>Passenger & Class</p>
              <h3>{passenger}</h3>
            </div>

            <button
              className="search-btn"
              onClick={() => alert(`Searching flights from ${from} to ${to}`)}
            >
              Search Flights
            </button>
          </div>

          {/* SPECIAL FARES */}
          <div className="special-fares">
            <span>Special Fares (optional)</span>

            <div
              className={`fare ${fare === "armed" ? "active" : ""}`}
              onClick={() => setFare("armed")}
            >
              Armed Forces <small>Up to ₹600 off</small>
            </div>

            <div
              className={`fare ${fare === "student" ? "active" : ""}`}
              onClick={() => setFare("student")}
            >
              Student <small>Extra Baggage</small>
            </div>

            <div
              className={`fare ${fare === "senior" ? "active" : ""}`}
              onClick={() => setFare("senior")}
            >
              Senior Citizen <small>Up to ₹600 off</small>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Bank Accounts =================== */}
      <div className="upi-container">
        {/* LEFT CONTENT */}
        <div className="upi-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"
            alt="Paytm UPI"
            className="upi-logo"
          />

          <h1>
            Pay anyone directly <br />
            from your <span>bank account</span>
          </h1>

          <p>
            Pay anyone, everywhere. Make contactless & secure payments in-stores
            or online using Paytm UPI or directly from your Bank Account. Plus,
            send & receive money from anyone.
          </p>

          <div className="store-buttons">
            <button className="store-btn">
              <FaApple /> App Store
            </button>
            <button className="store-btn">
              <FaGooglePlay /> Google Play
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="upi-right">
          <div className={`payment-card ${status ? "success" : ""}`}>
            <div className="amount">₹{amount}</div>

            {status ? (
              <>
                <p className="paid">Paid Successfully ✔</p>
                <p className="to">To {receiver}</p>
              </>
            ) : (
              <>
                <p className="paid pending">Ready to Pay</p>
                <button className="pay-btn" onClick={handlePay}>
                  Pay Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
