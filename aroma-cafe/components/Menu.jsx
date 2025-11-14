import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { menuData } from '../arrays/menuData'; // creamos un archivo menuData.js
import '../styles/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Nuestro Menú</h2>
      <Accordion defaultActiveKey="0">
        {menuData.map((categoria, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <hr className='separador'/>
            <Accordion.Header>
              <span className="accordion-header-text">{categoria.categoria.toUpperCase()}</span>
            </Accordion.Header>
            <Accordion.Body>
            {categoria.items.map((item, i) => (
              <div className="menu-item" key={i}>
                <div className="menu-item-info">
                  <strong>{item.nombre}</strong>
                  {item.descripcion && <p>{item.descripcion}</p>}
                </div>
                <div className="menu-item-price">{item.precio}</div>
              </div>
            ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Menu;
