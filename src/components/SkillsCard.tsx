import SkillTag from './SkillTag';
import { Skill } from '../skills-data';

type Props = {
  title: string;
  skills: Skill[];
};

function SkillsCard({ title, skills }: Props) {
  return (
    <div className="my-6 mx-auto flex max-w-xs flex-1 flex-col items-center rounded bg-neutral-700 py-8 lg:max-w-[19rem]">
      <h2 className="my-2 text-xl font-semibold text-neutral-100 lg:text-2xl">
        {title}
      </h2>
      {skills.map(({ name, icons }) => (
        <SkillTag name={name} icons={icons} key={name} />
      ))}
    </div>
  );
}

export default SkillsCard;
