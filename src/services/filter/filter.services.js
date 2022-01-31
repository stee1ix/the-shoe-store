export const filterCollection = (colorIndex, price, collection) => {
  if (colorIndex === 0) {
    return collection.filter((shoe) => {
      return shoe.price >= price[0] && shoe.price <= price[1];
    });
  }

  const color = transformColorIndex(colorIndex);

  return collection.filter((shoe) => {
    return (
      shoe.color === color && shoe.price >= price[0] && shoe.price <= price[1]
    );
  });
};

const transformColorIndex = (index) => {
  switch (index) {
    case 1:
      return "red";
    case 2:
      return "dark";
    case 3:
      return "green";
    case 4:
      return "blue";
    default:
      return "all";
  }
};
