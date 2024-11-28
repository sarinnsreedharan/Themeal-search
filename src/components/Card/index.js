import "./card.css";

const Card = ({ data }) => {

  return (
    <>
      <div className="container">
        {data.strMeal && (
          <div className="item">
            <h1>{data.strMeal}</h1>
          </div>
        )}
        {data.strMealThumb && (
          <div className="item">
            {<img src={data.strMealThumb} alt="food image" />}
          </div>
        )}

        {data.strInstructions && (
          <div className="item description">
            <p>{data.strInstructions}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
