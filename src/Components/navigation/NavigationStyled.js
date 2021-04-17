import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navigationList {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }

  .navigationLink {
    text-decoration: none;
    color: white;
  }

  .navigationLinkActive {
    color: #303f9f;
  }
`;
