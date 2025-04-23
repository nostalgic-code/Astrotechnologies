import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-4xl font-semibold lg:text-5xl">Pricing That Grows With Your Business</h1>
          <p className="text-white/80">
            We build client portals, internal tools, and automation workflows to help your business scale — fast.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:mt-20">
          {/* Starter Plan */}
          <Card className="flex flex-col bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle className="font-medium">Starter</CardTitle>
              <span className="my-3 block text-2xl font-semibold">ZAR0 / mo</span>
              <CardDescription className="text-sm">For solo founders or early-stage startups</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed border-zinc-700" />
              <ul className="space-y-3 text-sm">
                {[
                  'Access to Portal Template',
                  'Standard Support',
                  'Basic Analytics Dashboard',
                  '5GB Cloud Storage'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full border-white text-black">
                <Link to="/get-started">Start Free</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Growth Plan */}
          <Card className="relative bg-zinc-800 text-white border border-purple-600 shadow-lg">
            <span className="absolute inset-x-0 -top-3 mx-auto w-fit rounded-full bg-gradient-to-r from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-black shadow">
              Most Popular
            </span>

            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">Growth</CardTitle>
                <span className="my-3 block text-2xl font-semibold">ZAR4,000 / mo</span>
                <CardDescription className="text-sm">Custom portal & automation flows</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed border-zinc-700" />
                <ul className="space-y-3 text-sm">
                  {[
                    'Everything in Starter',
                    'Custom Portal Design',
                    'Workflow Automation',
                    'Admin Dashboard Access',
                    '10GB Cloud Storage',
                    'Monthly Feature Updates',
                    '1 Custom Integration',
                    'Priority Bug Fixes'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-4 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>

          {/* Scale Plan */}
          <Card className="flex flex-col bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle className="font-medium">Scale</CardTitle>
              <span className="my-3 block text-2xl font-semibold">ZAR6,000+ / mo</span>
              <CardDescription className="text-sm">For high-growth teams or enterprise</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed border-zinc-700" />
              <ul className="space-y-3 text-sm">
                {[
                  'Everything in Growth',
                  'Multi-user Roles & Access',
                  'Custom Reporting & Analytics',
                  'Priority Roadmap Input',
                  'Dedicated Dev Support',
                  'SLA + Custom Onboarding',
                  'Unlimited Cloud Storage',
                  'Advanced Security Controls'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-4 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full border-white text-black">
                <Link to="/contact-sales">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
