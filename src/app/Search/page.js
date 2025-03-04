"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import "@/app/globals.css";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null); // Thêm state để bắt lỗi

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                if (!query) return;
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

                if (!res.ok) {
                    throw new Error(`API error: ${res.status} ${res.statusText}`);
                }

                const data = await res.json();
                setRecipes(data.meals || []);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message); // Lưu lỗi vào state để hiển thị
            }
        };

        fetchRecipes();
    }, [query]);

    return (
        <div className="container mt-8">
            <h1 className="text-2xl font-bold mt-4">Search Results for "{query}"</h1>
            {error ? (
                <p className="text-red-500 mt-4">Error: {error}</p>
            ) : recipes.length > 0 ? (
                <ul className="mt-4 ">
                    {recipes.map((recipe) => (
                        <li key={recipe.idMeal} className="border p-4 rounded-md mb-4 flex items-center gap-4">
                                <div className="w-1/2">
                                <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
                                <p className="text-gray-600 text-justify">{recipe.strInstructions}</p>
                            </div>

                            <div className="w-1/2 flex justify-center">
                                <img
                                    src={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                    className="w-80 h-60 object-cover rounded-lg"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 mt-4">No results found.</p>
            )}
        </div>
    );
};

export default SearchPage;