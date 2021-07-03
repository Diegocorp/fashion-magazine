import styled from "styled-components";

export const HeaderStyles = styled.div`
  margin-top: 60px;

  .headerTitles {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Lora", serif;
    color: #444;
  }

  .headerTitleSmall {
    position: absolute;
    top: 15%;
    font-size: 30px;
  }

  .headerTitleLarge {
    position: absolute;
    top: 20.7%;
    font-size: 120px;
  }

  .headerImg {
    width: 100%;
    height: 800px;
    margin-top: 170px;
    object-fit: cover;
  }
`;
