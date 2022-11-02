class Reducer {

  #startStore = {
    orders: [],
    ordersCount: 0,
    authSuccess: false,
    authToken: '',
    authData: ''
  }

  // ----------------------------------------------------------------
  // метод инициации стора
  // ----------------------------------------------------------------

  initStore() {

    !localStorage.getItem('akkmirLocalStore') 
      && localStorage.setItem('akkmirLocalStore', JSON.stringify(this.#startStore))

  }

  // ----------------------------------------------------------------
  // методы работы с хранилещем заказов
  // ----------------------------------------------------------------

  getOrdersCount() {

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore() 
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))

    return store.ordersCount

  }

  setOrdersCount() {

    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    let count = store.ordersCount
    let incrCount = count + 1
    store.ordersCount = incrCount

    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))

  }

  decrementOrdersCount(props) {

    const { decr } = props

    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    let count = store.ordersCount
    let decrCount = count - decr
    store.ordersCount = decrCount

    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))

  }

  getOrdersData() {

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore() 
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))

    return store.orders

  }

  getOneOrder(props) {

    const { itemID } = props

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore() 
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))

    return store.orders.find(item => item.id === itemID)

  }

  makeNewOrder(props) {

    const { itemID } = props
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    let check = true

    store.orders.forEach(order => {
      
      if ( order.id === itemID ) {
        
        order.count = order.count + 1
        check = false

      }

    })

    check && store.orders.push({ id: itemID, count: 1 })
    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))

  }

  removeOrder(props) {

    const { itemID } = props
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))

    let newOrders = []

    store.orders.forEach(order => {
      
      if ( order.id !== itemID ) {
        
        newOrders.push(order)

      }

    })

    store.orders = newOrders
    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))

  }

  removeAllOrders() {

    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    store.orders = []
    store.ordersCount = 0

    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))

  }

  resetStore() {

    localStorage.setItem('akkmirLocalStore', JSON.stringify(this.#startStore))

  }

  // ----------------------------------------------------------------
  // методы работы с авторизацией и регистрацией - получение auth статуса, токена и даты
  // ----------------------------------------------------------------

  getAuthStatus() {

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore()
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    return store.authSuccess

  }

  getAuthUserToken() {

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore()
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    return store.authToken

  }

  getAuthData() {

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore()
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    return store.authData

  }

  // ----------------------------------------------------------------
  // методы работы с авторизацией и регистрацией - запись auth статуса, токена и даты
  // ----------------------------------------------------------------

  setAuthStatus(props) {

    const { status } = props

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore()
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    store.authSuccess = status

    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))

  }

  setAuthToken(props) {

    const { token } = props

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore()
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    store.authToken = token

    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))

  }

  setAuthData(props) {

    // eslint-disable-next-line no-unused-vars
    const { number, auth, name, email, car } = props
    const userData = { number, auth, name, email, car }

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore()
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))
    store.authData = userData

    localStorage.setItem('akkmirLocalStore', JSON.stringify(store))
    console.log(localStorage.getItem('akkmirLocalStore'))

    // ------------------------------
    // { "number": "89068085023",
    //   "auth": "sms",
    //   "name": "Николай",
    //   "email": "nik.shipov@gmail.com",
    //   "car": "lada vesta" }
    // ------------------------------

  }

}

const Rds = new Reducer()
export default Rds