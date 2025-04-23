import { Card, CardContent, CardHeader } from '../../src/components/ui/card'
import { Bot, Workflow, Globe, ShieldCheck } from 'lucide-react'

export default function Features() {
    return (
        <section className="bg-black py-16 md:py-32 dark:bg-black">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-white text-4xl font-semibold lg:text-5xl">Smarter Solutions for Modern Businesses</h2>
                    <p className="mt-4 text-white">From AI agents to beautiful websites — we build tools that automate, scale, and support your growth.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Bot className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-black">AI Agents for Business</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-black">We build intelligent AI agents that automate customer service, lead gen, and internal ops — 24/7.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Workflow className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-black">Custom Workflows</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm text-black">Simplify complex processes with automation workflows built for your exact business model.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Globe className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-black">Web Design & Development</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm text-black">Modern websites that engage users, tell your story, and convert — built with care & speed.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ShieldCheck className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium text-black">Managed IT Services</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm text-black">From hosting to hardware — we handle the tech so you can focus on business, not IT headaches.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

const CardDecorator = ({ children }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
