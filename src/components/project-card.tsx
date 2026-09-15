import type { Product } from '@/config/products'


interface ProjectCardProps {
  product: Product
  index: number
}

export function ProjectCard({ product, index }: ProjectCardProps): React.ReactNode {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="flex flex-col gap-4 rounded-[14px] border border-border bg-card p-7 transition-colors hover:border-white/20">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-white/12 px-2.5 py-1 font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
          {product.tag}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">{number}</span>
      </div>
      <h3 className="text-[25px] leading-[1.2] font-semibold tracking-[-0.02em]">{product.name}</h3>
      <p className="flex-1 leading-[1.6] text-pretty text-body-muted">{product.description}</p>
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 self-start rounded-lg border border-white/14 px-4 py-2.5 text-sm/normal font-semibold transition-colors hover:border-brand hover:text-brand-softer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {product.linkText}
        <span aria-hidden="true" className="text-brand-soft">→</span>
      </a>
    </article>
  )
}
