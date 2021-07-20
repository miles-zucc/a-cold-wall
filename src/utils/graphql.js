import gql from "graphql-tag";

const image = `
  file {
    altText
    caption
    sourceUrl(size: LARGE)
    sizes(size: LARGE)
    srcSet
    mediaItemUrl
    mediaDetails {
      width
      height
    }
  }
`;

const media = `
  file {
    sourceUrl
    srcSet
    mediaType
  }
`;

const link = `
  link {
    label
    url
  }
`;

const product = `
  product {
    ... on Product {
      id
      title
      product {
        images {
          image {
            altText
            caption
            sourceUrl(size: LARGE)
            sizes(size: LARGE)
            srcSet
            mediaItemUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;

export const imageDetailsFragment = gql`
  fragment ImageDetails on MediaItem {
    ${image}
  }
`;

export const mediaDetailsFragment = gql`
  fragment MediaDetails on MediaItem {
    ${media}
  }
`;

export const introductionFragment = gql`
  fragment IntroductionFragment on Persona {
    introduction {
      body
    }
  }
`;

export const audioNoteFragment = gql`
  fragment AudioNoteFragment on Persona {
    audioNote {
      audioTitle
      audioBody
      audioFile {
        mimeType
        mediaItemUrl
      }
    }
  }
`;

const sectionDetails = `
  sections {
    ... on Persona_Layout_categories_Sections_Gallery {
      title
      body
      fieldGroupName
      files {
        ${media}
        ${product}
      }
      ${link}
    }
    ... on Persona_Layout_categories_Sections_Diptych {
      body
      fieldGroupName
      title
      files {
        ${media}
        ${product}
      }
      ${link}
    }
    ... on Persona_Layout_categories_Sections_Slider {
      body
      fieldGroupName
      title
      files {
        ${media}
        ${product}
      }
      ${link}
    }
    ... on Persona_Layout_categories_Sections_DraggableSlider {
      body
      fieldGroupName
      title
      files {
        ${media}
        ${product}
      }
      ${link}
    }
  }
`;

const layoutDetails = `
  categories {
    title
    body
    ${sectionDetails}
  }
`;

export const layoutFragment = gql`
  fragment Layout on Persona {
    layout {
      ${layoutDetails}
    }
  }
`;
