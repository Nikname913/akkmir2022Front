import { createSlice } from '@reduxjs/toolkit'
export const mainReducer = createSlice({

  name: 'main',
  initialState: {
    actualOrder: [],
    modalShow: false,
    modalContent: false,
    messageShow: false,
    messageContent: {
      title: '-- -- -- --',
      message: '-- -- -- --'
    },
    productPageDiscriptionFork: 0,
    catalogMenu: [
      { id: '001', 
        label: 'Аккумуляторы',
        tags: [
          'Автомобильные',
          'Мотоциклетные',
          'Аккумуляторы тяговые',
          'Клеммы и провода',
        ]},
      { id: '002', 
        label: 'Масла',
        tags: [
          'Моторные',
          'АКПП и ГУР',
          'Трансмиссионные',
          'Гидравлические',
          'Промывочные жидкости',
        ]},
      { id: '003', 
        label: 'Спецжидкости',
        tags: [
          'Антифризы',
          'Тосолы',
          'Мочевина',
          'Стеклоомыватели',
          'Электролит',
          'Тормозные жидкости',
        ]},
      { id: '004', 
        label: 'Автоэлектроника и питание',
        tags: [
          'Батарейки',
          'Зарядные устройства',
          'Нагрузочные вилки',
          'Компрессоры',
          'Измерительные приборы',
        ]},
      { id: '005', 
        label: 'ИБП и стабилизаторы',
        tags: [
          'ИБП',
          'Стабилизаторы',
          'Инверторы',
        ]},
      { id: '006', 
        label: 'Инструменты',
        tags: [
          'Ключи',
          'Удлиннители и воротки',
          'Отвертки',
          'Ручной инструмент',
          'Наборы инструментов',
        ]},
      { id: '007', 
        label: 'Автокосметика',
        tags: [
          'Присадки',
          'Очистители',
          'Полироли',
          'Смазки',
          'Автоэмали',
          'Размораживатели',
        ]},
      { id: '008', 
        label: 'Автоаксессуары',
        tags: [
          'Термочехлы',
          'Ароматизаторы',
          'Автоаксессуары',
          'Перчатки',
          'Фонари',
          'Домкраты',
        ]}
    ],
    ordersCount: 0,
    sravnenieCount: 2,
    actualItem: null,
    actualCategory: { 
      id: '001', 
      label: 'Аккумуляторы' 
    },
    mobile: false,
    models: [
      'Acura',
      'AlfaRomeo',
      'Audi',
      'BMW',
      'Geely',
      'GMC',
      'GreatWall',
      'Hafei',
      'Brilliance',
      'Cadillac',
      'Chery',
      'Chevrolet',
      'Honda',
      'Hummer',
      'Hyundai',
      'Infiniti',
      'Chrysler',
      'Citroen',
      'Daewoo',
      'Datsun',
      'IranKhodro',
      'Jaguar',
      'Jeep',
      'Kia',
      'Dodge',
      'Fiat',
      'Ford',
      'Geely',
      'Land Rover',
      'Lexus',
      'Lifan',
      'Lincoln',
      'GMC',
      'GreatWall',
      'Hafei',
      'Honda',
      'Maserati',
      'Mazda',
      'Mercedes-Benz'
    ],
    infoPageTitle: 'Новости нашей компании'
  },
  reducers: {

    reducerOne: (state, action) => {},
    reducerTwo: (state, action) => {},
    productPageReducer: (state, action) => {

      state.productPageDiscriptionFork = action.payload

    },
    setInfoPageTitle: (state, action) => {
      state.infoPageTitle = action.payload
    },
    setOrdersCount: (state, action) => {
      state.ordersCount = action.payload
    },
    setSravnenieCount: (state, action) => {
      state.sravnenieCount = action.payload
    },
    setActualItem: (state, action) => {
      state.actualItem = action.payload
    },
    setActualCategory: (state, action) => {
      state.actualCategory = action.payload
    },
    setModalShow: (state, action) => {
      state.modalShow = action.payload
    },
    setModalContent: (state, action) => {
      state.modalContent = action.payload
    },
    setMessageShow: (state, action) => {
      state.messageShow = action.payload
    },
    setMessageContent: (state, action) => {
      state.messageContent = action.payload
    },
    setMobile: (state, action) => {
      state.mobile = true
    }
    
  }
})

export const { reducerOne, 
  reducerTwo, 
  productPageReducer,
  setOrdersCount,
  setSravnenieCount,
  setActualItem,
  setActualCategory,
  setModalShow,
  setModalContent,
  setMessageShow,
  setMessageContent,
  setMobile,
  setInfoPageTitle } = mainReducer.actions
export default mainReducer.reducer