"use client";
import { useEffect, useState } from "react";

export default function useFetchRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/recipes");
      const data = await res.json();
      setRecipes(data);
    }
    fetchData();
  }, []);

  return recipes;
}
