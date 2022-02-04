export const calculateTotal = (items) => {
  const sum = (accumulator, a) => {
    return accumulator + a.price * a.quantity;
  };

  return items.reduce(sum, 0);
};
