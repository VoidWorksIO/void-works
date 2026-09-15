import { CONTACT_HREF } from '@/config/links'


const BUTTON_CLASS = 'inline-flex items-center rounded-lg px-5 py-3 text-sm/normal font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

function Hero(): React.ReactNode {
  return (
    <section id="top" className="flex max-w-[780px] flex-col gap-[26px] pt-[132px] pb-28">
      <p className="font-mono text-xs/normal tracking-[0.12em] text-brand-soft uppercase">Void Works</p>
      <h1 className="text-[clamp(38px,6vw,68px)] leading-[1.04] font-semibold tracking-[-0.03em] text-balance">
        From browser extensions to mobile apps and web applications, we create tools that solve real-world problems.
      </h1>
      <div className="flex flex-wrap gap-3 pt-2.5">
        <a href="#projects" className={`${BUTTON_CLASS} bg-brand-solid text-white hover:bg-brand-solid-hover`}>
          See what we build
        </a>
        <a href={CONTACT_HREF} className={`${BUTTON_CLASS} border border-white/14 text-foreground hover:border-white/38`}>
          Get in touch
        </a>
      </div>
    </section>
  )
}

export { Hero }
