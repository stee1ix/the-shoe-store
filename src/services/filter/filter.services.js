export const filterCollection = (colorIndex, price, sortType, collection) => {
  if (colorIndex === 0) {
    const newCollection = collection.filter((shoe) => {
      return shoe.price >= price[0] && shoe.price <= price[1];
    });

    switch (sortType) {
      //low to high
      case 1:
        return newCollection.sort((a, b) => (a.price > b.price ? 1 : -1));
      //high to low
      case 2:
        return newCollection.sort((a, b) => (a.price < b.price ? 1 : -1));
      // none
      default:
        return newCollection;
    }
  }

  const color = transformColorIndex(colorIndex);

  const newCollection = collection.filter((shoe) => {
    return (
      shoe.color === color && shoe.price >= price[0] && shoe.price <= price[1]
    );
  });

  switch (sortType) {
    //low to high
    case 1:
      return newCollection.sort((a, b) => (a.price > b.price ? 1 : -1));
    //high to low
    case 2:
      return newCollection.sort((a, b) => (a.price < b.price ? 1 : -1));
    // none
    default:
      return newCollection;
  }
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
