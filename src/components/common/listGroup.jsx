import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className="list-group-item"
          onClick={onItemSelect}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
