/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../styles/category-card'
import image from '../../img/category.png'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setActualCategory } from '../../appStore/reducers/mainReducer'

const Card = css.Card
const CardTags = css.CardTags

const CatCard = (props) => {

  const { title, img = image, tags = null, catid } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function selectCategory() { dispatch(setActualCategory({ id: catid, label: title })) }

  function selectSubCategory(props) {

    const { id, label } = props
    dispatch(setActualCategory({ id, label}))

  }

  return (
    <React.Fragment>
      <Card>
        <img src={img} 
          alt={""}
          style={{
            display: 'block',
            width: '180px',
            height: '180px',
            margin: '0 auto',
            borderRadius: '8px',
            marginTop: '8px'
          }}
        />

        <h5 
          style={{ 
            fontSize: '20px',
            marginTop: '15px', 
            marginBottom: '16px', 
            textAlign: 'center',
            cursor: 'pointer',
            lineHeight: '26px'
          }}
          onClick={() => {
            navigate(`../catalog/${title}`)
            selectCategory()
          }}
        >{title}</h5>

        <CardTags>

          { tags ? tags.map((item, index) => {

            return (
              <span 
                key={index}
                style={{ 
                  backgroundColor: '#F3F3F3', 
                  display: 'block',
                  borderRadius: '20px',
                  fontSize: '12px',
                  padding: '8px',
                  paddingBottom: '10px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  marginRight: '6px',
                  marginBottom: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  navigate(`../catalog/${item[1]}`)
                  selectSubCategory({
                    id: item[0],
                    label: item[1],
                  })
                }}
              >{item[1]}</span>
            )

          }) : null }

        </CardTags>
      </Card>
    </React.Fragment>
  )

}

export default CatCard