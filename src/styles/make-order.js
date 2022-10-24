import styled from 'styled-components'
const css = {

  OrderWrapper: styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    width: 1300px;
    height: auto;
    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 34px;
    background-color: white;
  `,
  OrderWrapperForm: styled.div`
    display: block;
    width: 360px;
    height: auto;
  `,
  OrderWrapperData: styled.div`
    display: block;
    width: 940px;
    height: auto;
    min-height: 200px;
    margin-left: 40px;
  `,
  OrderWrapperDataTitleLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 24px;
  `,
  OrderItemsTable: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    min-height: 100px;
    box-shadow: 10px 18px 8px rgba(163, 163, 163, 0.02), 6px 10px 7px rgba(163, 163, 163, 0.07), 2px 4px 5px rgba(163, 163, 163, 0.11), 1px 1px 3px rgba(163, 163, 163, 0.13), 0px 0px 0px rgba(163, 163, 163, 0.13);
    border-radius: 4px;
    padding: 18px;
  `,
  Items: styled.div`
    display: block;
    width: 70%;
    height: auto;
  `,
  ItemOneLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
  `,
  ItemOneLineComps: {
    Icon: styled.span`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #F7F7F7;
      text-align: center;
      line-height: 27px;
      font-size: 12px;
      color: #2E2E2E;
      padding-top: 1px;
      font-weight: bold;
    `,
    ImageWrapper: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: realative;
      width: 80px;
      height: 80px;
      border-radius: 4px;
      background-color: #F7F7F7;
      margin-top: 8px;
      margin-bottom: 8px;
    `,
    Coast: styled.span`
      font-size: 22px;
      font-weight: 700;
      width: 60px;
      text-align: center;
    `,
    Counter: styled.span`
      display: block;
      position: relative;
      width: 44px;
      height: 44px;
      border-radius: 4px;
      box-shadow: 0px 0px 2px grey;
      background-color: #F7F7F7;
      line-height: 43px;
      text-align: center;
      font-size: 16px;
      padding-top: 1px;
      font-weight: bold;
    `
  },
  DiliveryCoast: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: auto;
    border-top: 2px solid #F7F7F7;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 8px;
    margin-top: 20px;
  `,
  OrderWrapperDataForm: styled.div`
    display: block;
    width: 30%;
    height: auto;
    min-height: 100px;
    border-left: 3px solid #F7F7F7;
    margin-left: 22px;
    margin-top: 6px;
    padding: 18px;
    padding-left: 20px;
  `,
  MapWrapper: styled.div`
    display: block;
    width: 100%;
    height: auto;
    min-height: 500px;
    box-shadow: 10px 18px 8px rgba(163, 163, 163, 0.02), 6px 10px 7px rgba(163, 163, 163, 0.07), 2px 4px 5px rgba(163, 163, 163, 0.11), 1px 1px 3px rgba(163, 163, 163, 0.13), 0px 0px 0px rgba(163, 163, 163, 0.13);
    border-radius: 4px;
    margin-top: 20px;
  `,

}

export default css