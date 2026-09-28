export function CTASection() {
  return (
    <section className="section-contained pb-20">
      <div className="rounded-[28px] bg-gradient-to-r from-secondary-900 via-secondary-800 to-primary-base p-8 text-white shadow-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100">Ready to grow faster?</div>
            <h2 className="text-4xl tracking-[-0.06em] text-white">Launch a workforce growth engine your frontline teams want to use.</h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <button className="btn-primary bg-white px-6 py-3 text-base text-secondary-900 hover:bg-neutral-100">
              Book demo
            </button>
            <button className="rounded-md border border-white/40 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10">
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
