import React from 'react'
import RatingWidget from './RatingWidget'

function ProductCard({product,onRatingSubmit}) {
  return (
    <div>
        <h1>{product.name}</h1>
        <img src={product.image}/>
        <p><strong>Description:</strong> {product.description || "No description available."}</p>
      <p><strong>Average Rating:</strong> {product.avgRating.toFixed(1)}</p>
      <p><strong>Total Ratings:</strong> {product.totalRatings}</p>
        <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit}/>
    </div>
  )
}

export default ProductCard
