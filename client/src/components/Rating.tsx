import React from "react";
interface RatingProps {
  value?: number;
  text: string;
  color?: string;
}
export const Rating: React.FC<RatingProps> = ({ value, text, color }) => {
  const drawStars = () => {
    let rating = [];
    if (value) {
      for (let i = 1; i < 6; i++) {
        rating.push(
          <span>
            <i
              style={{ color }}
              className={
                value >= i
                  ? "fas fa-star"
                  : value >= i - 0.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            ></i>
          </span>
        );
      }
    }
    return rating;
  };
  return (
    <div className="rating">
      {drawStars()}
      <span>{text && text}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: "#f8e825",
};
export default Rating;
