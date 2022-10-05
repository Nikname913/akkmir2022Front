import styled from 'styled-components'
const css = {

  HeaderStyles: {
    Wrapper: styled.section`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      max-width: 420px;
      height: auto;
      min-height: 40px;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      padding-top: 12px;
      padding-bottom: 12px;
      background-color: #565656;
    `,
    ContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: ${ props => props.width }px;
      height: auto;
      padding-left: 12px;
      padding-right: 12px;
      box-sizing: border-box;
    `,
  },
  ScreenStyles: {
    Wrapper: styled.section`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      background-color: #F7F7F7;
      width: 100%;
      max-width: 420px;
      height: auto;
      min-height: 60px;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    `,
    ContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: ${ props => props.width }px;
      height: auto;
      min-height: 40px;
      padding-left: 12px;
      padding-right: 12px;
      box-sizing: border-box;
    `,
    UpMenuBlock: styled.span`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: relative;
      width: ${ props => props.width / 2 - 12 }px;
      height: 80px;
      background-color: white;
      border-radius: 8px;
      box-sizing: border-box;
      padding: 10px;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);    `,
    DiliveryBanner: styled.div`
      display: block;
      position: relative;
      box-sizing: border-box;
      width: ${ props => props.width - 24 }px;
      height: auto;
      min-height: 40px;
      border-radius: 8px;
      padding: 12px;
      padding-left: 14px;
      background-color: #565656;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    `,
    SelectAkkum: styled.span`
      display: block;
      position: relative;
      width: ${ props => props.width - 24 }px;
      height: auto;
      min-height: 40px;
      border-radius: 8px;
      padding: 16px;
      background-color: white;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    `,
    LogoBlock: styled.span`
      display: block;
      position: relative;
      height: auto;
      border-radius: 8px;
      margin-right: 12px;
      background-color: white;
      font-size: 13px;
      padding: 10px 12px;
      cursor: pointer;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    `,
    CatalogTagBlock: styled.span`
      display: block;
      position: relative;
      box-sizing: border-box;
      height: 38px;
      line-height: 36px;
      border-radius: 12px;
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: white;
      font-size: 12px;
      border: 1px solid #D3D3D3;
      color: grey;
      cursor: pointer;
      padding: 0px 12px;
      text-align: center;
      font-weight: 600;
    `,
    CatalogMenu: styled.div`
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-between;
      flex-wrap: wrap;
      width: ${ props => props.width - 24 }px;
      height: auto;
      min-height: 40px;
      margin-top: 16px;
      margin-bottom: 0px;
      padding-left: 14px;
      padding-right: 14px;
    `,
    CatalogMenuItem: styled.span`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      position: relative;
      width: ${ props => (( props.width - 24 ) / 4 ) - 14 }px;
      height: ${ props => (( props.width - 24 ) / 4 ) - 14 }px;
      margin-bottom: 52px;
      box-shadow: 22px 53px 23px rgb(163 163 163 / 3%), 12px 30px 19px rgb(163 163 163 / 9%), 5px 13px 14px rgb(163 163 163 / 15%), 1px 3px 8px rgb(163 163 163 / 18%), 0px 0px 0px rgb(163 163 163 / 18%);
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    `,
    PopularScrollWrapper: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      height: auto;
      min-height: 60px;
      overflow-x: scroll;
    `,
    ProductCard: {
      ProductPhoto: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        position: relative;
        width: 100%;
        height: auto;
        padding-top: 12px;
        padding-bottom: 12px;
        min-height: 60px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
      `,
      OrderWrapper: styled.div`
        display: block;
        position: relative;
        width: 100%;
        height: auto;
        min-height: 40px;
        border-radius: 8px;
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: white;
        box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
      `,
      OrderWrapperContentLine: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 100%;
        height: auto;
      `,
      TradeInBlock: styled.div`
        display: block;
        position: relative;
        width: 100%;
        height: auto;
        min-height: 40px;
        background-color: #E5E5E5;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 12px;
        padding-right: 12px;
      `
    },
    CatalogPage: {
      CatalogItem: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        margin-bottom: ${props => props.marginBottom}px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
        cursor: pointer;
        padding: 10px;
        padding-bottom: 12px;
      `,
      CatalogLastItem: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        margin-bottom: ${props => props.marginBottom}px;
        border-radius: 10px;
        background-color: #565656;
        cursor: pointer;
        padding: 10px;
        padding-bottom: 12px;
      `
    },
    OrderPage: {
      OrdersWrapper: styled.div`
        display: block;
        position: relative;
        width: 100%;
        height: auto;
        min-height: 40px;
        background-color: white;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.11);
        border-radius: 10px;
        padding-top: 18px;
        padding-bottom: 8px;
      `,
      OrdersWrapperContentLine: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 100%;
        padding-left: 10px;
        margin-bottom: 10px;
      `,
      OrderIndex: styled.span`
        display: block;
        position: relative;
        width: 24px;
        height: 24px;
        background-color: #F7F7F7;
        color: #565656;
        border-radius: 50%;
        font-size: 11px;
        text-align: center;
        line-height: 24px;
        margin-right: 8px;
        font-weight: bold;
      `,
      OrderCoastBlock: styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: relative;
        width: 80px;
        height: auto;
        margin-left: 12px;
      `
    },
    MakeOrderPage: {
      LoginForm: styled.div`
        display: block;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        min-height: 30px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.11);
        padding: 18px;
      `,
      LoginFormContentLine: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: auto;
      `
    }
  },
  FooterStyles: {
    Wrapper: styled.section`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      max-width: 420px;
      height: auto;
      min-height: 40px;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      padding-top: 12px;
      padding-bottom: 60px;
      background-color: #565656;
    `,
    ContentColumn: styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
      width: 50%;
      height: auto;
      padding-left: 12px;
      padding-right: 12px;
      box-sizing: border-box;
    `,
  },
  MenuStyles: {
    Wrapper: styled.section`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      position: fixed;
      width: 100%;
      max-width: 420px;
      height: 66px;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      top: 100%;
      margin-top: -56px;
      padding-left: 12px;
      padding-right: 12px;
      background-color: white;
      box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
    `,
    MenuItem: styled.span`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      box-sizing: border-box;
      position: relative;
      width: ${ props => ( props.width - 24 ) / 6 }px;
      height: 52px;
      border-radius: 4px;
      padding-bottom: 6px;
      cursor: pointer;
    `
  },
  CardPreview: {
    Wrapper: styled.div`
      display: block;
      position: relative;
      box-sizing: border-box;
      width: ${props => props.width ? props.width : 140}px;
      height: auto;
      min-height: 40px;
      border-radius: 4px;
      margin-right: 20px;
      margin-bottom: 18px;
    `,
    ImageBlock: styled.div`
      display: block;
      position: relative;
      width: 100%;
      height: auto;
      min-height: 40px;
      background-color: white;
      border-radius: 8px;
      padding: 12px;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    `
  },
  AdressCard: {
    Wrapper: styled.div`
      display: block;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: auto;
      min-height: 40px;
      border-radius: 8px;
      margin-right: 14px;
      margin-bottom: ${ props => props.marbo ? props.marbo : 12 }px;
      padding-left: 15px;
      padding-bottom: 14px;
      background-color: white;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    `,
    ContentLine: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      height: auto;
      box-sizing: border-box;
    `,
  },
  AboutCard: {
    Wrapper: styled.div`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      min-height: 40px;
      border-radius: 8px;
      padding: 12px;
      padding-left: 14px;
      padding-right: 14px;
      background-color: white;
      box-shadow: 22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18);
    `,
    ContentColumn: styled.div`
      display: block;
      position: relative;
      width: 50%;
      height: auto;
      box-sizing: border-box;
    `,
  }

}

export default css