import styled from "styled-components";

export const MoviesContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 81%;
  list-style: none;
  flex-wrap: wrap;
  margin:-10px auto;
  >li {
    max-width:200px;
    padding: 10px;
  }
`;