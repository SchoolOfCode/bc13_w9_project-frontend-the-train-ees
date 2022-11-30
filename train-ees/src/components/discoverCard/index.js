import "./index.css";

// import symbols for card
import email from "../images/email.png";
import phone from "../images/phone.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import user from "../images/user.png";

export default function DiscoverCard({ info }) {
  if (Object.keys(info).length === 0) {
    // display default
    return (
      <div className="discoverCard">
        <div className="cardHeader">
          <h1>
            first name <strong>last name</strong>
          </h1>
          <p>profession</p>
        </div>
        <div className="cardBody">
          <div className="mediaItems">
            <div className="linkedin">
              <img src={linkedin} alt="linkedin" />
              <h2>linkedin username</h2>
            </div>
            <div className="github">
              <img src={github} alt="github" />
              <h2>github handle</h2>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" />
              <h2>phone number</h2>
            </div>
            <div className="email">
              <img src={email} alt="email" />
              <h2>email address</h2>
            </div>
          </div>
          <div className="profilePicture">
            <img src={user} alt="profile pic" />
          </div>
        </div>
      </div>
    );
  } else {
    // checks if the cards has a profile image, if doesnt, show default grey person
    if (info.image === null || info.image.length <= 0) {
      info.image = user;
    }

    // shows card with the info (passes in from prop)
    return (
      <div className="discoverCard">
        <div className="cardHeader">
          <h1>
            {info.first_name} <strong>{info.last_name}</strong>
          </h1>
          <p>{info.profession}</p>
        </div>
        <div className="cardBody">
          <div className="mediaItems">
            <div className="linkedin">
              <img src={linkedin} alt="linkedin" />
              <a
                href={`https://www.linkedin.com/in/${info.linkedin_username}/`}
                target="_blank"
              >
                {info.linkedin_username}
              </a>
            </div>
            <div className="github">
              <img src={github} alt="github" />
              <a
                href={`https://github.com/${info.github_username}/`}
                target="_blank"
              >
                {info.github_username}
              </a>
            </div>
            <div className="phone">
              <img src={phone} alt="phone" />
              <h2>{info.phone}</h2>
            </div>
            <div className="email">
              <img src={email} alt="email" />
              <h2>{info.email}</h2>
            </div>
          </div>
          <div className="profilePicture">
            <img src={info.image} alt="profile pic" />
          </div>
        </div>
      </div>
    );
  }
}
