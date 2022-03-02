import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDoProps, toDoState } from "../atom/atoms";
import { TODO } from "../constant/constants";
import CreateDraggable from "./CreateDraggable";

const Wrapper = styled.div<{ isDragging: boolean }>`
  padding: 10px 0px;
  background-color: ${(props) =>
    props.isDragging ? props.theme.pinkColor : props.theme.boardColor};
  width: 300px;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  transform: none;
  flex-grow: 1;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 10px;
`;

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.boardColor};
  color: black;
  padding: 0;
  font-size: 28px;
  position: relative;
  i {
    border: none;
    background-color: none;
    padding: none;
    &:hover {
      color: #f783ac;
    }
  }
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? props.theme.pinkColor
      : props.draggingFromThisWith
      ? "#D3E0DC"
      : "#ECE2E1"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Input = styled.input`
  text-align: center;
`;

interface IBoardProps {
  toDos: IToDoProps[];
  boardId: string;
  boardIndex: number;
}

interface IFormProps {
  toDo: string;
}

function Board({ toDos, boardId, boardIndex }: IBoardProps) {
  const { register, setValue, handleSubmit } = useForm<IFormProps>();
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    setToDos((allboards) => {
      const newBoards = { ...allboards };
      delete newBoards[boardId];
      return newBoards;
    });
  };
  const onVaild = ({ toDo }: IFormProps) => {
    const newToDos = { id: Date.now(), text: toDo };
    setToDos((allBoards) => {
      return { ...allBoards, [boardId]: [newToDos, ...allBoards[boardId]] };
    });
    setValue(TODO, "");
  };
  return (
    <Draggable draggableId={boardId} index={boardIndex}>
      {(magic, snapshot) => (
        <Wrapper
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
        >
          <TitleDiv {...magic.dragHandleProps}>
            <div></div>
            <Title>{boardId}</Title>
            <Button onClick={onClick}>
              <i className="fas fa-times-circle"></i>
            </Button>
          </TitleDiv>
          <Form onSubmit={handleSubmit(onVaild)}>
            <Input
              {...register(TODO, { required: true })}
              placeholder={`Add task a ${boardId}`}
              type="text"
            />
          </Form>
          <Droppable droppableId={boardId}>
            {(magic, snapshot) => (
              <Area
                isDraggingOver={snapshot.isDraggingOver}
                draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
                ref={magic.innerRef}
                {...magic.droppableProps}
              >
                {toDos.map((toDo, index) => (
                  <CreateDraggable
                    index={index}
                    toDoId={toDo.id}
                    key={toDo.id}
                    toDoText={toDo.text}
                  />
                ))}
                {magic.placeholder}
              </Area>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
}

export default React.memo(Board);
