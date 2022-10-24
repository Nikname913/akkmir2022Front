import styled from 'styled-components'
const css = {

  ResultsWindow: styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    width: 55%;
    height: auto;
    background-color: white;
    border-radius: 12px;
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
    border-radius: 12px;
  `

}

export default css