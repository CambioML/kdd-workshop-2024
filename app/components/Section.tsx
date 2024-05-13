import Container from './Container';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <Container>
      <div className="font-semibold text-3xl pt-10 pb-2">{title}</div>
      {children}
    </Container>
  );
};

export default Section;
