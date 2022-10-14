import StarRating from "./StarRating";

function LiquorItem({ liquor, onUpdateLiquor, onDeleteLiquor }) {
  const { id, image, title, description, rating } = liquor;

  function handleUpdateRating(pct) {
    const newRating = pct * 5;
    fetch(`/liquors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateLiquor);
     
  }

  function handleDeleteLiquor() {
    fetch(`/liquors/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteLiquor(liquor);
      }
    });

  }

  return (
    <div className="liquor-item card">
      <img src={image} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
        
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeleteLiquor}>Delete Liquor</button>
        </p>
      </div>
    </div>
  );
}

export default LiquorItem;
