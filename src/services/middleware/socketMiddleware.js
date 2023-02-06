import { getCookie } from "../../utils/cooke";

export const socketMiddleware = (wsUrl, wsActions, auth) => {

  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onOpen, onClose, onError, getOrders } = wsActions;

      const accessToken = getCookie('accessToken');
      if (type === wsStart && auth === false) {
        socket = new WebSocket(wsUrl);
      } else if (type === wsStart && auth === true && accessToken) {
        const accessToken = getCookie("accessToken");
        socket = new WebSocket(
          `${wsUrl}?token=${accessToken}`
        );
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: getOrders, payload: restParsedData });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
}; 
