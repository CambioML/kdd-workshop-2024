interface TextContainerProps {
  text: string;
}
const TextContainer = ({ text }: TextContainerProps) => {
  return <div className="text-lg">{text}</div>;
};

export default TextContainer;
