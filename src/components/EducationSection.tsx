import Section from './reusable/SectionContainer';
import Heading from './reusable/SectionHeading';

function EducationSection() {
  return (
    <Section>
      <Heading name="Education" />
      <div className="items-center lg:flex">
        <img
          src="icons/wvu.svg"
          alt="wvu-logo"
          className="my-4 mx-auto h-24 transition-transform hover:scale-110 lg:h-60"
        />
        <div className="mx-auto">
          <h2 className="text-2xl font-medium text-neutral-100">
            West Virginia University
          </h2>
          <p className="mx-auto max-w-lg py-2 text-lg text-neutral-200">
            August 2020 - May 2024
          </p>
          <p className="mx-auto max-w-lg py-2 text-lg text-neutral-200">
            B.S. Computer Science & Computer Engineering
          </p>
          <p className="mx-auto max-w-lg py-2 text-lg text-neutral-200">
            GPA: 4.0
          </p>
          <p className="mx-auto max-w-lg py-2 text-lg text-neutral-200">
            {'Courses: '}
            <span className="font-light text-neutral-400">
              Data Structures & Algorithms, Operating Systems, Software
              Engineering, Programming Languages, Artificial Intelligence, Data
              & Computer Communications, Database Design, Discrete Math
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}

export default EducationSection;
