import Section from './reusable/SectionContainer';
import Heading from './reusable/SectionHeading';

function AboutSection() {
  return (
    <Section>
      <Heading name="About Me" />
      <div className="flex items-center justify-around">
        <p className="max-w-xl text-lg text-neutral-100 lg:text-left lg:text-xl">
          Hi! 👋 I'm an aspiring software engineer with an interest in the
          practical application of theory to technical challenges such as
          software scalability, architecture, and design. I love learning new
          programming languages and tech stacks, so I have a hard time sticking
          to any specific field, but for now, I'm trying my best to get good at
          full-stack web development. When I'm not coding, you can find me at
          the gym or reading a book.
        </p>
        <p className="hidden text-[12rem] transition-transform hover:scale-110 lg:block">
          👨🏻‍💻
        </p>
      </div>
    </Section>
  );
}

export default AboutSection;
