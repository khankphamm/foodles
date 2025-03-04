// src/app/Recipe/[id]/page.js
export default async function RecipeDetail({ params }) {
  const { id } = params; // Lấy id từ URL

  // Gọi API để lấy chi tiết công thức
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  const recipe = data.meals[0]; // Lấy công thức đầu tiên từ kết quả API

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover rounded-lg" />
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = recipe[`strIngredient${i + 1}`];
            const measure = recipe[`strMeasure${i + 1}`];
            if (ingredient && ingredient.trim() !== "") {
              return (
                <li key={i}>
                  {ingredient} - {measure}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <p className="mt-2 whitespace-pre-line">{recipe.strInstructions}</p>
      </div>
    </div>
  );
}