import styled from "styled-components";

export const SideColumnStyles = styled.div`
  flex: 3;
  height: fit-content;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sideColumnItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sideColumnTitle {
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: solid 1px #a7a4a4;
    border-bottom: solid 1px #a7a4a4;
    text-align: center;
    font-family: "Varela Round", sans-serif;
    font-size: 12px;
    line-height: 19px;
    color: #222222;
    font-weight: 600;
  }

  .sideColumnItem > img {
    margin-top: 15px;
    width: 300px;
    height: 400;
    object-fit: cover;
  }

  .sideColumnItem > p {
    padding: 30px;
  }

  .sideColumnList {
    list-style: none;
    margin-bottom: 30px;
  }

  .sideColumnListItem {
    display: inline-block;
    width: 50%;
    margin-top: 15px;
    cursor: pointer;
  }

  .sideColumnSocial {
    margin-top: 15px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sideColumnIcon {
    font-style: 16px;
    margin-left: 10px;
    cursor: pointer;
  }
`;
