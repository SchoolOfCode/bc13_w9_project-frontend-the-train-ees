import "./index.css";
import Button from "../button";
import DiscoverCard from "../discoverCard";
import { useState } from "react";
import React from "react";
import env from "react-dotenv";

export default function DiscoverPage({ handleClick }) {
  const [cards, setCards] = useState([{}]);
  const [userData, setUserData] = useState(null);

  // function gets card(s) from backend and updates card state
  async function getCards(input) {
    let response = await fetch(`${env.URL}/api/cards?name=${input}`, {
      method: "GET",
    });
    let data = await response.json();

    if (data.payload.length === 0) {
      setCards([{}]);
    } else {
      setCards(data.payload);
    }
  }

  async function handleKeyDown(e) {
    // enter pressed on input
    if (e.key !== "Enter") {
      return;
    }
    let input = e.target.value;
    if (input === "" || input === " ") {
      setCards([{}]);
      return;
    }
    await getCards(input);
  }

  async function pressLogIn() {
    if (userData === null) {
      const emailInput = prompt("Enter your email");
      let response = await fetch(`${env.URL}/api/cards/?email=${emailInput}`, {
        method: "GET",
        headers: {},
      });
      let data = await response.json();
      if (data.payload === undefined) {
        alert("This email doesn't have a card");
      } else {
        let correctPass = data.payload.password;
        let logInData = await data.payload;
        const guessPass = prompt("Enter your password");
        if (correctPass === guessPass) {
          setUserData(logInData);
        } else {
          alert("Wrong password");
        }
      }
    } else {
      setUserData(null);
    }
  }

  async function deleteUser() {
    // make fetch request to delete using id
    let response = await fetch(`${env.URL}/api/cards/${userData.card_id}`, {
      method: "DELETE",
      headers: {},
    });
    let data = await response.json();
    // reset userData to null
    setUserData(null);
    return data;
  }

  // shows default card if user hasn't searched for anything
  if (userData === null) {
    return (
      <div className="discoverPage">
        <div className="discoverBody">
          <div className="discoverTitle">
            <h1>Discover Cards</h1>
          </div>
          <div className="discoverTitle2">
            <h2>Network with your peers!</h2>
          </div>
          <div className="discoverBodyText">
            <p>Create a card so fellow bootcampers can find you.</p>
            <p>Search for a bootcamper and connect with them.</p>
          </div>
          <div className="searchInput">
            <input
              type="text"
              className="inputSearch white-grad"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search By Name"
              onKeyDown={async (e) => {
                await handleKeyDown(e);
              }}
            />
          </div>
        </div>
        <div className="cardDisplay">
          <div className="createBtn">
            <Button handleClick={handleClick} buttonText={"+ New Card"} />
            <Button handleClick={pressLogIn} buttonText={"Log In and Edit"} />
          </div>
          <div className="discoverCardContainer">
            {cards.map((card, i) => (
              <DiscoverCard key={i} info={card} />
            ))}
          </div>
        </div>
        <div className="whiteBg"></div>
        {/* <footer className='space'></footer> */}
      </div>
    );
  } else {
    // shows the search results if the use has searched for something
    return (
      <div className="discoverPage">
        <div className="discoverBody">
          <div className="discoverTitle">
            <h1>Discover Cards</h1>
          </div>
          <div className="discoverTitle2">
            <h2>Network with your peers!</h2>
          </div>
          <div className="discoverBodyText">
            <p>Create a card so fellow bootcampers can find you.</p>
            <p>Search for a bootcamper and connect with them.</p>
          </div>
          <div className="searchInput">
            <input
              type="text"
              className="inputSearch white-grad"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search By Name"
              onKeyDown={async (e) => {
                await handleKeyDown(e);
              }}
            />
          </div>
          <div className="loggedInUser">
            <DiscoverCard key={1000} info={userData} />
            <Button handleClick={deleteUser} buttonText={"Delete your card"} />
          </div>
          {/* <div className="updateButton">
            <Button handleClick={deleteUser} buttonText={"Delete your card"} />
          </div> */}
        </div>

        <div className="cardDisplay">
          <div className="createBtn">
            <Button handleClick={handleClick} buttonText={"+ New Card"} />
            <Button handleClick={pressLogIn} buttonText={"Log Out"} />
          </div>
          <div className="discoverCardContainer">
            {cards.map((card, i) => (
              <DiscoverCard key={i} info={card} />
            ))}
          </div>
        </div>
        <div className="whiteBg"></div>
      </div>
    );
  }
}
