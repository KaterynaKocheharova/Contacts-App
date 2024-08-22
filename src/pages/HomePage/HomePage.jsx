import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import Text from "../../components/common/Text/Text";
import { Wave } from "react-animated-text";

const HomePage = () => {
  return (
    <Section type="home-page">
      <Container>
        <Text isCentered accented isAnimated>
          <Wave
            text={`Welcome to the contacts app!`}
            effect="verticalFadeIn"
          />
        </Text>
        <Text isCentered>
          You can register, log in, and conveniently keep your contacts here.
        </Text>
      </Container>
    </Section>
  );
};

export default HomePage;
