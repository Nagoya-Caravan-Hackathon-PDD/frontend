type Props = {
  params: {
    id: string;
  };
};

export default function GameRealtimePage({ params: { id } }: Props) {
  return (
    <div>
      <h1>Game:{id}</h1>
    </div>
  );
}
