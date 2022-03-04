import { useNavigate } from "react-router-dom";

const Navigate = (to, Location) => {
    return (
        useNavigate(to, Location)
    )
}

export default Navigate;