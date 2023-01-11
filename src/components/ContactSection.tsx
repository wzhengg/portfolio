import styled from 'styled-components';
import SectionContainer from './reusable/SectionContainer';
import SectionHeading from './reusable/SectionHeading';
import { contactsData } from '../contacts-data';
import ContactTag from './ContactTag';

const ContactsContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.3em;
  margin-bottom: 1rem;
`;

function ContactSection() {
  return (
    <ContactsContainer>
      <SectionHeading name="Contact" />
      <Text>Don't hesitate to connect with me or send me a message!</Text>
      {contactsData.map(({ name, link, display }) => (
        <ContactTag name={name} link={link} display={display} />
      ))}
    </ContactsContainer>
  );
}

export default ContactSection;
