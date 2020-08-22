import React from "react";

function Socials() {
  return (
    <div className="socials">
      <div className="socials__content">
        <div className="socialS__LU">
          <div className="socials__logo">Logo</div>
          <div className="socials__username">@username</div>
        </div>
        <div className="socials__followers">
          <div className="socials__followers--no">1987</div>
          <div className="socials__followers--text">follwers</div>
        </div>
        <div className="socials__change"><span>icon</span> Today </div>
      </div>
    </div>
  );
}

export default Socials;
