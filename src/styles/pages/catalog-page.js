import styled from 'styled-components'
const css = {

  Main: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1950px;
    min-width: 1450px;
    height: auto;
    min-height: 100px;
    background-color: #F7F7F7;
    box-sizing: border-box;
    padding-left: 90px;
    padding-right: 90px;
  `,
  MainContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  `,
  PodborWindow: styled.div`
    display: block;
    position: relative;
    width: ${ props => props.width ? props.width : 'auto' };
    height: auto;
    min-height: 100px;
    background-color: white;
    border-radius: 8px;
    padding: 18px;
    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
  `,
  PodborWindowContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 14px;
  `

}

export default css