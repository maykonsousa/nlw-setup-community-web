import styled from "styled-components";
import BackGroundImage from "../../assets/teste.png";

export const ViewTicketModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 340px;
  height: 580px;
  background-color: ${({ theme }) => theme.colors["grey-900"]};
  background-image: url(${BackGroundImage.src});
  background-size: cover;
  border-radius: 8px;
`;

export const Header = styled.div`
  position: relative;
  display: block;
  height: 200px;

  svg {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors["ignite-light"]};
    }
  }
`;

export const Body = styled.div`
  height: 310px;
  padding: 0 1.5rem;
  div.Informations {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 12rem 1fr;
    gap: 1rem;
    h3 {
      color: ${({ theme }) => theme.colors["button-bg"]};
    }
  }

  ul.SocialMedia {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 2rem;
    gap: 2rem;
    li {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors["grey-800"]};

      &:hover {
        background-color: ${({ theme }) => theme.colors["grey-400"]};
      }
    }
  }

  > p {
    margin-top: 2rem;
  }
`;

export const ProfileImageContainer = styled.div`
  width: 72px;
  height: 72px;
  margin-top: -36px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors["grey-600"]};
  border: solid 2px ${({ theme }) => theme.colors["ignite-light"]};
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Footer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: block;
    background-color: ${({ theme }) => theme.colors["warning-base"]};
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors["white"]};
  }
`;
