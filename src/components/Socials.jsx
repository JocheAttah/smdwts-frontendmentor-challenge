import React from "react";

function Socials() {
  return (
    <div className="socials">
      <div className="socials__box">
        <div className="socialS__user">
          <div className="socials__user--logo">Logo</div>
          <div className="socials__user--username">@username</div>
        </div>
        <div className="socials__follow">
          <div className="socials__followers--no">1987</div>
          <div className="socials__followers--text">followers</div>
        </div>
        <div className="socials__update"><span className="socials__update--icon">icon</span> 12 Today </div>
      </div>
    </div>
  );
}

export default Socials;
