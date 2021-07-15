import React from "react";
import { WritePageStyles } from "./WritePageElements";

export default function WritePage() {
  return (
    <WritePageStyles>
      <img src="https://i.imgur.com/vIW0Vpw.jpg" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeText writeInput"
            typeof="text"
            placeholder="Write your articule..."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </WritePageStyles>
  );
}
