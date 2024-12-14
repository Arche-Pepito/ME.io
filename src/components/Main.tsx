import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFrqC5EP0NerA/profile-displayphoto-shrink_800_800/B56ZPC5TZtG8Ac-/0/1734141622371?e=1739404800&v=beta&t=15eFARTcLj7K0zvUysKNMJkHq7fhs2L-TC4OCX0zNHQ" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in//" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Arche Pepito</h1>
          <p>Frontend Developer | Network specialist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in//" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;