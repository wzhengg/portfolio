import styled from 'styled-components';

type Props = {
  skillName: string;
  icons: string[];
};

const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Name = styled.p`
  color: #cbd5e1;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const Icon = styled.img`
  height: 1.3rem;
`;

function SkillTag({ skillName, icons }: Props) {
  return (
    <Tag>
      <Name>{skillName}</Name>
      <IconContainer>
        {icons.map((icon) => (
          <Icon src={icon} alt={skillName} key={icon} />
        ))}
      </IconContainer>
    </Tag>
  );
}

export default SkillTag;
