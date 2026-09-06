"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="faq-icon">
                <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
      <style>{`
        .faq-list { max-width: 800px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid var(--color-border); }
        .faq-question {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 1.25rem 0; background: none; border: none; cursor: pointer;
          font-size: 1rem; font-weight: 600; color: var(--color-heading); text-align: left;
          font-family: inherit; gap: 1rem;
        }
        .faq-question:hover { color: var(--color-primary); }
        .faq-icon { flex-shrink: 0; transition: transform 0.2s ease; }
        .faq-item.open .faq-icon { transform: rotate(180deg); }
        .faq-answer { padding-bottom: 1.25rem; color: var(--color-text-muted); line-height: 1.7; }
      `}</style>
    </div>
  );
}
