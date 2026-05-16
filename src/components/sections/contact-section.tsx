import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", company: "", phone: "", email: "" })
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-6xl lg:text-7xl">
                Готовы
                <br />
                снизить риски?
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Получите расчёт ROI для вашего объекта</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <a
                href="mailto:info@gasai.ru"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Mail" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-primary md:text-xl">
                  info@gasai.ru
                </p>
              </a>

              <a
                href="tel:+74951234567"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Phone" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-primary md:text-xl">
                  +7 (495) 123-45-67
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Офис</span>
                </div>
                <p className="text-base text-foreground md:text-xl">Москва, Россия</p>
              </div>

              {/* Pricing hint */}
              <div
                className={`mt-4 rounded-lg border border-foreground/10 bg-foreground/5 p-4 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <p className="mb-1 font-mono text-xs text-foreground/50">Тарифы</p>
                <p className="text-sm text-foreground/80">Пилотный проект — до <span className="text-primary font-medium">50 млн руб.</span></p>
                <p className="text-sm text-foreground/80">Полное внедрение — <span className="text-primary font-medium">70–90 млн руб.</span></p>
                <p className="mt-1 font-mono text-xs text-foreground/50">Индивидуальный расчёт ROI для вашего объекта</p>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {[
                { key: "name", label: "Имя и должность", placeholder: "Главный инженер Иванов И.И.", delay: "200ms", type: "text" },
                { key: "company", label: "Компания", placeholder: "ООО «Газпром трансгаз Москва»", delay: "300ms", type: "text" },
                { key: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__", delay: "400ms", type: "tel" },
                { key: "email", label: "Email", placeholder: "engineer@company.ru", delay: "500ms", type: "email" },
              ].map((field) => (
                <div
                  key={field.key}
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: field.delay }}
                >
                  <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    required={field.key !== "company"}
                    className="w-full border-b border-foreground/20 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary/60 focus:outline-none md:py-2 md:text-base"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div
                className={`pt-2 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Получить расчёт ROI"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-sm text-primary">Заявка отправлена! Свяжемся в течение 24 часов.</p>
                )}
                <p className="mt-3 text-center font-mono text-xs text-foreground/40">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
