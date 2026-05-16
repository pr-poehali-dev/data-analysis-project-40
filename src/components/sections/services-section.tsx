import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Технология
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Как это работает — 4 шага</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {[
            {
              icon: "Wifi",
              title: "Сбор данных с датчиков",
              description: "IoT-интеграция с оборудованием КС и ПХГ. Данные поступают в реальном времени — температура, давление, вибрация, расход газа.",
              direction: "top",
            },
            {
              icon: "BrainCircuit",
              title: "Предиктивный анализ ИИ",
              description: "Библиотека моделей с газовой спецификой: 40+ алгоритмов, обученных на данных отрасли. Точность прогнозов — 95%.",
              direction: "right",
            },
            {
              icon: "Bell",
              title: "Оповещение диспетчера",
              description: "Мгновенные уведомления об аномалиях с классификацией критичности. Диспетчер получает готовые рекомендации по действиям.",
              direction: "left",
            },
            {
              icon: "GraduationCap",
              title: "Экспертный контроль",
              description: "Адаптивный модуль обучения персонала: ускоряет выход новичков на позицию на 30–40% и формирует объективный KPI надёжности.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { icon: string; title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
          <Icon name={service.icon} fallback="CheckCircle" size={16} />
        </div>
        <div className="h-px flex-1 bg-foreground/10 transition-all duration-300 group-hover:bg-primary/30" />
        <span className="font-mono text-xs text-foreground/40">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-xl font-light text-foreground md:text-2xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/70 md:text-base">{service.description}</p>
    </div>
  )
}