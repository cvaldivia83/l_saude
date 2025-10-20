import styled from "styled-components";

const GlobalLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  .main-content {
    flex-grow: 1;
  }

  header, footer {
    flex-shrink: 0;
  }
`