import React from "react";

function ListComponent() {
  const names = [
    { id: 1, name: "Honest" },
    { id: 2, name: "Dhilip" },
    { id: 3, name: "Raj" },
  ];
  const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nameList = names.map((name) => <h3 key={name.id}> {name.name}</h3>);
  const dataList = datas
    .filter((arr) => arr > 2 && arr < 7)
    .map((a) => <h1 key={a}> Vanakam : {a} </h1>);

  return (
    <div>
      {nameList}
      {dataList}
    </div>
  );
}

export default ListComponent;
