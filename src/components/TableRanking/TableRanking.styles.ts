import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 3rem;
  overflow: auto;
  max-height: calc(40rem);
  min-height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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
    width: 100%;
    position: absolute;
    top: 1rem;
    left: 0rem;
    right: 0rem;
    height: 3rem;
    padding: 1rem 2rem;
    min-width: 35rem;
    //mobile
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 0 auto;

      p {
        text-align: center;
      }

      button {
        height: 3rem;
      }
    }
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
    margin-top: 5rem;
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
        //mobile
        @media (max-width: 768px) {
          padding: 1rem 1rem;

          a {
            span {
              display: none;
            }
          }
        }
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
