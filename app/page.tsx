import Agenda from './components/Agenda';
import Hero from './components/Hero';
import Section from './components/Section';
import Speakers from './components/Speakers';
import TextContainer from './components/TextContainer';

export default function Home() {
  return (
    <div className="pb-20">
      <Hero title="The Pros and Cons of RAG and Fine-tuning" subtitle="Workshop time and date - TBD" center />
      <Section title="Abstract">
        <TextContainer
          text="When building Large Language Model (LLM) applications on domain specific data, there are two prominent methods:
        Retrieval Augmented Generation (RAG) and LLM Fine-Tuning (FT). RAG improves LLM responses by searching external
        knowledge bases outside of its training data sources. RAG extends the capabilities of LLMs to specific domains
        or an organization's internal knowledge base, without the need to retrain the model. On the other hand,
        Fine-tuning approach updates LLM weights with domain-specific data to improve performance on specific tasks. The
        fine-tuned model is particularly effective to learn new knowledge in a specific domain that is not covered by
        the LLM pre-training. This tutorial will walk through the RAG and FT techniques, provide the insights of the
        advantages and limitations, and share best practices of adopting the right methodology for your use cases. All
        the methods will be introduced in a hands-on lab to demonstrate how the RAG and LLM fine tuning works, and how
        they perform to handle domain specific LLM tasks. We will use uniflow and pykoi, an open source python library,
        to implement the RAG and FT techniques in the tutorial."
        />
      </Section>
      <Agenda />
      <Speakers />
      <Section title="Slides">
        <TextContainer text="Slides will be available here after the workshop." />
      </Section>
    </div>
  );
}
