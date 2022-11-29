import "./index.css";
import "./index.css";
import email from "../images/email.png";
import phone from "../images/phone.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import plus from "../images/plus icon.png";
import { useState } from "react";

export default function CreateCard({cardInfoChange, cardInfo}) {
  const [image, setImage] = useState(plus);

  // shows prompt to input image url
  function handleClick() {
    let url = prompt("Enter url to Linkedin profile picture");
    if (url !== null || url === "" || url === " ") {
      setImage(url);
      cardInfo.image = url
      cardInfoChange(cardInfo)
    }
  }

  // displays card with inputs
  // so many divs to help with CSS layout
  return (
    <div className="discoverCard">
      <div className="cardHeader">
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => {
            cardInfoChange({...cardInfo, ...{first_name:e.target.value}})
          }}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => {
            cardInfo.last_name = e.target.value
            cardInfoChange(cardInfo)
          }}
        />
        <input
          type="text"
          placeholder="profession"
          onChange={(e) => {
            cardInfoChange({ ...cardInfo, ...{ profession: e.target.value } })
          }}
        />
      </div>

      <div className="cardBody">
        <div className="mediaItems">
          <div className="linkedin">
            <img src={linkedin} alt="linkedin" />
            <input
              type="text"
              placeholder="linkedin link"
              onChange={(e) => {
                cardInfo.linkedin_username = e.target.value
                cardInfoChange(cardInfo)
              }}
            />
          </div>

          <div className="github">
            <img src={github} alt="github" />
            <input
              type="text"
              placeholder="github"
              onChange={(e) => {
                cardInfoChange({ ...cardInfo, ...{ github_username: e.target.value } })
              }}
            />
          </div>

          <div className="phone">
            <img src={phone} alt="phone" />
            <input
              type="text"
              placeholder="phone"
              onChange={(e) => {
                cardInfo.phone = e.target.value
                cardInfoChange(cardInfo)
              }}
            />
          </div>

          <div className="email">
            <img src={email} alt="email" />
            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                cardInfoChange({ ...cardInfo, ...{ email: e.target.value } })
              }}
            />
          </div>
        </div>

        <div className="profilePicture">
          <img
            src={image}
            onClick={handleClick}
            alt="profile pic"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="enterPassword">
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            cardInfo.password = e.target.value
            cardInfoChange(cardInfo)
          }}
        />
      </div>
    </div>
  );
}
