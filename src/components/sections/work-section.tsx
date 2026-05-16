import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Результаты
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Цифры и факты</p>
        </div>

        {/* Stats grid */}
        <div
          className={`mb-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {[
            { value: "95%", label: "Точность прогнозов аномалий" },
            { value: "40%", label: "Снижение количества аварий" },
            { value: "8 мес.", label: "Срок окупаемости (ROI)" },
            { value: "6 мес.", label: "Полное внедрение" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-lg border border-foreground/10 bg-foreground/5 px-4 py-5 backdrop-blur-sm md:px-6 md:py-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-2 font-sans text-3xl font-light text-primary md:text-5xl">{stat.value}</div>
              <div className="font-mono text-xs leading-relaxed text-foreground/60 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 md:space-y-6">
          {[
            {
              number: "01",
              title: "Аварии на газопроводах",
              category: "Проблема",
              year: "до 200 млн руб.",
              direction: "left",
            },
            {
              number: "02",
              title: "Инсорсинг разработки",
              category: "Альтернатива",
              year: "от 200 млн / 3 года",
              direction: "right",
            },
            {
              number: "03",
              title: "GasAI Insight",
              category: "Решение",
              year: "70–90 млн / 6 мес.",
              direction: "left",
            },
          ].map((item, i) => (
            <CompareCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CompareCard({
  item,
  index,
  isVisible,
}: {
  item: { number: string; title: string; category: string; year: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  const isGasAI = index === 2

  return (
    <div
      className={`group flex items-center justify-between border-b py-4 transition-all duration-700 hover:border-foreground/20 md:py-5 ${
        isGasAI ? "border-primary/40" : "border-foreground/10"
      } ${getRevealClass()}`}
      style={{
        transitionDelay: `${300 + index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className={`font-mono text-sm transition-colors md:text-base ${isGasAI ? "text-primary/70" : "text-foreground/30 group-hover:text-foreground/50"}`}>
          {item.number}
        </span>
        <div>
          <h3 className={`mb-1 font-sans text-xl font-light transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl ${isGasAI ? "text-primary" : "text-foreground"}`}>
            {item.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{item.category}</p>
        </div>
      </div>
      <span className={`font-mono text-xs md:text-sm ${isGasAI ? "text-primary/80" : "text-foreground/30"}`}>{item.year}</span>
    </div>
  )
}
