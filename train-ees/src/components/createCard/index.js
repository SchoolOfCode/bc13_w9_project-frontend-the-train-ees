import "./index.css";
import "./index.css";
import email from "../images/email.png";
import phone from "../images/phone.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
//import user from '../images/user.png'
import plus from "../images/plus icon.png";
import { useState } from "react";

export default function CreateCard(props) {
  const [image, setImage] = useState(plus);

  function handleClick() {
    let url = prompt("Enter url to Linkedin profile picture");
    if (url !== null || url === "" || url === " ") {
      setImage(url);
      props.imageChange(url);
    }
  }

  return (
    <div className="discoverCard">
      <div className="cardHeader">
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => {
            props.firstNameChange(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => {
            props.lastNameChange(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="profession"
          onChange={(e) => {
            props.professionChange(e.target.value);
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
                props.linkedinChange(e.target.value);
              }}
            />
          </div>

          <div className="github">
            <img src={github} alt="github" />
            <input
              type="text"
              placeholder="github"
              onChange={(e) => {
                props.githubChange(e.target.value);
              }}
            />
          </div>

          <div className="phone">
            <img src={phone} alt="phone" />
            <input
              type="text"
              placeholder="phone"
              onChange={(e) => {
                props.phoneChange(e.target.value);
              }}
            />
          </div>

          <div className="email">
            <img src={email} alt="email" />
            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                props.emailChange(e.target.value);
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
            props.passwordChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
