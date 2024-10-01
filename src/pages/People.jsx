import { useParams } from "react-router-dom";
const People = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>People</h1>
      <p>Paragraf</p>
      <p>ID :{id}</p>
    </div>
  );
};

export default People;
