/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

function Greeting() {

  const [width, setWidth] = useState(window.screen.width);
  const updateWidthAndHeight = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    console.log(width)
  },[width])

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  return (
    <div css={GreetingStyle(width)}>
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

const GreetingCommonStyle = css`
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

const GreetingStyle = (width) => {
  if (width > 500)return css`
    {CommonStyle}
    width: 500px;
  `;
  else return css`
    {CommonStyle}
    width: 70%;
    max-width: 300px;
  `;
} 
