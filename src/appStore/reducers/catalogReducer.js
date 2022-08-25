import { createSlice } from '@reduxjs/toolkit'
export const catalogReducer = createSlice({

  name: 'catalog',
  initialState: {
    generalCatalog: '',
    orderProducts: 'ваша корзина пока пуста',

    // ------------------------------
    // техдолг на период разработки, потом убрать 
    // поля "catalog" и "popular"
    // ------------------------------

    catalog: [
      { id: '0001',
        itemID: 'oil0001',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0002',
        itemID: 'oil0002',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0003',
        itemID: 'oil0003',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0004',
        itemID: 'oil0004',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0005',
        itemID: 'oil0005',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0006',
        itemID: 'oil0006',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      }
    ],

    // ------------------------------
    // техдолг на период разработки, потом убрать 
    // поля "catalog" и "popular"
    // ------------------------------

    popular: [
      { id: '0001',
        itemID: 'oil0001',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0002',
        itemID: 'oil0002',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0003',
        itemID: 'oil0003',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0004',
        itemID: 'oil0004',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0005',
        itemID: 'oil0005',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      },
      { id: '0006',
        itemID: 'oil0006',
        name: 'Масло моторное G-Energy Synthetic Active 5W-40 4л',
        discr: [
          'Гарантия : 6 месяцев',
          'Емкость Ач : 9',
          'Полярность : Обратная',
          'Пусковой ток (А) : 480',
          'Размер (Д*Ш*В) : 207*175*175'
        ],
        coast1: 3550,
        coast2: 3050
      }
    ]
  },
  reducers: {

    generalCatalogReducer: (state, action) => { state.generalCatalog = action.payload },
    orderProductsReducer: (state, action) => { state.orderProducts = action.payload },
    removeProductFromOrder: (state, action) => {

      let newArr = []
      let resultStr = ''

      state.orderProducts.split('**').forEach(product => {

        if ( product.indexOf(action.payload) === -1 ) {

          newArr.push(product)

        }

      })

      resultStr = newArr.join('**')
      state.orderProducts = resultStr

    }
  }
})

export const { generalCatalogReducer, 
  orderProductsReducer, 
  removeProductFromOrder } = catalogReducer.actions
export default catalogReducer.reducer