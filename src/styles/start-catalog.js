import styled from 'styled-components'
const css = {

  Catalog: styled.section`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 900px;
    height: auto;
    min-height: 200px;
    border-radius: 12px;
    box-shadow: 10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%);
    background-color: white;
    margin-bottom: 14px;
    overflow: hidden;
  `,
  CatalogMenu: styled.div`
    display: block;
    width: 34%;
    height: auto;
    padding-top: 26px;
    padding-bottom: 40px;
    padding-left: 10px;
  `,
  CatalogMenuItem: styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 14px;
    line-height: 48px;
    padding-left: 16px;
    color: #2E2E2E;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    cursor: pointer;
    font-weight: 600;
  `,
  CatalogContent: styled.div`
    display: block;
    width: 66%;
    height: auto;
    min-height: 520px;
    background-color: #F7F7F7;
    padding: 24px;
  `,
  CatalogContentTags: styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-between;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 11px;
  `,
  Tag: styled.span`
    display: block;
    background-color: white;
    font-size: 13px;
    text-align: center;
    border-radius: 12px;
    color: grey;
    box-shadow: 0px 0px 2px grey;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 12px;
    padding-bottom: 14px;
    padding-left: 16px;
    padding-right: 16px;
    cursor: pointer;
  `,
  Close: styled.span`
    display: block;
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    top: 0;
    left: 100%;
    margin-top: 12px;
    margin-left: -40px;
    z-index: 10;
    cursor: pointer;
  `

}

export default css