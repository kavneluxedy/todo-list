import { useParams } from "react-router-dom";

const WildCard = () => {
  const { wildcard } = useParams();
  return <h3>{ wildcard }</h3>;
};

export default WildCard;