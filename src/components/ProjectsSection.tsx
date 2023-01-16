import Section from './reusable/SectionContainer';
import Heading from './reusable/SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../projects-data';

function ProjectsSection() {
  return (
    <Section>
      <Heading name="Projects" />
      {projectsData.map((project) => (
        <ProjectCard
          name={project.name}
          description={project.description}
          time={project.time}
          image={project.image}
          skillIcons={project.skillIcons}
          codeLink={project.codeLink}
          key={project.name}
        />
      ))}
    </Section>
  );
}

export default ProjectsSection;
