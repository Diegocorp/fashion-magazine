import styled from "styled-components";

export const SinglePostStyles = styled.div`
  flex: 9;

  .singlePostWrapper {
    padding: 20px;
    padding-right: 0;
  }

  .singlePostImg {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }

  .singlePostTitle {
    margin: 10px;
    text-align: center;
    font-family: "Lora", serif;
    font-size: 28;
  }

  .singlePostEdit {
    float: right;
    font-size: 16px;
  }

  .singlePostIcon {
    margin-left: 10px;
    cursor: pointer;
  }

  .singlePostInfo {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #b39656;
    font-family: "Varela Round", sans-serif;
  }

  .singlePostDescription {
    color: #666;
    font-size: 18px;
    line-height: 25px;
  }

  .singlePostDescription::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;
