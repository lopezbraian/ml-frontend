import React from "react";
import { useParams } from "react-router-dom";
import { useProductId } from "../../hooks/useFetchProduct";
import DetailProduct from "../../components/DetailProduct";
import ListCategory from "../../components/ListCategory";

export default function Detail() {
  const { id } = useParams();
  const [data, loaded, error] = useProductId(id);

  if (!loaded) return "";
  console.log(data);
  return (
    <div className="page">
      <ListCategory category={data.categories} />
      <DetailProduct data={data.item} />
    </div>
  );
}
