import React, { Component } from 'react';
// import './style.css';

let Menu = ({ items }) => {

  if (!items) {
    return <div> Loading... </div>;
  }
  
  
  return (
    <menu className="menu">
      {items.map((link, index) => 
       (<li className="menu__item" key={index}>
        <a href="">{link.name}</a>
       </li>)
      )}
    </menu>
  );
};

export default Menu;


// class Navigation extends Component {
//   render() {
//     return (
//       <aside className="aside">
//         Hello Aside !2
//         <menu className="menu">
//         </menu>
//       </aside>
//     );
//   }
// }

// export default Navigation;