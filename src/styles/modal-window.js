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
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    left: 100%;
    margin-left: -46px;
    top: 0;
    margin-top: 16px;
    cursor: pointer;
  `,
  MessageWindow: styled.div`
    display: block;
    position: fixed;
    width: 450px;
    height: 280px;
    top: 50%;
    margin-top: -150px;
    left: ${props => props.left ? props.left : '50%'}; 
    margin-left: ${ props => props.mleft ? props.mleft : '-225px' };
    background-color: white;
    border-radius: 12px;
    padding: 24px;
    padding-top: 30px;
    cursor: pointer;
    z-index: 20;
    box-shadow: 10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%);
  `,
  MessageWindowImg: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #2BC631;
    margin: 0 auto;
  `

}

export default css