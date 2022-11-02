import styled from 'styled-components'
const css = {

  CardWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    min-height: 200px;
    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    border-radius: 6px;
    padding: 34px;
    background-color: white;
  `,
  CardWrapperUpLevel: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
  `,
  ItemPhoto: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 10px 18px 8px rgba(163, 163, 163, 0.02), 6px 10px 7px rgba(163, 163, 163, 0.07), 2px 4px 5px rgba(163, 163, 163, 0.11), 1px 1px 3px rgba(163, 163, 163, 0.13), 0px 0px 0px rgba(163, 163, 163, 0.13);
    box-sizing: border-box;
  `,
  ItemPhotoGallery: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    width: 400px;
    height: auto;
    top: 100%;
    left: 0;
    margin-top: 10px;
    box-sizing: border-box;
  `,
  ItemPhotoGalleryItem: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 70px;
    height: 70px;
    border-radius: 4px;
    box-shadow: 10px 18px 8px rgba(163, 163, 163, 0.02), 6px 10px 7px rgba(163, 163, 163, 0.07), 2px 4px 5px rgba(163, 163, 163, 0.11), 1px 1px 3px rgba(163, 163, 163, 0.13), 0px 0px 0px rgba(163, 163, 163, 0.13);
    box-sizing: border-box;
    margin-right: 10px;
  `,
  ItemDescription: styled.div`
    display: block;
    width: calc(100% - 780px);
    height: auto;
    padding-left: 24px;
  `,
  ItemDescriptionLine: styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
  `,
  OrderForm: styled.div`
    display: block;
    width: 328px;
    height: auto;
    min-height: 100px;
    box-shadow: 10px 18px 8px rgba(163, 163, 163, 0.02), 6px 10px 7px rgba(163, 163, 163, 0.07), 2px 4px 5px rgba(163, 163, 163, 0.11), 1px 1px 3px rgba(163, 163, 163, 0.13), 0px 0px 0px rgba(163, 163, 163, 0.13);
    margin-left: 24px;
    padding: 20px;
    border-radius: 4px;
    overflow: hidden;
  `,
  CardWrapperMiddleLevel: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-top: 32px;
  `,
  CardWrapperDowmMiddleLevel: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-top: 32px;
  `,
  CardInfo: {
    AdressBlock: styled.div`
      display: block;
      position: relative;
      width: 50%;
      height: auto;
      min-height: 200px;
    `,
    AdressBlockContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: auto;
      margin-bottom: 23px;
    `,
    AdressBlockContentCell1: styled.span`
      display: block;
      position: relative;
      width: 35%;
      height: auto;
    `,
    AdressBlockContentCell2: styled.span`
      display: block;
      position: relative;
      width: 15%;
      height: auto;
    `,
    AdressBlockContentCell3: styled.span`
      display: block;
      position: relative;
      width: 25%;
      height: auto;
    `,
    AdressBlockContentCell4: styled.span`
      display: block;
      position: relative;
      width: 25%;
      height: auto;
    `,
    Cell4Button: styled.span`
      display: block;
      position: relative;
      width: 50px;
      height: 40px;
      border-radius: 10px;
      border: 1px solid grey;
      cursor: pointer;
    `,
    MapBlock: styled.div`
      display: block;
      position: relative;
      width: 50%;
      height: 470px;
      overflow: hidden;
      border-radius: 4px;
    `
  }

}

export default css