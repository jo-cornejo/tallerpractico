import React from 'react';

export default function Lista(props) {
  const { listItems, onAdd, onRemove, onDelete } = props;
  const itemPrice = listItems.reduce((a, c) => a + c.quantity * c.price, 0);
  return (
    <aside className="block col-1">
      <h2>Productos en la lista</h2>
      <div>
        {listItems.length === 0 && <div>La lista está vacía</div>}
        {listItems.map((item) => (
          <>
          <div key={item.id} className="row1">
            <div className="col-2">{item.name} <br/>Precio: ${item.price.toFixed(2)} </div>
            <div className="col-1 text-right">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              {'  '}{item.quantity}{'   '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>{' '}
              <button onClick={() => onDelete(item)} className="delete">
                x
              </button>
            </div>
          </div>
          <hr/>
          </>
        ))}

        {listItems.length !== 0 && (
          <>
          <hr></hr>
            <div className="row1">
              <div className="col-2"> Total: </div>
              <div className="col-1 text-right"> ${itemPrice.toFixed(2)}</div>
            </div>
            <hr />
          </>
        )}
      </div>
    </aside>
  );
}
