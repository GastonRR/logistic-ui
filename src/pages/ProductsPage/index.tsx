import { LocationStates } from "@routes/types";
import { useParams } from "react-router-dom";

type QueryParamType = LocationStates["/products/:id"];

const ProductsPage = () => {
  const { id } = useParams<QueryParamType>();

  return <div>Productos asociados a la orden: {id}</div>;
};

export default ProductsPage;
