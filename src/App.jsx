/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css, jsx } from "@emotion/react";
import Greeting from './components/Greeting'

function App() {

  return (
    <div className="App" css={AppStyle}>
          <Greeting />
    </div>
  )
}

export default App

const AppStyle = css`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
