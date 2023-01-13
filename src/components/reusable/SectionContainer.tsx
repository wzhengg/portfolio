import { PropsWithChildren } from 'react';

function SectionContainer({ children }: PropsWithChildren) {
  return <section className="py-16">{children}</section>;
}

export default SectionContainer;
