import React, { useState } from 'react';

const AccordionItem = ({ id, title, children, isOpen, onToggle }) => {
    return (
        <div className="rounded-base border border-default overflow-hidden shadow-xs">
            <h2 id={`accordion-collapse-heading-${id}`}>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 ${isOpen ? 'text-heading bg-neutral-secondary-medium' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-collapse-body-${id}`}
                    onClick={() => onToggle(id)}
                >
                    <span>{title}</span>
                    <svg
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m5 15 7-7 7 7"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-collapse-body-${id}`}
                className={`${isOpen ? 'block' : 'hidden'} border border-s-0 border-e-0 border-t-0 border-b-default`}
                aria-labelledby={`accordion-collapse-heading-${id}`}
            >
                <div className="p-4 md:p-5 text-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Accordion = () => {
    const [openId, setOpenId] = useState(1);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="space-y-2 max-w-3xl mx-auto">
            <AccordionItem id={1} title="What is React?" isOpen={openId === 1} onToggle={toggle}>
                <p className="mb-2">React is a popular JavaScript library for building user interfaces, especially for single-page applications.</p>
                <p>
                    It allows developers to create reusable UI components and efficiently update and render only the necessary elements.
                </p>
            </AccordionItem>

            <AccordionItem id={2} title="Why use Tailwind CSS?" isOpen={openId === 2} onToggle={toggle}>
                <p className="mb-2">
                    Tailwind CSS is a utility-first CSS framework that makes styling simpler and faster with pre-defined classes.
                </p>
                <p>
                    It promotes consistency and responsiveness without writing custom CSS for every component.
                </p>
            </AccordionItem>

            <AccordionItem id={3} title="How does React work with Tailwind?" isOpen={openId === 3} onToggle={toggle}>
                <p className="mb-2">
                    React components can include Tailwind classes directly in their JSX, enabling developers to build styled components quickly.
                </p>
                <p className="mb-2">
                    This combination allows for rapid UI development while keeping styles maintainable.
                </p>
                <p className="mb-2">To learn more, explore documentation for both React and Tailwind CSS.</p>
            </AccordionItem>
        </div>
    );
};

export default Accordion;
