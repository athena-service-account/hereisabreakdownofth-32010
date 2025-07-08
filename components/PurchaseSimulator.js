export const PurchaseSimulator = ({ artPiece }) => {
  const handlePurchase = () => {
    // Simulate purchase logic
    console.log(`Purchased ${artPiece.title} for ${artPiece.price}`);
    alert(`Purchased ${artPiece.title} for ${artPiece.price}`);
  };

  return (
    <div>
      <button onClick={handlePurchase}>Buy now</button>
    </div>
  );
};