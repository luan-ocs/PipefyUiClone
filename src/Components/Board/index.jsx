import React, { useState } from "react";
import produce from "immer"
import { loadLists } from "../../Services/api"

import { Container } from "./styles";
import List from "../List";
import BoardContext from "./context";

 function Board() {

  let data = loadLists();
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]; 
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged)
    })) 
  }

  function listMove(fromList, toList, from) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]; 
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.push(dragged);
      dragged.index = draft.lastIndex
    }))
  }

  console.log(data)

  while(data.length == 0){
    console.log("nao mudou")
  }

  return (
    <BoardContext.Provider value={{ lists, move, listMove }}>
      <Container>
        { lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
