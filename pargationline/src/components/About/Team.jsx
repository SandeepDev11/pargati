import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";

function Team({ teamDetails }) {
  const { imgUrl, imgAlt, teamName, teamPosition, linkedinUrl } = teamDetails;
  return (
    <>
      <div className="teamInfo">
        <div className="teamInfo-Img">
          <img src={imgUrl} alt={imgAlt} />
        </div>
        <div className="teamInfo-content">
          <h4>{teamName}</h4>
          <h6>{teamPosition}</h6>
          <Link to={linkedinUrl}>
            <h4>
              <FaLinkedin />
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Team;
