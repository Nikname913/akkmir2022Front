import styled from 'styled-components'
const css = {

  Card: styled.div`
    display: block;
    position: relative;
    width: calc(25% - 10px);
    height: 606px;
    border-radius: 4px;
    box-shadow: 22px 53px 23px rgb(163 163 163 / 3%), 12px 30px 19px rgb(163 163 163 / 9%), 5px 13px 14px rgb(163 163 163 / 15%), 1px 3px 8px rgb(163 163 163 / 18%), 0px 0px 0px rgb(163 163 163 / 18%);
    padding: 14px;
    margin-bottom: 12px;
    background-color: white;
  `,
  CardTags: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    width: 100%;
    height: auto;
  `

}

export default css