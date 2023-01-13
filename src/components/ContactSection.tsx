import Section from './reusable/SectionContainer';
import Heading from './reusable/SectionHeading';
import ContactTag from './ContactTag';
import { contactsData } from '../contacts-data';

function ContactSection() {
  return (
    <Section>
      <Heading name="Contact" />
      <p className="mb-4 text-xl text-neutral-100 lg:text-2xl">
        Don't hesitate to connect with me or send me a message!
      </p>
      {contactsData.map(({ name, link, display }) => (
        <ContactTag name={name} link={link} display={display} key={display} />
      ))}
    </Section>
  );
}

export default ContactSection;
