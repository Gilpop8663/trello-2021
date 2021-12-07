import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState, USERTODOLIST_KEY } from "../atoms";

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
  board: string;
}

const Input = styled.input`
  text-align: center;
`;

const Button = styled.button``;

function CreateBoard() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm();
  const onVaild = ({ board }: IAddBoard) => {
    //console.log(board);
    const newBoard = { [board]: [] };
    //console.log(newBoard);
    setToDos((allBoards) => {
      return { ...allBoards, ...newBoard };
    });
    //console.log(localStorage.getItem(USERTODOLIST_KEY));
    setValue("board", "");
  };
  return (
    <Wraaper>
      <Form onSubmit={handleSubmit<IAddBoard>(onVaild)}>
        <Input
          {...register("board", {
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
