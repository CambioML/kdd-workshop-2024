import TextContainer from './TextContainer';

interface SpeakerListItemProps {
  speaker: string;
  description: string;
}

const SpeakerListItem = ({ speaker, description }: SpeakerListItemProps) => {
  return (
    <li className="list-disc ml-4">
      <div className="font-semibold text-lg pt-4 pb-2">{speaker}</div>
      <TextContainer text={description} />
    </li>
  );
};

export default SpeakerListItem;
