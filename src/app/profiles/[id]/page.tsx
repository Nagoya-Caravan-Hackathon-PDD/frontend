type Props = {
  params: {
    id: string;
  };
};

export default function ProfilePage({ params: { id } }: Props) {
  return (
    <div>
      <h1>Profile:{id}</h1>
    </div>
  );
}
