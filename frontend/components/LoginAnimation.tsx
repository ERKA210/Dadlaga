export default function LoginAnimation() {
  return (
    <div className="flex items-center justify-center gap-8 py-20 bg-gradient-to-b from-blue-50 to-white">
      
      {/* Student */}
      <div className="animate-float">
        <Card
          title="Оюутан"
          desc="Дадлага хайж байна"
          emoji="🎓"
        />
      </div>

      {/* Internship */}
      <div className="animate-floatSlow">
        <Card
          title="Дадлагын газар"
          desc="Бодит туршлага"
          emoji="🏢"
        />
      </div>

      {/* Company */}
      <div className="animate-float">
        <Card
          title="Ажил олгогч"
          desc="Ирээдүйн ажилтан"
          emoji="🤝"
        />
      </div>

    </div>
  );
}

function Card({
  title,
  desc,
  emoji,
}: {
  title: string;
  desc: string;
  emoji: string;
}) {
  return (
    <div className="w-48 rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );
}
