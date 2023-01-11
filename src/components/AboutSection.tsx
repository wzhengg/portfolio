import styled from 'styled-components';
import SectionContainer from './reusable/SectionContainer';
import SectionHeading from './reusable/SectionHeading';

const AboutContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionBody = styled.div`
  @media (min-width: 480px) {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;

const Image = styled.div`
  font-size: 12em;
  display: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Text = styled.p`
  max-width: 480px;
  font-size: 1.2em;
  color: #f5f5f5;
  text-align: left;
`;

function AboutSection() {
  return (
    <AboutContainer>
      <SectionHeading name="About Me" />
      <SectionBody>
        <Text>
          Hi! 👋 I'm an aspiring software engineer with an interest in technical
          challenges including complex algorithms and software scalability,
          architecture, and design. I love learning new programming languages
          and tech stacks, so I have a hard time sticking to any specific field,
          but for now, I'm trying my best to get good at full-stack web
          development. When I'm not coding, you can find me at the gym or
          reading a book. 🤓
        </Text>
        <Image>👨🏻‍💻</Image>
      </SectionBody>
    </AboutContainer>
  );
}

export default AboutSection;
