import Section from './Section';

const agendaItems = [
  'Section 1: Introduction to RAG and LLM Fine-Tuning (20 mins)',
  'Section 2: Lab1: RAG pipeline (30 mins)',
  'Section 3: Lab 2: LLM fine-tuning (30 mins)',
  'Break (10 mins)',
  'Section 4: The Pros and Cons of RAG and Fine-tuning (30 mins)',
  'Section 5: Lab3: RAG + Fine-tuning and Benchmarking (45 mins)',
  'Section 6: Summary and Q&A (15 mins)',
];

const Agenda = () => {
  return (
    <Section title="Agenda">
      <ul>
        {agendaItems.map((item, index) => (
          <li key={index} className="list-disc ml-4 text-lg py-2">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Agenda;
