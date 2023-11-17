type Props = {
  params: {
    id: string;
  };
};

export default function EncounterHistoryPage({ params: { id } }: Props) {
  return (
    <div>
      <h1>EncounterHistory:{id}</h1>
    </div>
  );
}
