type TimelineCardProps = {
  title: string;
  date: string;
  description: string;
  type?: "experience" | "education";
};

export const TimelineCard = ({
  title,
  date,
  description,
  type = "experience",
}: TimelineCardProps) => {
  const isExperience = type === "experience";

  // 🎨 Palette élégante pour fond clair
  const borderGlow = isExperience
    ? "border-neutral-300 shadow-[0_0_25px_4px_rgba(0,0,0,0.05)]"
    : "border-gray-300 shadow-[0_0_25px_4px_rgba(0,0,0,0.08)]";

  const accentGradient = isExperience
    ? "from-neutral-800 via-gray-600 to-neutral-800" // expérience → ton foncé
    : "from-gray-600 via-gray-500 to-gray-600"; // éducation → plus clair

  return (
    <div
      className={`relative w-full max-w-4xl p-8 rounded-2xl border ${borderGlow} 
      bg-gradient-to-b from-white via-neutral-50 to-neutral-100 
      backdrop-blur-sm transition-transform duration-300 
      hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]`}
    >
      {/* Accent latéral — position dépend du type */}
      <div
        className={`absolute top-0 h-full w-[10px] bg-gradient-to-b ${accentGradient} 
        ${isExperience ? "left-0 rounded-l-2xl" : "right-0 rounded-r-2xl"}`}
      ></div>

      {/* Contenu */}
      <h3
        className={`text-2xl font-bold mb-2 bg-gradient-to-r ${accentGradient} 
        bg-clip-text text-transparent`}
      >
        {title}
      </h3>

      <p className="text-lg text-neutral-500 mb-4">{date}</p>
      <p className="text-[1.1rem] leading-relaxed text-neutral-800">
        {description}
      </p>

      {/* Effet léger au survol */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-10 
        transition duration-300 bg-gradient-to-r ${accentGradient}`}
      ></div>
    </div>
  );
};
