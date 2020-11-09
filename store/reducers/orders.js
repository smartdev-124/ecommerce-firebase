import { ADD_ORDER } from '../../constants/ReduxConstants';
import Order from '../../models/order';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const { type, orderData } = action;

  switch (type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        orderData.id,
        orderData.items,
        orderData.amount,
        orderData.date
      );

      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
  }

  return state;
};
