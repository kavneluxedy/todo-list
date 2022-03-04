import { ListGroup, Button } from "react-bootstrap";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import SearchForm from "./SearchForm";
import { useParams } from "react-router-dom";



const ToDoList = () => {
  const { id } = useParams();

  return (
    <>
      <h3>Tasks Front-End CRUD</h3>

      <TaskCard />

      {/* <AddTask /> */}

      <h2>{ id }</h2>
    </>
  );
};

export default ToDoList;
