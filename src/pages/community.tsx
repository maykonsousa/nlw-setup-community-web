import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "../components/Header";
import { UserCard } from "../components/UserCard";
import { UserContext } from "../contexts/UserContext";
import { CommunityPageContainer } from "../styles/pages/Community.styles";

const Community = () => {
  const { users } = React.useContext(UserContext);
  return (
    <CommunityPageContainer>
      <Header />
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 10,
        }}
        slidesPerView={3}
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
