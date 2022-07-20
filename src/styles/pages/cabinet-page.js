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
  CabinetMenu: styled.div`
    display: block;
    position: relative;
    width: 24%;
    height: auto;
    min-height: 340px;
    border-radius: 4px;
  `,
  CabinetMenuItem: styled.span`
    display: block;
    position: relative;
    width: 80%;
    height: auto;
    line-height: 20px;
    font-size: 13px;
    border-radius: 4px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 15px;
    color: #565656;
    cursor: pointer;
  `,
  CabinetContent: styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 76%;
    height: auto;
    min-height: 340px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    padding: 30px;
  `,
  CabinetContentInfo: {
    LeftBlock: styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 50%;
      height: auto;
    `,
    RightBlock: styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 50%;
      height: auto;
    `,
    RightBlockContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: auto;
    `,
    RightBlockAddCar: styled.span`
      display: block;
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 14px;
      background-color: grey;
      margin-top: 38px;
    `
  },
  CabinetContentOrders: {
    LeftBlock: styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      height: auto;
    `,
    LeftBlockContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: auto;
      margin-top: 36px;
      mrgin-bottom: 36px;
    `,
    LeftBlockContentLineCellOrder: styled.span`
      display: block;
      position: relative;
      width: 10%;
      height: auto;
      font-size: 13px;
      text-align: center;
    `,
    LeftBlockContentLineCellItem: styled.span`
      display: block;
      position: relative;
      width: 30%;
      height: auto;
      font-size: 13px;
      font-weight: bold;
    `,
    LeftBlockContentLineCellDate: styled.span`
      display: block;
      position: relative;
      width: 15%;
      height: auto;
      font-size: 13px;
      text-align: center;
    `,
    LeftBlockContentLineCellStatus: styled.span`
      display: block;
      position: relative;
      width: 20%;
      height: auto;
      font-size: 13px;
    `,
    LeftBlockContentLineCellCount: styled.span`
      display: block;
      position: relative;
      width: 10%;
      height: auto;
      font-size: 13px;
      text-align: center;
    `,
    LeftBlockContentLineCellSumm: styled.span`
      display: block;
      position: relative;
      width: 15%;
      height: auto;
      font-size: 13px;
      text-align: center;
    `
  },
  CabinetContentBonuces: {
    LeftBlock: styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      height: auto;
    `,
    BonusBlock: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
      width: 300px;
      height: 100px;
      margin-top: 18px;
    `
  },
  CabinetContentServices: {
    LeftBlock: styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      height: auto;
    `,
    LeftBlockContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: auto;
      margin-top: 20px;
      mrgin-bottom: 20px;
    `,
    LeftBlockContentLineCellDateService: styled.span`
      display: block;
      position: relative;
      width: 15%;
      height: auto;
      font-size: 13px;
      text-align: center;
    `,
    LeftBlockContentLineCellWorks: styled.span`
      display: block;
      position: relative;
      width: 25%;
      height: auto;
      font-size: 13px;
    `,
    LeftBlockContentLineCellSummService: styled.span`
      display: block;
      position: relative;
      width: 15%;
      height: auto;
      font-size: 13px;
      text-align: center;
    `,
    LeftBlockContentLineCellAdress: styled.span`
      display: block;
      position: relative;
      width: 20%;
      height: auto;
      font-size: 13px;
    `,
    LeftBlockContentLineCellOrderDocument: styled.span`
      display: block;
      position: relative;
      width: 10%;
      height: auto;
      font-size: 13px;
      text-align: center;
    `,
    LeftBlockContentLineCellButton: styled.span`
      display: block;
      position: relative;
      width: 15%;
      height: auto;
      font-size: 13px;
      text-align: center;
      border-radius: 12px;
    `
  }

}

export default css