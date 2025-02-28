"use client";

import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <Link href={`/recipe/${recipe.id}`}>Xem chi tiết</Link>
    </div>
  );
}
