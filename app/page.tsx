import Agenda from './components/Agenda';
import Hero from './components/Hero';
import Section from './components/Section';
import Speakers from './components/Speakers';
import TextContainer from './components/TextContainer';

export default function Home() {
  return (
    <div className="pb-20">
      <Hero
        title="Domain-Driven LLM Development: Insights into RAG and Fine-Tuning Practices"
        subtitle="Hands On Tutorials at 2024 ACM SIGKDD International Conference on Knowledge
      Discovery and Data Mining, Barcelona, Spain"
        center
      />
      <Section title="Abstract">
        <TextContainer
          text="To improve Large Language Model (LLM) performance on domain specific applications,
          ML developers often leverage Retrieval Augmented Generation (RAG) and LLM Fine-Tuning.
          RAG extends the capabilities of LLMs to specific domains or an organization's internal
          knowledge base, without the need to retrain the model. On the other hand, Fine-Tuning
          approach updates LLM weights with domain-specific data to improve performance on specific
          tasks. The fine-tuned model is particularly effective to systematically learn new
          comprehensive knowledge in a specific domain that is not covered by the LLM pre-training.
          This tutorial walks through the RAG and Fine-Tuning techniques, discusses the insights of
          their advantages and limitations, and provides best practices of adopting the methodologies
          for the LLM tasks anduse cases. The hands-on labs demonstrate the advanced techniques to
          optimize the RAG and fine-tuned LLM architecture that handles domain specific LLM tasks.
          The labs in the tutorial are designed by using a set of open-source python libraries to
          implement the RAG and fine-tuned LLM architecture."
        />
      </Section>
      <Agenda />
      <Speakers />
      <Section title="Contents">
        <TextContainer text="Slides: Coming Soon" />
        <TextContainer text="Lab Notebooks: Coming Soon" />
      </Section>
    </div>
  );
}
