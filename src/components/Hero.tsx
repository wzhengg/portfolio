import styled from 'styled-components';

const Name = styled.h1`
  font-size: 4em;
  font-weight: bolder;
  padding: 4rem 0;

  @media (min-width: 1024px) {
    font-size: 6em;
  }
`;
function Hero() {
  return <Name>William Zheng</Name>;
}

export default Hero;
