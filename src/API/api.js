
const config = {
  baseURL: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

export function getAllIngredients() {
  return fetch(`${config.baseURL}/ingredients`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => checkResponse(res))
}

export function postOrderInfo(array) {
  return fetch(`${config.baseURL}/orders`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      ingredients: array
    })
  })
    .then(res => checkResponse(res))
}

//проверка запросов
function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
} 
