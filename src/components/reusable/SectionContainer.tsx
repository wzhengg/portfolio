import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  className?: string;
}

const Section = styled.section`
  padding: 4rem 0;
`;

function SectionContainer({ className, children }: Props) {
  return <Section className={className}>{children}</Section>;
}

export default SectionContainer;
