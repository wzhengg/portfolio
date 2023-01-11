import styled from 'styled-components';

type Props = {
  name: string;
};

const Heading = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
`;

function SectionHeading({ name }: Props) {
  return <Heading>{name}</Heading>;
}

export default SectionHeading;
