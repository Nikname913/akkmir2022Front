import { createSlice } from '@reduxjs/toolkit'
export const catalogReducer = createSlice({

  name: 'catalog',
  initialState: {
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

    reducerOne:   (state, action) => {},
    reducerTwo:   (state, action) => {},
    reducerThree: (state, action) => {}
    
  }

})

export const { reducerOne, reducerTwo, reducerThree } = catalogReducer.actions
export default catalogReducer.reducer