import {Disclosure} from "@headlessui/react";
import {MinusSmallIcon, PlusSmallIcon} from "@heroicons/react/24/outline";
import {EmptyState} from "@/templates/Globals/elements";

export default function QuestionList({ faqs }: any) {
  return (
      <>
          {faqs.length === 0 ? (
              <div className="grid w-full">

                      <EmptyState text={"Aucune FAQ pour le moment"}/>

              </div>
          ) : (
          <div className="">

                  <dl className=" space-y-6 divide-y dark:divide-white/10 divide-gray-200">
                      {faqs.map((faq) => (
                          <Disclosure as="div" key={faq.question} className="pt-6">
                              {({open}) => (
                                  <>
                                      <dt>
                                          <Disclosure.Button
                                              className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                                                <span
                                                    className="heading-6 ">{faq.question}</span>
                                              <span className="ml-6 flex h-7 items-center">
                                                  {open ? (
                                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                                                  ) : (
                                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                                                  )}
                                              </span>
                                          </Disclosure.Button>
                                      </dt>
                                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                          <p className="body-3 leading-7 text-gray-700 dark:text-gray-400">{faq.answer}</p>
                                      </Disclosure.Panel>
                                  </>
                              )}
                          </Disclosure>
                      ))}
                  </dl>

          </div>
            )}
      </>
  );
}
