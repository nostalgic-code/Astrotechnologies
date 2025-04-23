import { Cpu, Zap } from 'lucide-react'


export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Most small businesses waste time on repetitive tasks, clunky systems, and outdated websites</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                        We’ve been there. That’s why we build AI-powered agents <span className="text-accent-foreground font-bold text-white">and custom automations that work 24/7 — alongside stunning websites and rock-solid IT support.</span> — we build innovative products.
                        </p>
                        <p className="text-muted-foreground">Creating an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Faaast</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Building Lightning fast applications</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Powerful</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Focused on creating powerful products to automate your workflow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div
                            className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1727197587817-6be08db433f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="hidden rounded-[15px] dark:block"
                                alt="payments illustration dark"
                                width={1206}
                                height={612} />
                            <img
                                src="https://plus.unsplash.com/premium_photo-1727197587817-6be08db433f9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-[15px] shadow dark:hidden"
                                alt="payments illustration light"
                                width={1206}
                                height={612} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
