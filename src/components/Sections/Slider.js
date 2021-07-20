import React, { useCallback, useState } from "react";
import styled from "styled-components";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageOverlay from "@/components/Overlay/ImageOverlay";

// install Swiper components
SwiperCore.use([Pagination]);

const Slider = ({ title, body, link, files, id }) => {
  const [overlay, setOverlay] = useState(false);
  const [overlayItem, setOverlayItem] = useState(false);

  const onClick = useCallback(image => {
    setOverlayItem(image);
    setOverlay(true);
  });

  return (
    <>
      <Container id={id}>
        <Swiper pagination={{ clickable: true }} className="full-width">
          {files &&
            files.map((item, index) => (
              <SwiperSlide key={`slide-${index}`} spacebetween={0}>
                <SlideAnchor onClick={() => onClick(item)}>
                  <Image src={item.file.sourceUrl} alt="" />
                </SlideAnchor>
              </SwiperSlide>
            ))}
        </Swiper>

        {title && <Title>{title}</Title>}
        {body && <Paragraph dangerouslySetInnerHTML={{ __html: body }} />}
        {link && link.url && (
          <LinkContainer>
            <Anchor
              href={link.url ? link.url : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Anchor>
          </LinkContainer>
        )}
      </Container>
      <ImageOverlay
        {...overlayItem}
        visible={overlay}
        setOverlay={setOverlay}
      />
    </>
  );
};

const Container = styled.div`
  ${props => `
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    margin: 0 -${props.theme.margins.layoutHorizontal};
    margin-bottom: 55px;

    ${props.theme.mediaQueries.fromTablet} {
      grid-template-columns: repeat(12, 1fr);
      margin-bottom: 125px;
    }
    ${props.theme.mediaQueries.fromSmallDesktop} {
      margin-bottom: 195px;
    }
    ${props.theme.mediaQueries.fromLargeDesktop} {
      margin-bottom: 145px;
    }
  `}
`;

const SlideAnchor = styled.div`
  ${props => `
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.div`
  ${props => `
    position: absolute;
    bottom: 10px;
    right: 10px;
    ${props.theme.typography.navigation};
    text-transform: uppercase;
    cursor: pointer;
  `}
`;

const Title = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: ${props.theme.margins.layoutHorizontal};
    margin-right: ${props.theme.margins.layoutHorizontal};
    text-transform: uppercase;
  `}
`;

const Paragraph = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: ${props.theme.margins.layoutHorizontal};
    margin-right: ${props.theme.margins.layoutHorizontal};

    ${props.theme.mediaQueries.fromTablet} {
      grid-column: 1 / 6;
    }
  `}
`;

const LinkContainer = styled.div`
  ${props => `
    grid-column: 1 / -1;
    margin-right: ${props.theme.margins.layoutHorizontal};
    margin-left: ${props.theme.margins.layoutHorizontal};
    
    ${props.theme.mediaQueries.fromTablet} {
      grid-column: 1 / 6;
    }
  `}
`;

const Anchor = styled.a`
  ${props => `
    margin-top: 10px;
    margin-bottom: 10px;
    ${props.theme.typography.navigation};
    color: ${props.theme.colors.body};
    text-transform: uppercase;
    cursor: pointer;
    
    text-decoration: none;
    border-bottom: solid 1px ${props.theme.colors.body}
  `}
`;

export default Slider;
