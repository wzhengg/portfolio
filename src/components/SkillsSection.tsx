import Section from './reusable/SectionContainer';
import Heading from './reusable/SectionHeading';
import SkillsCard from './SkillsCard';
import {
  languagesData,
  frameworksData,
  miscellaneousData,
} from '../skills-data';

function SkillsSection() {
  return (
    <Section>
      <Heading name="Skills" />
      <div className="justify-between lg:flex">
        <SkillsCard title="Languages" skills={languagesData} />
        <SkillsCard
          title="Libraries, Frameworks, Databases"
          skills={frameworksData}
        />
        <SkillsCard title="Miscellaneous" skills={miscellaneousData} />
      </div>
    </Section>
  );
}

export default SkillsSection;
