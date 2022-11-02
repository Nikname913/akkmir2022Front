/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import css from '../styles/pages/main-page'
import acciiOne from '../img/promo/acciiOne.png'
import acciiTwo from '../img/promo/acciiTwo.png'

const { MainContentLineBanner } = css
const Comps = {

  ContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: auto;
  `,
  ContentLineHeadline: styled.h2`
    display: block;
    position: relative;
    font-size: 40px;
    line-height: 52px;
  `

}

const MAPAAX = () => {

  return (
    <React.Fragment>
      <MainContentLineBanner 
        style={{ 
          height: '420px',
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          background: 'radial-gradient(272.4% 281.33% at -175.5% 5.18%, #FEF403 0%, #FFFFFF 100%)',
          boxShadow: '0px 442px 124px rgba(163, 163, 163, 0.03), 0px 159px 96px rgba(163, 163, 163, 0.02), 0px 71px 71px rgba(163, 163, 163, 0.03), 0px 18px 39px rgba(163, 163, 163, 0.03), 0px 0px 0px rgba(163, 163, 163, 0.03)' 
        }}
      ></MainContentLineBanner>
      <MainContentLineBanner 
        style={{ 
          height: '420px',
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          justifyContent: 'flex-start', 
          paddingLeft: '26px',
          background: 'radial-gradient(117.28% 117.28% at 95.5% -2.03%, #D62E2B 0%, #AE1179 100%)',
          boxShadow: '0px 442px 124px rgba(163, 163, 163, 0.03), 0px 159px 96px rgba(163, 163, 163, 0.02), 0px 71px 71px rgba(163, 163, 163, 0.03), 0px 18px 39px rgba(163, 163, 163, 0.03), 0px 0px 0px rgba(163, 163, 163, 0.03)' 
        }}
      ></MainContentLineBanner>
      <MainContentLineBanner 
        style={{ 
          height: '420px',
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          background: 'radial-gradient(120.53% 120.53% at -16.07% -12.7%, #321B73 0%, #151515 100%)',
          boxShadow: '0px 442px 124px rgba(163, 163, 163, 0.03), 0px 159px 96px rgba(163, 163, 163, 0.02), 0px 71px 71px rgba(163, 163, 163, 0.03), 0px 18px 39px rgba(163, 163, 163, 0.03), 0px 0px 0px rgba(163, 163, 163, 0.03)' 
        }}
      >

        <Comps.ContentLine></Comps.ContentLine>
        <Comps.ContentLine></Comps.ContentLine>
        <Comps.ContentLine></Comps.ContentLine>

      </MainContentLineBanner>
    </React.Fragment>
  )

}

export default MAPAAX