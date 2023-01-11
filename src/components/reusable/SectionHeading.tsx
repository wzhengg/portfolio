import styled from 'styled-components';

type Props = {
  name: string;
};

const Heading = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  color: #fafafa;
  margin-bottom: 2rem;
`;

function SectionHeading({ name }: Props) {
  return <Heading>{name}</Heading>;
}

export default SectionHeading;
