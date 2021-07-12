import styled from "styled-components";

export const RegisterPageStyles = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;

  .registerTitle {
    font-size: 50px;
  }

  .registerForm {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    > label {
      margin: 10px 0;
    }
  }

  .registerInput {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 10px;

    :focus {
      outline: none;
    }
  }
  .registerButton {
    margin-top: 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
  }

  .registerLoginButton {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
  }
`;
