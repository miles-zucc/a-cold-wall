import React, { useEffect } from "react";
import gql from "graphql-tag";
import styled from "styled-components";

import Layout from "@/components/Sections/Layout";
import Video from "@/components/MainVideo";
import Heading from "@/components/Heading";
import AnimateIn from "@/components/AnimateIn";
import Introduction from "@/components/Introduction";
import AudioNote from "@/components/AudioNote";
import { withData } from "@/HOC/withData";
import { withNoSSR } from "@/HOC/withNoSSR";
import {
  introductionFragment,
  audioNoteFragment,
  layoutFragment
} from "@/utils/graphql";
import Header from "@/components/Header";
import MobileHeader from "@/components/Header/MobileHeader";
import LinkBlock from "@/components/LinkBlock";
import { withPrivateAccess } from "@/HOC/withPrivateAccess";
import useMedia from "@/hooks/useMedia";
import { setCategories } from "@/utils/state";
import useGlobalState from "@/hooks/useGlobalState";

function PersonaPage(props) {
  // console.log(props);

  if (!props.data) return null;

  const data = props.data.persona;
  const title = data?.title || null;
  const introduction = data?.introduction || null;
  const audio = data?.audioNote || null;
  const categories = data?.layout?.categories || [];
  const isMobile = useMedia([`(max-width: 728px)`], [true], false);
  const { dispatch } = useGlobalState();

  // Get the categories so we can use them in the menu
  useEffect(() => {
    dispatch(setCategories(categories));
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      <Video />

      <AnimateIn blur>
        <Title>{title}</Title>
      </AnimateIn>
      <Introduction {...introduction} />
      <AudioNote {...audio} />

      {categories.map(category => {
        return (
          <>
            <Heading {...category} id={category.title} />
            <Layout sections={category.sections} />
          </>
        );
      })}

      <LinkBlock text="Index" url="/" />
    </>
  );
}

const Title = styled.div`
  ${props => `
    grid-column: 1 / -1;
    padding-top: 140px;
    margin-bottom: 35px;
    ${props.theme.typography.heading};

    ${props.theme.mediaQueries.fromTablet} {
      grid-column: 1 / 8;
    }
  `}
`;

const query = gql`
  query PersonaPage($id: ID!) {
    persona(id: $id, idType: URI) {
      title
      ...IntroductionFragment
      ...AudioNoteFragment
      ...Layout
    }
  }
  ${introductionFragment}
  ${audioNoteFragment}
  ${layoutFragment}
`;

export default withPrivateAccess(withData(query)(withNoSSR(PersonaPage)));
