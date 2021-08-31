import Main from './components/Main';
import Lista from './components/Lista';
import proddisp from './proddisp';
import { useState } from 'react';
function App() {
  const { products } = proddisp;
  const [listItems, setListItems] = useState([]);
  const onAdd = (product) => {
    const exist = listItems.find((x) => x.id === product.id);
    if (exist) {
      setListItems(
        listItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setListItems([...listItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = listItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setListItems(listItems.filter((x) => x.id !== product.id));
    } else {
      setListItems(
        listItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  const onDelete = (product) => {
    setListItems(listItems.filter((x) => x.id !== product.id));
  };
  return (
    <div className="App">
      
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Lista
          listItems={listItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        ></Lista>
      </div>
    </div>
  );
}

export default App;
