import { useState } from "react";

const faqs = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Yes, you can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "Instructors provide guidance through discussion forums, live sessions, and direct messaging support.",
  },
  {
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Most courses are self-paced, allowing you to learn on your own schedule.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Some advanced courses may require prior knowledge. Please check the course description for details.",
  },
  {
    question: "Can I download the course materials for offline access?",
    answer:
      "Yes, downloadable resources are available for selected courses.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
        <h1 className="text-4xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Find answers to common questions about our courses and learning
          experience.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-gray-900 font-medium text-lg">
                  {faq.question}
                </span>
                <span className="text-gray-500 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">
            Still have questions?
          </h3>
          <p className="mt-3 text-gray-600">
            Our support team is here to help you.
          </p>
          <p className="mt-2 font-medium text-blue-600">
            support@unicuscampus.com
          </p>
        </div>
      </section>
    </div>
  );
}
