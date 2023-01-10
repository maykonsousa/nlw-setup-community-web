import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 3rem;
  overflow: auto;
  max-height: 30rem;
  min-height: 20rem;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.colors["grey-500"]};
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: irem;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["ignite-dark"]};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors["ignite-light"]};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors["success-light"]};
  }

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    p {
      display: block;
      width: 100%;
    }
    button {
      width: 6rem;
    }
  }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    min-width: 35rem;
    th {
      color: ${({ theme }) => theme.colors["text-base"]};
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    tbody {
      tr {
        transition: all 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.colors["ignite-light"]};
        }
      }
      td {
        padding: 1rem 2rem;
        border: 0;
        background: ${({ theme }) => theme.colors["grey-600"]};
        color: ${({ theme }) => theme.colors["text-base"]};

        border-left: solid 1px ${({ theme }) => theme.colors["grey-500"]};
        a {
          align-items: center;
          display: flex;
          gap: 1rem;
          transition: filter 0.2s;
          &:hover {
            color: ${({ theme }) => theme.colors["text-base"]};
          }
        }
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 3rem;
  overflow: auto;
  max-height: 30rem;
  min-height: 20rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
