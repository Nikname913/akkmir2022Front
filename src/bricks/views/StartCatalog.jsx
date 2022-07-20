/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from "react-router-dom"
import css from '../../styles/start-catalog'
import Button from '../comps/button/Button.jsx'
import closeImg from '../../img/closePicture.png'

const Catalog = css.Catalog
const Menu = css.CatalogMenu
const MenuItem = css.CatalogMenuItem
const Content = css.CatalogContent
const ContentTags = css.CatalogContentTags
const Tag = css.Tag
const Close = css.Close

const StartCatalog = (props) => {

  const { type, action = null } = props

  function onClose() {

    action && action('page')

  }

  return (
    <React.Fragment>
      <Catalog
        style={ type === 'modal' ? {
          position: 'fixed',
          left: '0px',
          top: '0px',
          zIndex: '30',
          marginTop: '20px',
          marginLeft: '20px'
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
          <MenuItem style={{ backgroundColor: '#F7F7F7' }}>Аккумуляторы</MenuItem>
          <MenuItem>Масла</MenuItem>
          <MenuItem>Специальные жидкости</MenuItem>
          <MenuItem>Автоэлектроника, питание</MenuItem>
          <MenuItem>ИБП, стабилизаторы</MenuItem>
          <MenuItem>Инструменты</MenuItem>
          <MenuItem>Автокосметика и автохимия</MenuItem>
          <MenuItem>Автоаксессуары</MenuItem>
        </Menu>

        <Content>

          <h5 style={{ fontSize: '18px', marginBottom: '14px'  }}>По применению:</h5>
          <ContentTags>

            <Tag>Для легковых автомобилей</Tag>
            <Tag>Для грузовых автомобилей</Tag>
            <Tag>Для мотоциклов</Tag>
            <Tag>Промышленные</Tag>
            <Tag>Для спецтехники</Tag>
            <Tag>Для электросамокатов</Tag>
            <Tag>Для лодок</Tag>
            <Tag>Тяговые аккумуляторы</Tag>

          </ContentTags>

          <h5 style={{ fontSize: '18px', marginBottom: '14px'  }}>По маркам:</h5>
          <ContentTags>

            <Tag>Varta</Tag>
            <Tag>Bosch</Tag>
            <Tag>Zeus</Tag>
            <Tag>Sibbear</Tag>
            <Tag>Tyumen battery</Tag>
            <Tag>On asia</Tag>
            <Tag>Borg</Tag>
            <Tag>Ventura</Tag>
            <Tag>Akkom</Tag>

          </ContentTags>

          <h5 style={{ fontSize: '18px', marginBottom: '14px'  }}>По емкости:</h5>
          <ContentTags>

            <Tag>55 а*ч</Tag>
            <Tag>60 а*ч</Tag>
            <Tag>75 а*ч</Tag>
            <Tag>90 а*ч</Tag>
            <Tag>100 а*ч</Tag>

          </ContentTags>
          
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/catalog">
            <Button  
              params={{
                width: 180,
                height: 36,
                background: '#D62E2B'
              }}
              inner={"Подбор аккумулятора"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                color: 'white',
                marginRight: '24px',
                marginTop: '24px'
              }}
            />
          </Link>

        </Content>

      </Catalog>
    </React.Fragment>
  )

}

export default StartCatalog