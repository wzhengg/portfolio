import styled from 'styled-components';
import SectionContainer from './reusable/SectionContainer';
import SectionHeading from './reusable/SectionHeading';

const EducationContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionBody = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 2rem;
  }
`;

const WVULogo = styled.img`
  height: 6rem;
  margin: 1rem 0;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    height: 12rem;
  }
`;

const SchoolName = styled.h2`
  font-size: 1.5em;
  font-weight: 500;
  color: #f5f5f5;
  margin: 1rem 0;
`;

const Detail = styled.p`
  font-size: 1.2em;
  color: #e5e5e5;
  max-width: 480px;
  padding: 0.5rem 0;
`;

const Courses = styled.span`
  font-weight: 300;
  color: #d4d4d4;
`;

function EducationSection() {
  return (
    <EducationContainer>
      <SectionHeading name="Education" />
      <SectionBody>
        <WVULogo src="/icons/wvu.svg" alt="wvu-logo" />
        <div>
          <SchoolName>West Virginia University</SchoolName>
          <Detail>August 2020 - May 2024</Detail>
          <Detail>B.S. Computer Science & Computer Engineering</Detail>
          <Detail>GPA: 4.0</Detail>
          <Detail>
            {'Courses: '}
            <Courses>
              Data Structures & Algorithms, Operating Systems, Software
              Engineering, Programming Languages, Artificial Intelligence, Data
              & Computer Communications, Database Design, Discrete Math
            </Courses>
          </Detail>
        </div>
      </SectionBody>
    </EducationContainer>
  );
}

export default EducationSection;
