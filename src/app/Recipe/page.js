"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["ALL", "VEGAN", "BREAKFAST", "LUNCH", "DINNER", "DESSERT", "QUICK BITE"];

const RecipesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setRecipes(data.categories || []));
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5ed] p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full">RECIPES</span>
        <h1 className="text-4xl font-extrabold mt-4">EMBARK ON A JOURNEY</h1>
        <p className="text-gray-600 mt-2">With our diverse collection of recipes we have something to satisfy every palate.</p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold transition ${selectedCategory === cat ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.slice(0, 6).map((recipe) => (
          <div key={recipe.idCategory} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={recipe.strCategoryThumb}
              alt={recipe.strCategory}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.strCategory}</h2>
              <p className="text-gray-600 text-sm mt-2">{recipe.strCategoryDescription.slice(0, 80)}...</p>
              <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                <span>⏳ 30 MIN • EASY</span>
                <span>🍽️ 3 SERVES</span>
              </div>
              <Link href={`/Recipe/${recipe.idMeal}`}>
                <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700">VIEW RECIPE</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;