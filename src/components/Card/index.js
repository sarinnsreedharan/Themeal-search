import "./card.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <div>
          <h1>{data.strMeal}</h1>
        </div>
        <div>{<img src={data.strMealThumb} alt="food image" />}</div>
        <div className="description">
          <p>{data.strInstructions}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
