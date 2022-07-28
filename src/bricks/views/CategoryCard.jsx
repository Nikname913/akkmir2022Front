/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../styles/category-card'
import image from '../../img/category.png'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setActualCategory } from '../../appStore/reducers/mainReducer'

const Card = css.Card
const CardTags = css.CardTags

const CatCard = (props) => {

  const { title, img = image, tags = null, catid } = props
  const dispatch = useDispatch()

  function selectCategory() {

    dispatch(setActualCategory({ id: catid, label: title }))

  }

  return (
    <React.Fragment>

      <Card onClick={selectCategory}>
        <img 
          src={img} 
          alt={""}
          style={{
            display: 'block',
            width: '180px',
            height: '180px',
            margin: '0 auto'
          }}
        />

        <Link style={{ textDecoration: 'none', color: 'black' }} to="/catalog"><h5 
          style={{ 
            fontSize: '16px',
            marginTop: '12px', 
            marginBottom: '14px', 
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          
          {title}
          
        </h5></Link>

        <CardTags>

          { tags ? tags.map((item, index) => {

            return (
              <Link key={index} style={{ textDecoration: 'none', color: 'black' }} to="/catalog">
                <span 
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
                    marginBottom: '6px'
                  }}
                >

                  {item}
                </span>
              </Link>
            )

          }) : null }

        </CardTags>
      </Card>

    </React.Fragment>
  )

}

export default CatCard