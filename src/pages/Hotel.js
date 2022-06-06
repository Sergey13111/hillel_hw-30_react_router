import { useParams } from "react-router-dom"; 

const Hotel = () => {
  const params = useParams();
  return (
    <h4>Hotel: {params.Id}</h4>
  )
};

export default Hotel;