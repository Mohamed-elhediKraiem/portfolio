import { TimelineCard } from "./TimelineCard";

type TimelineItemProps = {
  side: "left" | "right";
  title: string;
  date: string;
  description: string;
};

export const TimelineItem = ({
  side,
  title,
  date,
  description,
}: TimelineItemProps) => {
  const isLeft = side === "left";
  const isEducation = !isLeft;

  // 🎨 Style des points en version "noir & blanc élégante"
  const pointGradient = isEducation
    ? "from-gray-400 via-gray-300 to-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.1)]" // éducation → plus clair
    : "from-neutral-800 via-neutral-600 to-neutral-800 shadow-[0_0_15px_rgba(0,0,0,0.2)]"; // expérience → plus foncé

  const borderColor = isEducation ? "border-gray-200" : "border-neutral-300";

  return (
    <div className="relative flex flex-col md:flex-row w-full items-center md:items-start">
      {/* 🩶 Côté gauche (expériences) */}
      <div className="hidden md:flex w-1/2 justify-end items-center gap-12 text-right">
        {isLeft && (
          <>
            <TimelineCard
              title={title}
              date={date}
              description={description}
              type="experience"
            />
            <div
              className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full 
              bg-gradient-to-b ${pointGradient} border-[3px] ${borderColor}
              transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] -mr-3`}
            />
          </>
        )}
      </div>

      {/* 🤍 Côté droit (éducation) */}
      <div className="hidden md:flex w-1/2 justify-start items-center gap-12 text-left">
        {!isLeft && (
          <>
            <div
              className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full 
              bg-gradient-to-b ${pointGradient} border-[3px] ${borderColor}
              transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] -ml-3`}
            />
            <TimelineCard
              title={title}
              date={date}
              description={description}
              type="education"
            />
          </>
        )}
      </div>

      {/* 📱 Mobile : stack */}
      <div className="flex md:hidden w-full mt-6">
        <TimelineCard
          title={title}
          date={date}
          description={description}
          type={isEducation ? "education" : "experience"}
        />
      </div>
    </div>
  );
};
