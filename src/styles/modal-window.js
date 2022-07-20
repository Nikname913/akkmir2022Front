import styled from 'styled-components'
const css = {

  Shadow: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #383838e8;
    box-sizing: border-box;
    transition: all 400ms;
  `,
  ShadowClose: styled.span`
    dislay: block;
    position: absolute;
    width: 30px;
    height: 30px;
    left: 100%;
    margin-left: -46px;
    top: 0;
    margin-top: 16px;
    cursor: pointer;
  `

}

export default css