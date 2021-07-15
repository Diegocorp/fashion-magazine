import React from "react";
import SideColumn from "../../Components/SideColumn";
import { SettingsPageStyles } from "./SettingsElements";

export default function SettingsPage() {
  return (
    <SettingsPageStyles>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img
              src="https://i.imgur.com/uNDnfqi.jpg"
              alt=""
              className="settingsProfilePictureImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePictureIcon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Diego" />
          <label>Email</label>
          <input type="text" placeholder="diego@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideColumn />
    </SettingsPageStyles>
  );
}
