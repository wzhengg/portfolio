import { Skill } from '../skills-data';

function SkillTag({ name, icons }: Skill) {
  return (
    <span className="flex items-center gap-2 py-1">
      <p className="text-zinc-500 dark:text-zinc-300 lg:text-lg">{name}</p>
      <div className="flex gap-1">
        {icons.map((icon) => (
          <img
            src={icon}
            alt={name}
            key={icon}
            className="h-5 transition-transform hover:scale-125 lg:h-6"
          />
        ))}
      </div>
    </span>
  );
}

export default SkillTag;
