import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../src/components/ui/accordion"
  
  export function FAQSection() {
    return (
      <section className="w-full bg-black text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
  
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white">What does AstroTech do?</AccordionTrigger>
              <AccordionContent className="text-white">
                AstroTech helps businesses build AI-powered workflows, applications, and automation systems through modern tools and custom development.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white">Can I integrate it into my existing workflow?</AccordionTrigger>
              <AccordionContent className="text-white">
                Absolutely. Our platform is built to plug into your current setup and streamline it using AI and automation best practices.
              </AccordionContent>
            </AccordionItem>
  
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-white">Do I need to know how to code?</AccordionTrigger>
              <AccordionContent className="text-white">
                Not at all. Whether you’re technical or not, we provide the tools, dashboards, and support to help you build smart solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    )
  }
  