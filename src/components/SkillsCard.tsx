import styled from 'styled-components';
import SkillTag from './SkillTag';
import { Skill } from '../skills-data';

type Props = {
  title: string;
  skillsData: Skill[];
};

const Card = styled.div`
  flex: 1;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #374151;
  padding: 2rem 1rem 2rem 1rem;
  margin: 1.5rem auto;
`;

const Header = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 1rem;
`;

function SkillsCard({ title, skillsData }: Props) {
  return (
    <Card>
      <Header>{title}</Header>
      {skillsData.map((skill) => (
        <SkillTag skillName={skill.name} icons={skill.icons} key={skill.name} />
      ))}
    </Card>
  );
}

export default SkillsCard;
