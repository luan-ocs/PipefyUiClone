import React, { useContext, useState } from "react";
import BoardContext from "../Board/context"

import { Container, Header, Body, Button } from "./styles";
import Modal from "../CreateTaskModal"
import { useDrop } from "react-dnd";
import { Plus } from "@styled-icons/entypo/Plus"
import Card from "../Card"

function List ({data, index : listIndex}) {
  const { listMove } = useContext(BoardContext)
  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item) {
      const draggedListIndex = item.listIndex
      const targetList = listIndex;

      if(item.listIndex === listIndex){
        return;
      }

      listMove(draggedListIndex, targetList, item.index)
      console.log(item)
      item.listIndex = targetList

    }
  })

  const [isModalOpen, openModal] = useState(false);

    return (
      <Container done={data.done} ref={dropRef}>
        <Header>
          <h2>{data.title}</h2>
        </Header>
        <Body>
            <ul>
                {data.cards.map((card, index) => <Card key={card.id} index={index} data={card} listIndex={listIndex}/>)}
            </ul>
        </Body>
        {data.creatable ? (<Button onClick={() => openModal(true)}>
            <Plus />
        </Button>) : ""}
        {isModalOpen ? (<Modal onClose={() => openModal(false)}/>) : console.log(isModalOpen)}
      </Container>
    );
}

export default List;
