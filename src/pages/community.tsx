import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "../components/Header";
import { UserCard } from "../components/UserCard";
import { UserContext } from "../contexts/UserContext";
import { CommunityPageContainer } from "../styles/pages/Community.styles";
import { PageLoad } from "../components/PageLoad";

const Community = () => {
  const { users, pageLoad } = React.useContext(UserContext);
  return pageLoad ? (
    <PageLoad />
  ) : (
    <CommunityPageContainer>
      <Header />
      <h1>Community</h1>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation={true}
        keyboard={true}
        breakpoints={{
          1330: {
            slidesPerView: 3,
          },
          820: {
            slidesPerView: 2,
          },

          320: {
            slidesPerView: 1,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 10,
        }}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <UserCard user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CommunityPageContainer>
  );
};

export default Community;
