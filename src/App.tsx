import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ItoDoStateProps, toDoState, USERTODOLIST_KEY } from "./atoms";
import Board from "./Components/Board";
import CreateBoard from "./Components/CreateBoard";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  flex-wrap: wrap;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, 1fr);
  place-content: center center;
  gap: 10px;
  width: 100%;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm();
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { type, destination, source } = info;

    if (destination === null && type !== "board") {
      setToDos((allBoards) => {
        const newBoard = [...allBoards[source.droppableId]];
        newBoard.splice(source.index, 1);
        return { ...allBoards, [source.droppableId]: newBoard };
      });
    }

    if (!destination) return;
    //console.log(toDos);

    if (type === "board") {
      if (destination.index === source.index) return;
      setToDos((allBoards) => {
        const keyList = Object.keys(toDos);
        //console.log(allBoards);
        const newBoards: ItoDoStateProps = {};
        //console.log(keyList);
        // keyList.map((item) => {
        //   console.log(item);
        //   newBoards[item] = { ...allBoards[item] };
        // });
        let sourceKey: string, destKey: string;
        keyList.forEach((item, index) => {
          if (index === source.index) sourceKey = item;
          if (index === destination.index) destKey = item;
        });

        keyList.forEach((item) => {
          if (item === sourceKey) return;
          if (item === destKey && source.index > destination.index) {
            newBoards[sourceKey] = [...allBoards[sourceKey]];
          }
          newBoards[item] = [...allBoards[item]];
          if (item === destKey && source.index < destination.index) {
            newBoards[sourceKey] = [...allBoards[sourceKey]];
          }
        });
        //console.log(newBoards);
        // // keyList.forEach((item) => {
        // //   //console.log(item);
        // //   if (item === sourceKey) {
        // //     newToDos[destKey] = [...allBoards[destKey]];
        // //     newToDosArr.push((newToDos[destKey] = [...allBoards[destKey]]));
        // //   } else if (item === destKey) {
        // //     newToDos[sourceKey] = [...allBoards[sourceKey]];
        // //     newToDosArr.push((newToDos[sourceKey] = [...allBoards[sourceKey]]));
        // //   } else {
        // //     newToDos[item] = [...allBoards[item]];
        // //     newToDosArr.push((newToDos[item] = [...allBoards[item]]));
        // //   }
        // //   console.log({ ...newToDosArr });
        // //   //console.log(newToDos);
        // // });
        return newBoards;
      });
      return;
    }

    if (
      destination?.droppableId === source.droppableId &&
      source.droppableId !== "droppableBoards"
    ) {
      setToDos((allBoards) => {
        const newBoard = [...allBoards[source.droppableId]];
        //console.log(newBoard);
        const taskObj = newBoard[source.index];
        //console.log(taskObj);
        newBoard.splice(source.index, 1);
        newBoard.splice(destination?.index, 0, taskObj);
        //console.log(newBoard);
        return { ...allBoards, [source.droppableId]: newBoard };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const newBoard = [...allBoards[destination.droppableId]];
        const removeBoard = [...allBoards[source.droppableId]];
        const taskObj = removeBoard[source.index];
        removeBoard.splice(source.index, 1);
        newBoard.splice(destination.index, 0, taskObj);
        //console.log(removeBoard);
        //console.log(toDos);

        return {
          ...allBoards,
          [source.droppableId]: removeBoard,
          [destination.droppableId]: newBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        ></link>
      </Helmet>
      <Wrapper>
        <CreateBoard />
        <Droppable
          droppableId="droppableBoards"
          type="board"
          direction="horizontal"
        >
          {(magic) => (
            <Boards ref={magic.innerRef} {...magic.droppableProps}>
              {Object.keys(toDos).map((boardId, index) => (
                <Board
                  key={boardId}
                  boardId={boardId}
                  toDos={toDos[boardId]}
                  boardIndex={index}
                />
              ))}
              {magic.placeholder}
            </Boards>
          )}
        </Droppable>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;
