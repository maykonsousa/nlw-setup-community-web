import styled from "styled-components";

import CoverImg from "../../assets/cover_img.jpg";

export const AboutPageContainer = styled.div`
  margin-top: 4rem;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const Cover = styled.div`
  background-image: url(${CoverImg.src});
  background-size: cover;
  background-position: center;
  height: 10rem;
  width: 100%;
`;
export const Main = styled.main`
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  width: 20rem;
  height: 100vh;
  margin-top: -5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors["grey-800"]};
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;

  a {
    color: ${({ theme }) => theme.colors["success-light"]};
    transition: all 0.2s ease-in-out;
    svg {
      box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors["ignite-light"]};
      transform: translateY(-2px);
    }
  }

  .avatar {
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    border: solid 3px ${({ theme }) => theme.colors["ignite-light"]};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 50%;
    }
  }

  .informations {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .socialMedias {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TecnologiesContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.colors["grey-800"]};
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;
  padding: 2rem;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors["rocketseat-light"]};
      width: 2.8rem;
      height: 2.8rem;
      box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;
      color: ${({ theme }) => theme.colors["grey-800"]};
      border-radius: 4px;

      &:hover {
        background-color: ${({ theme }) => theme.colors["rocketseat-dark"]};
        transform: translateY(-2px);
        color: ${({ theme }) => theme.colors["grey-100"]};
      }
    }
  }
`;

export const Content = styled.div`
  height: 37rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors["grey-800"]};
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;

  //mobile
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    div {
      display: none;
    }
  }
`;
