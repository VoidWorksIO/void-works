import { ProjectCard } from '@/components/project-card'
import { products } from '@/config/products'


export function ProjectsSection(): React.ReactNode {
  const count = String(products.length).padStart(2, '0')

  return (
    <section id="projects" className="pb-6">
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-6">
        <h2 className="font-mono text-xs/normal font-medium tracking-[0.12em] text-muted-foreground uppercase">
          Projects
        </h2>
        <span className="font-mono text-xs/normal text-muted-foreground">{count}</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 pt-8">
        {products.map((product, index) => (
          <ProjectCard key={product.name} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
