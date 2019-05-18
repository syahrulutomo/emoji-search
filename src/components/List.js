import React from 'react';
import ListItem from './component/ListItem';

class List extends React.Component {
  render() {
    return(
      <ul className="list">
          <ListItem />
      </ul>
    );
  }
}

export default List;