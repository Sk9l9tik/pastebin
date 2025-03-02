import { useParams } from 'react-router-dom';

export function Paste() {
  const { id } = useParams();

  return (
    <div>
      <h1>Paste ID: {id}</h1>
    </div>
  );
}