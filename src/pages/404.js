import {
  Container,
  Heading,
  Paragraph
} from "@/components/Templates/SimplePageTemplate";

function NotFoundPage(props) {
  return (
    <Container>
      <Heading>404</Heading>
      <Paragraph>The link is broken or the page has been moved.</Paragraph>
    </Container>
  );
}

export default NotFoundPage;
