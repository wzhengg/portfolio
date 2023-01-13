type Props = {
  name: string;
};

function SectionHeading({ name }: Props) {
  return (
    <h1 className="mb-8 text-4xl font-semibold text-neutral-50 lg:mb-12 lg:text-5xl">
      {name}
    </h1>
  );
}

export default SectionHeading;
