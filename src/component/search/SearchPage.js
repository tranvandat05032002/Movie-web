import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
import { apiKey } from "utils/config";
import styled from "styled-components";

const SearchPageStyled = styled.div`
  margin-top: var(--height-header);
  padding: 30px 40px 5px 40px;
  background-color: transparent;
  width: 100%;
`;

const SearchPage = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = React.useState([]);
  React.useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get("query");
        const response = await axios.request({
          method: "GET",
          url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false`,
          params: {
            query,
            page: 1,
          },
        });
        if (response?.data) {
          setSearchResults(response?.data?.results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataSearch();
    // Thực hiện tìm kiếm với query tại đây và set giá trị cho searchResults
  }, [location.search]);
  return (
    <SearchPageStyled>
      <h1>121212</h1>
    </SearchPageStyled>
  );
};

export default SearchPage;
