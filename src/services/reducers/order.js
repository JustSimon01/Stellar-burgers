import { ORDER } from '../actions/actions'

// объект созданного заказа.
const orderInitialState = [
  {
    id: guid(),
    completed: false,
    expiresAt: '08.04.20201',
    text: 'Купить авокадо 4 шт.'
  }
]