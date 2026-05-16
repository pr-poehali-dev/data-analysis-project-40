import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-5xl lg:text-6xl">
                Не только ИИ,
                <br />
                но и
                <br />
                <span className="text-primary">люди</span>
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                Система «Экспертный контроль» ускоряет выход новичков на позицию диспетчера на 30–40% и формирует объективный KPI надёжности для каждого специалиста.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                Платформа готова к интеграции с SCADA-системами, «1С» и корпоративными BI — без переписывания инфраструктуры.
              </p>

              {/* Testimonial */}
              <div
                className={`mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <p className="mb-3 text-sm italic leading-relaxed text-foreground/80 md:text-base">
                  «Точность прогнозов превзошла ожидания. Пилотный проект окупился за полгода.»
                </p>
                <p className="font-mono text-xs text-primary">— Главный инженер, ООО «Газпром трансгаз»</p>
              </div>
            </div>
          </div>

          {/* Right side — stats */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            {[
              { value: "150 млн", label: "Экономия в год", sublabel: "Подтверждено пилотными проектами", direction: "right" },
              { value: "50 млн", label: "Пилотный проект", sublabel: "Полное внедрение: 70–90 млн руб.", direction: "left" },
              { value: "200+", label: "Параметров мониторинга", sublabel: "Компрессоры, ГРС, линейная часть, ПХГ", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-primary/40 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-primary md:text-5xl lg:text-6xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-lg">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/50">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-12 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Заказать пилотный проект
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
            Смотреть преимущества
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
