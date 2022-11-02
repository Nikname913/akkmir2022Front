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
  Model3D: styled.div`
    display: block;
    position: relative;
    height: auto;
    min-height: 400px;
    width: calc(33% - 20px);
    box-shadow: 10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%);
    border-radius: 12px;
    background-color: white;
  `,
  MainContentLineBanner: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    width: 32%;
    height: auto;
    min-height: 160px;
    background-color: #404040;
    border-radius: 12px;
    padding: 18px;
    padding-left: 20px;
  `,

}

export default css