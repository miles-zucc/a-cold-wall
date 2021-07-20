import React, { useState } from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Overlay from "@/components/Overlay/Overlay";

// install Swiper components
SwiperCore.use([Navigation, Thumbs]);

const GalleryOverlay = ({ images, visible, setOverlay }) => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <StyledOverlay visible={visible}>
        {visible && (
          <main>
            {/* Main Swiper: pass thumbs swiper instance */}
            <Swiper thumbs={{ swiper: thumbsSwiper }} grabCursor>
              {images &&
                images.map(({ image }, index) => (
                  <SwiperSlide>
                    <Image
                      className="swiper-slide"
                      key={index}
                      src={image.sourceUrl}
                      sizes={image.sizes}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            {/* Thumbs Swiper: store swiper instance */}
            <Swiper onSwiper={setThumbsSwiper}>{/* ... */}</Swiper>
          </main>
        )}
        <Anchor onClick={() => setOverlay(false)}>CLOSE</Anchor>
      </StyledOverlay>
    </>
  );
};

const StyledOverlay = styled(Overlay)`
  background: #fff;
`;

// const Swiper = styled(SwiperSlider)`
//   ${(props) => `
//     width: 100%;
//     height: 100%;
//     grid-column: 1 / -1;
//   `}
// `;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export default GalleryOverlay;
