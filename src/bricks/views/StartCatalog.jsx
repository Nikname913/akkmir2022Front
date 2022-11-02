/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActualCategory } from '../../appStore/reducers/mainReducer'
import { useNavigate } from 'react-router-dom'
import { setDefault } from '../../appStore/reducers/desktopPaginationReducer'
import css from '../../styles/start-catalog'
import Button from '../comps/button/Button.jsx'
import closeImg from '../../img/closePicture.png'

import img1 from '../../img/selection/podborakkum.png'
import img2 from '../../img/selection/podbormaslo.png'
import img3 from '../../img/selection/podborzhidkost.png'
import img4 from '../../img/selection/podborelectro.png'
import img5 from '../../img/selection/podboribp.png'
import img6 from '../../img/selection/podbortools.png'

const Catalog = css.Catalog
const Menu = css.CatalogMenu
const MenuItem = css.CatalogMenuItem
const Content = css.CatalogContent
const ContentTags = css.CatalogContentTags
const Tag = css.Tag
const Close = css.Close

const StartCatalog = (props) => {

  const { type, action = null } = props
  const mainMenuRemote = useSelector(state => state.main.catalogMenuRemote)
  const [ selectedPrimenenieIndex, setSelectedPrimenenieIndex ] = useState(null)
  const [ selectedMarkaIndex, setSelectedMarkaIndex ] = useState(null)
  const [ selectedEmkostIndex, setSelectedEmkostIndex ] = useState(null)
  const [ selectedCategoryData, setSelectedCategoryData ] = useState(null)
  const [ selectedMenu, setSelectedMenu ] = useState(0)
  const [ menu, ] = useState([

    [ img1, 'Аккумуляторы' ],
    [ img2, 'Автомобильные масла' ],
    [ img3, 'Специальные жидкости' ],
    [ img4, 'Автоэлектроника, питание' ],
    [ img5, 'ИБП, стабилизаторы' ],
    [ img6, 'Инструменты' ],
    [ img3, 'Автокосметика и автохимия' ],
    [ img3, 'Автоаксессуары' ]

  ])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onClose() {

    action && action('page')

  }

  useEffect(() => {

    false && console.log('from start catalog')
    false && console.log(mainMenuRemote)

  },[])

  return (
    <React.Fragment>
      <Catalog
        style={ type === 'modal' ? {
          position: 'absolute',
          left: '0px',
          top: '0px',
          zIndex: '200',
          marginTop: '-32px',
          marginLeft: '-19px',
        } : null}
      >
        <Close onClick={onClose}>

          <img 
            alt={""}
            src={closeImg}
            style={{
              display: 'block',
              position: 'relative',
              width: '28px'
            }}
          />

        </Close>
        <Menu> 
        
          { menu.map((item, index) => {

            return (
              <MenuItem 
                onClick={() => index < 10 && setSelectedMenu(index)}
                style={ selectedMenu === index 
                  ? { backgroundColor: '#F7F7F7' }
                  : { backgroundColor: 'transparent' }}
              >

                <img
                  alt={item[1]}
                  src={item[0]}
                  style={{
                    display: 'block',
                    position: 'relative',
                    marginRight: '14px',
                    marginBottom: '2px'
                  }}
                />
                { item[1] }
              </MenuItem>
            )

          })}
          
        </Menu>

        <Content>

          <h5 style={{ fontSize: '18px', marginBottom: '20px'  }}>По применению:</h5>
          <ContentTags>

            { mainMenuRemote && JSON.parse(mainMenuRemote)[0].group.map((item, index) => {

              if ( selectedMenu === 0 ) {

                if ( item.id[0] === 'f863771b-8620-11e6-a171-14dae9fa0260' ||
                     item.id[0] === '61e30ada-8c87-11e6-963a-0015179b1da1' ||
                     item.id[0] === 'aeb1fa1e-8c7d-11e6-963a-0015179b1da1' ) {

                      return (
                        <React.Fragment key={index}>
                          <Tag 
                            onClick={() => {
                              setSelectedPrimenenieIndex(index)
                              setSelectedCategoryData({ id: item.id[0], label: item.name[0] })
                              dispatch(setActualCategory({ id: item.id[0], label: item.name[0] }))
                              onClose()
                              navigate(`../catalog/${item.name[0]}/20`)
                            }}
                            style={{
                              backgroundColor: selectedPrimenenieIndex === 10000 
                                ? 'rgb(43, 198, 49)'
                                : 'white',
                              color: selectedPrimenenieIndex === 10000 
                                ? 'white'
                                : 'grey'
                            }}>{ item.name[0] }</Tag>
                        </React.Fragment>
                      )

                    }

              } else if ( selectedMenu === 1 ) {

                if ( item.id[0] === '7f1bb41b-8c78-11e6-963a-0015179b1da1' ||
                     item.id[0] === 'bfc502aa-bb81-11e6-963a-0015179b1da1' ||
                     item.id[0] === '5a7f9ac4-8955-11e6-963a-0015179b1da1' ||
                     item.id[0] === '03cda08d-74c0-11ea-814a-00155d0bfb06' ||
                     item.id[0] === 'ae584e59-bb81-11e6-963a-0015179b1da1' ) {

                      return (
                        <React.Fragment key={index}>
                          <Tag 
                            onClick={() => {
                              setSelectedPrimenenieIndex(index)
                              setSelectedCategoryData({ id: item.id[0], label: item.name[0] })
                              dispatch(setActualCategory({ id: item.id[0], label: item.name[0] }))
                              onClose()
                              navigate(`../catalog/${item.name[0]}/20`)
                            }}
                            style={{
                              backgroundColor: selectedPrimenenieIndex === 10000
                                ? 'rgb(43, 198, 49)'
                                : 'white',
                              color: selectedPrimenenieIndex === 10000 
                                ? 'white'
                                : 'grey'
                            }}>{ item.name[0] }</Tag>
                        </React.Fragment>
                      )

                     }

              }

            })}

            <Tag style={{ opacity: '0.8', cursor: 'no-drop' }}>Список дополняется</Tag>

          </ContentTags>

          <h5 style={{ fontSize: '18px', marginBottom: '20px'  }}>По маркам:</h5>
          <ContentTags>

            <Tag style={{ opacity: '0.8', cursor: 'no-drop' }}>Список марок дополняется</Tag>

          </ContentTags>

          { selectedMenu === 0 && <React.Fragment>
            <h5 style={{ fontSize: '18px', marginBottom: '20px'  }}>По емкости:</h5>
            <ContentTags>

              <Tag style={{ opacity: '0.8', cursor: 'no-drop' }}>55 а*ч</Tag>
              <Tag style={{ opacity: '0.8', cursor: 'no-drop' }}>60 а*ч</Tag>
              <Tag style={{ opacity: '0.8', cursor: 'no-drop' }}>75 а*ч</Tag>
              <Tag style={{ opacity: '0.8', cursor: 'no-drop' }}>90 а*ч</Tag>
              <Tag style={{ opacity: '0.8', cursor: 'no-drop' }}>100 а*ч</Tag>

            </ContentTags>
          </React.Fragment> }
          
          <Button  
            params={{
              width: 180,
              height: 36,
              background: '#D62E2B'
            }}
            inner={"Подбор по автомобилям"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              marginRight: '24px',
              marginTop: '19px'
            }}
            action={() => {
              
              onClose()
              dispatch(setDefault())
              navigate(`/podbor-akkumulyatora`)

            }}
          />

        </Content>
      </Catalog>
    </React.Fragment>
  )

}

export default StartCatalog