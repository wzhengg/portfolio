import styled from 'styled-components';
import { Contact } from '../contacts-data';

const Tag = styled.div`
  padding: 0.5rem 0;
`;

const Anchor = styled.a`
  color: #d4d4d4;
  text-decoration: none;

  &:hover > span {
    display: inline;
    color: #f5f5f5;
  }
`;

const HiddenText = styled.span`
  display: none;
`;

export function ContactTag({ name, link, display }: Contact) {
  return (
    <Tag>
      <Anchor href={link} target="_blank" rel="noreferrer noopener">
        {name}
        <HiddenText>{`: ${display}`}</HiddenText>
      </Anchor>
    </Tag>
  );
}

export default ContactTag;
