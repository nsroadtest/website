interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <>
      <div className="d-flex align-items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-warning">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="text-warning">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-warning">
            ☆
          </span>
        ))}
        <span className="ms-2 text-white">{rating.toFixed(1)}</span>
      </div>
    </>
  );
};

export default StarRating;
