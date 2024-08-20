import Section from './Section';

const agendaItems = [
  'Section 1: Introduction to RAG and LLM Fine-Tuning (20 mins)',
  'Section 2: Lab setup (10 mins)',
  'Section 3: Lab 1: Advanced Techniques in RAG (40 mins) - Richard Song',
  'Break (10 mins)',
  'Section 4: Lab 2: LLM Fine-Tuning (40 mins) - Yunfei Bai, Rachel Hu ',
  'Break (10 mins)',
  'Section 5: Lab 3: RAG and Fine-Tuned Model Benchmarking (30 mins) - José Cassio dos Santos Junior',
  'Section 6: Conclusion and Q&A (20 mins)',
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
