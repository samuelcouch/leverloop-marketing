import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Section } from "../ui/Section";
import type { FAQItem } from "../../data/features";

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  if (faqs.length === 0) return null;

  return (
    <Section padding="compact" className="!pb-0 !pt-6">
      <div className="rounded-3xl bg-subtle p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-20">
          {/* Left column */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-heading">
              Got a question?
            </h2>
          </div>

          {/* Right column — accordion */}
          <div className="divide-y divide-divider">
            {faqs.map((faq, i) => (
              <Disclosure key={i} as="div">
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between gap-4 py-6 text-left">
                      <span className="font-display text-lg font-semibold text-heading leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white text-body transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <line x1="8" y1="2" x2="8" y2="14" />
                          <line x1="2" y1="8" x2="14" y2="8" />
                        </svg>
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="pb-6 pr-12 text-body leading-relaxed">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}

          </div>
        </div>
      </div>
    </Section>
  );
}
