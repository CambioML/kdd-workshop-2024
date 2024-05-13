import Section from './Section';
import SpeakerListItem from './SpeakerListItem';

type Speaker = {
  name: string;
  description: string;
};

const speakers: Speaker[] = [
  {
    name: 'José Cassio dos Santos Junior',
    description:
      'A member of the Amazon Machine Learning University team. He is responsible for Curriculum Development for Advanced Modules. As a previous Senior Data Scientist on the AWS LATAM Professional Services Data Science team, he was responsible for experiments and MVP engagements with important clients in the Brazilian market. Cassio has over 20 years of experience working as a software engineer and has acquired extensive knowledge working in all flavors of Unix environments and languages as diverse as C, C++, Java, Python and R. As a business process management expert, he participated in BPO projects for more than 7 years. Cass also has more than 10 years of teaching experience at colleges and acting as instructor for Linux certification preparation and Microsoft Innovation Center bootcamps. He holds a Master’s degree in Computer Engineering, a Bachelor’s degree in Physics, and a Bachelor’s degree in Business Administration, specialized in IT Quantitative Methods.',
  },
  {
    name: 'Rachel Hu',
    description:
      'The Co-founder & CEO of CambioML, which builds open-source libraries to prepare high quality data for RAG and LLM finetuning. Previously she was an Applied Scientist at AWS AI, an ML instructor at Amazon Machine Learning University, and a speaker at top conferences including KDD, NVIDIA GTC, AWS re:Invent, MLOps Summit, etc. Rachel co-authored Dive into Deep Learning (D2L.ai), an open-source interactive textbook adopted by over 500 universities around the world. Rachel received her master degree of statistics from University of California, Berkeley, and bachelor of Math from University of Waterloo, Canada.',
  },
  {
    name: 'Richard Song',
    description:
      'The Co-Founder and CEO of Epsilla Inc, a one-stop RAGaaS platform for building production ready LLM applications. With a background in big data, vector graph databases, and high performance computing, Richard helps customers build production-ready RAG systems connected with large scale proprietary data. Richard holds a Master’s degree in Computer Science from Cornell University.',
  },
  {
    name: 'Yunfei Bai',
    description:
      'A Senior Solutions Architect at Amazon Web Services. With over 15 years experience on AI/ML, data science and analytics, Yunfei helps AWS customers adopt AI/ML and Generative AI services to deliver business results. Prior to AWS, he worked in various roles including product manager and solution consultant in multiple industries, designed and delivered AI/ML and data analytics solutions that overcome complex technical challenges and drive strategic objectives. Yunfei has a PhD in Electronic and Electrical Engineering. He has published research papers and blog posts, and serves as a journal reviewer.',
  },
];

const Speakers = () => {
  return (
    <Section title="Speakers">
      <ul>
        {speakers.map((speaker, i) => (
          <SpeakerListItem key={i} speaker={speaker.name} description={speaker.description} />
        ))}
      </ul>
    </Section>
  );
};

export default Speakers;
