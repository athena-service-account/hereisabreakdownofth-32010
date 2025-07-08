import { PurchaseSimulator } from '../components/PurchaseSimulator';
import { artPieces } from '../mock-data/artPieces';
import { useRouter } from 'next/router';

export default function ArtDetail() {
  const router = useRouter();
  const { id } = router.query;
  const artPiece = artPieces.find((artPiece) => artPiece.id === parseInt(id));

  if (!artPiece) return <div>Art piece not found</div>;

  return (
    <div>
      <h1>{artPiece.title}</h1>
      <p>{artPiece.description}</p>
      <p>Price: {artPiece.price}</p>
      <PurchaseSimulator artPiece={artPiece} />
    </div>
  );
}