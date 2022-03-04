import { useState } from "react";
import MyCard from "./MyCard";
import AddCard from "./AddCard";
import UpdateCard from "./UpdateCard";
import DeleteCard from "./DeleteCard";

const CardsTemplate = () => {
  const myProjects = ["card-manager", "task-manager"];
  const [projects, setProjects] = useState(myProjects);

  return (
    <>
      <div>
        <MyCard cards={projects} setCards={setProjects} />
      </div>

      <br />

      <div>
        <AddCard cards={projects} setCards={setProjects} />
      </div>

      <br />

      <div>
        <UpdateCard cards={projects} setCards={setProjects} />
      </div>

      <br />

      <div>
        <DeleteCard cards={projects} setCards={setProjects} />
      </div>

      <br />
    </>
  );
};

export default CardsTemplate;
