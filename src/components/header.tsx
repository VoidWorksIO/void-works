import { CONTACT_HREF } from '@/config/links'


const NAV_LINK_CLASS = 'text-muted-foreground transition-colors hover:text-foreground'

function Header(): React.ReactNode {
  return (
    <header className="flex items-center justify-between gap-6 py-7">
      <a
        href="#top"
        className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em] text-foreground"
      >
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full bg-brand shadow-[0_0_14px_rgba(91,108,240,0.7)]"
        />
        Void Works
      </a>
      <nav className="flex gap-7 font-mono text-xs/normal tracking-[0.06em] uppercase">
        <a href="#projects" className={NAV_LINK_CLASS}>Projects</a>
        <a href={CONTACT_HREF} className={NAV_LINK_CLASS}>Contact</a>
      </nav>
    </header>
  )
}

export { Header }
