/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";

function Greeting(props) {
  return (
    <div css={GreetingStyle}>
      <h1>The site is under construction</h1>
      <p>We will open soon as the Jinyoung Lee complete catalogue raisonné</p>
      <b>FOLLOW JINYOUNGLEE</b>
      <div css={ImageWrapper}>
        <a href='https://www.instagram.com/reallyyoung/'>
          <img
            src='https://media.news.heni.com/socials/instagram.png'
            target='_blank'
            width='50'
            height='50'></img>
        </a>
      </div>
    </div>
  );
}

export default Greeting;

const GreetingStyle = css`
  height: 100vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  h1 {
    font-weight: 700;
  }
  b {
    font-size: 13px;
  }
`;

const ImageWrapper = css`
  margin-top: 20px;
`;
