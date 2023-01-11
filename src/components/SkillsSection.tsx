import styled from 'styled-components';
import SkillsCard from './SkillsCard';
import {
  languagesData,
  frameworksData,
  miscellaneousData,
} from '../skills-data';

const Section = styled.section`
  padding: 4rem 0;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 1rem;
`;

const CardContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function SkillsSection() {
  return (
    <Section>
      <Heading>Skills</Heading>
      <CardContainer>
        <SkillsCard title="Languages" skillsData={languagesData} />
        <SkillsCard
          title="Libraries, Frameworks, Databases"
          skillsData={frameworksData}
        />
        <SkillsCard title="Miscellaneous" skillsData={miscellaneousData} />
      </CardContainer>
    </Section>
  );
}

export default SkillsSection;
