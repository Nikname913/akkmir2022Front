import styled from 'styled-components'
const css = {

  SelectTable: styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    min-height: 200px;
    border-radius: 6px;
    background-color: white;
    box-shadow: 22px 53px 23px rgb(163 163 163 / 3%), 12px 30px 19px rgb(163 163 163 / 9%), 5px 13px 14px rgb(163 163 163 / 15%), 1px 3px 8px rgb(163 163 163 / 18%), 0px 0px 0px rgb(163 163 163 / 18%);
    padding: 20px;
  `,
  SelectTableContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: auto;
  `,
  CarCard: styled.div`
    display: block;
    position: relative;
    width: 12%;
    height: auto;
    cursor: pointer;
  `,
  AlphabetLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    height: auto;
    background-color: #F4F4F4;
    border-radius: 26px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 14px;
  `,
  SelectLang: styled.div`
    display: block;
    position: relative;
    height: auto;
    background-color: #E5E5E5;
    border-radius: 26px;
    padding-left: 10px;
    padding-right: 10px;
  `,
  ContentColumn: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    width: 20%;
    height: auto;
  `

}

export default css