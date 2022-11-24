export const totalPriceInitialState = { totalPrice: 0 };

export function reducer (state, action) {
  switch (action.type) {
    case 'setTotalPrice':
      return { totalPrice: action.total };
    case 'resetTotalPrice':
      return { totalPriceInitialState };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}