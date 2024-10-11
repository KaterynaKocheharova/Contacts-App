import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import Text from "../../components/common/Text/Text";
import TelephoneIcons from "../../components/TelephoneIcons/TelephoneIcons";
import { Wave } from "react-animated-text";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Section type="home-page">
      <Container>
        <div className={css.flex}>
          <TelephoneIcons
            iconListClass="home-list"
            iconClass="large"
            iconsNumber={1}
          />
          <div>
            <Text isCentered accented isAnimated>
              <Wave
                text={`Welcome to the contacts app!`}
                effect="verticalFadeIn"
              />
            </Text>
            <Text isCentered>
              You can register, log in, and conveniently keep your contacts
              here.
            </Text>
          </div>
          <TelephoneIcons
            iconListClass="home-list"
            iconClass="large"
            iconsNumber={1}
          />
        </div>
      </Container>
    </Section>
  );
};

export default HomePage;
