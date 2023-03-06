import useSearch from "hooks/useSearch";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardSearch from "./CardSearch";
const ListCardSearch = ({listResults}) => {

  return (
    <div>
      {listResults &&
        listResults.length > 0 &&
        listResults.map((searchItem) => (
          <CardSearch key={uuidv4()} resultsData={searchItem}></CardSearch>
        ))}
    </div>
  );
};

export default ListCardSearch;
