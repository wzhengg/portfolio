import { useState } from 'react';
import { Contact } from '../contacts-data';

export function ContactTag({ name, link, display }: Contact) {
  const [hover, setHover] = useState(false);

  return (
    <div className="my-3">
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="text-neutral-300 lg:text-lg"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? display : name}
      </a>
    </div>
  );
}

export default ContactTag;
