import { Project } from '../projects-data';

function ProjectCard({
  name,
  description,
  time,
  image,
  skillIcons,
  codeLink,
}: Project) {
  return (
    <div className="grid-cols-5 items-center gap-4 lg:grid">
      <img src={image} className="col-span-3" />
      <div className="col-span-2 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-zinc-600 dark:text-zinc-200 md:text-3xl">
            {name}
          </h2>
          {skillIcons.map((icon) => (
            <img
              src={icon}
              key={icon}
              className="h-4 transition-transform hover:scale-125 lg:h-5"
            />
          ))}
        </div>
        <p className="my-1 text-lg text-zinc-500 dark:text-zinc-400">{time}</p>
        <p className="my-1 max-w-sm text-lg text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
        {codeLink ? (
          <a href={codeLink} target="_blank" rel="noreferrer noopener">
            <button
              type="button"
              className="my-2 rounded-md border border-zinc-600 py-2 px-4 transition-colors hover:bg-zinc-600 hover:text-zinc-50 dark:border-zinc-200 dark:hover:bg-zinc-200 dark:hover:text-zinc-800"
            >
              Code
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectCard;
