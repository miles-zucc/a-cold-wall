import Login from "@/components/Auth/Login";
import { Container, Title } from "@/components/Templates/AuthPageTemplate";
import useAuthPageRedirection from "@/hooks/useAuthPageRedirection";
import SimpleHeader from "@/components/Header/SimpleHeader";

function AuthPage() {
  // Redirect to homepage if user is already authenticated.
  const cancelled = useAuthPageRedirection();

  // Show page content only if redirection has been cancelled.
  if (!cancelled) {
    return null;
  }

  return (
    <Container>
      <SimpleHeader />

      <Title>
        A-COLD-WALL* PRE-SPRING/SUMMER 21 DIGITAL PRESENTATION. <br />
        <br />
        Please enter your email address below to access the experience:
      </Title>
      <div>
        <Login />
      </div>
    </Container>
  );
}

export default AuthPage;
