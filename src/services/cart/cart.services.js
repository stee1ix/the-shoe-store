export const calculateTotal = (items) => {
  const sum = (accumulator, a) => {
    return accumulator + a.price * a.quantity;
  };

  return items.reduce(sum, 0);
};

export const removeFromCart = (items, setItems, id) => {
  const newItems = items.filter((item) => {
    return item.id !== id;
  });
  setItems(newItems);
};
