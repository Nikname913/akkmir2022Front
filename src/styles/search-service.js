import styled from 'styled-components'
const css = {

  ResultsWindow: styled.article`
    display: flex;
    flex-direction: column;
    position: absolute;
    box-sizing: border-box;
    width: 600px;
    height: auto;
    min-height: 66px;
    background-color: white;
    border-radius: 12px;
    top: 0;
    margin-top: 52px;
    margin-left: 30px;
    padding: 12px;
    padding-bottom: 0px;
    z-index: 10;
    box-shadow: 10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%);
  `,
  ResultProductCard: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    min-height: 40px;
    background-color: #F7F7F7;
    border-radius: 12px;
    margin-bottom: 12px;
  `

}

export default css