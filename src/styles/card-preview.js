import styled from 'styled-components'
const css = {

  Card: styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    width: ${ props => props.styles.width }%;
    height: auto;
    min-height: 100px;
    border-radius: 4px;
    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    padding: 20px;
    margin-left: ${ props => props.styles.mleft }px;
    background-color: white;
  `,
  FakeImage: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: ${ props => props.styles.width - 40 }px;
    height: ${ props => props.styles.width - 40 }px;
    border-radius: 4px;
    margin-right: auto;
    margin-left: auto;
  `,
  CoastWrapper: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
  `,
  Labels: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    position: absolute;
    width: 150px;
    height: auto;
    left: 100%;
    top: 0;
    margin-left: -160px;
    margin-top: 10px;
  `

}

export default css