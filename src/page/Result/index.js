import React from "react";
import ListCategory from "../../components/ListCategory";
import { useProductWithQuery } from "../../hooks/useFetchProduct";
import Item from "../../components/Item";
import { useGetParamsUrl } from "../../hooks/useGetParamsUrl";

export default function Result(props) {
  const query = useGetParamsUrl();
  const [data, loaded, error] = useProductWithQuery(query);

  if (!loaded) return <div></div>;
  if (error) return <h2>Error</h2>;
  return (
    <div className="page">
      <ListCategory category={data.categories} />
      <div className="page-container">
        {data.items.map((i, index) => (
          <Item key={index} data={i} />
        ))}
      </div>
    </div>
  );
}
