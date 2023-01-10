import styled from "styled-components";

export const CommunityPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 760px;

  > h1 {
    font-size: 4rem;
  }

  .swiper {
    width: 100%;
    height: 100%;
    border: solid transparent 1px;
  }

  .swiper-pagination {
    align-items: center;
    justify-content: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors["button-bg"]};
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors["warning-light"]};
    }
  }
  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors["grey-100"]};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors["button-bg"]};
  }

  .swiper-slide {
    background: transparent;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
