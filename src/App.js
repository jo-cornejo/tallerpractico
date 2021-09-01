import List from './components/List';
import data from './data';
import { useState } from 'react';
import Select from 'react-select';


function App() {
  const { products } = data;
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

  const [result,ddlValue] = useState(products)
  const ddlHandler = e =>{
    ddlValue(e);
  }

  return (
    
    <div className="App">
      <div className="row">
        <main className="block col-2">
        <h1>Lista de compras</h1>
        <h2>Productos</h2>
        <div className="row1">
          <div className="col-2">
            <Select placeholder="Seleccione un producto"
              options={products} onChange={ddlHandler}
            />
          </div>
          <div className="col-1">
            <button className="new" onClick={() => onAdd(result)}>Agregar a la lista</button>
          </div>
          </div>
        </main>
        <List
          listItems={listItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        ></List>
      </div>
    </div>
  );
}

export default App;
