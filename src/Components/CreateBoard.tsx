import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atom/atoms";
import { BOARD } from "../constant/constants";

const Wraaper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  width: 100%;
  margin-bottom: 50px;
`;

const Form = styled.form`
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
  flex-grow: 1;
`;

interface IAddBoard {
  board?: string;
}

const Input = styled.input`
  text-align: center;
`;

const Button = styled.button``;

function CreateBoard() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm();
  const onVaild = ({ board = "" }: IAddBoard) => {
    const newBoard = { [board]: [] };
    setToDos((allBoards) => {
      return { ...allBoards, ...newBoard };
    });
    setValue(BOARD, "");
  };
  return (
    <Wraaper>
      <Form onSubmit={handleSubmit<IAddBoard>(onVaild)}>
        <Input
          {...register(BOARD, {
            required: true,
            maxLength: 20,
          })}
          type="text"
          placeholder="Add a Board"
          maxLength={20}
        />
        <Button>Add Board</Button>
      </Form>
    </Wraaper>
  );
}

export default CreateBoard;
