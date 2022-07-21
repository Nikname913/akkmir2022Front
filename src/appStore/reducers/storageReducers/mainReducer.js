class Reducer {

  #startStore = {
    orders: [],
    ordersCount: 0,
    authSuccess: false,
    authData: {
      user: null,
      password: null
    }
  }

  initStore() {

    !localStorage.getItem('akkmirLocalStore') 
      && localStorage.setItem('akkmirLocalStore', JSON.stringify(this.#startStore))

  }

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

  getOrdersData() {

    !JSON.parse(localStorage.getItem('akkmirLocalStore')) && this.initStore() 
    let store = JSON.parse(localStorage.getItem('akkmirLocalStore'))

    return store.orders

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

    localStorage.setItem('akkmirLocalStore', JSON.stringify(this.#startStore))

  }

}

const Rds = new Reducer()
export default Rds