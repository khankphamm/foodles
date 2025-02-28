export const getRecipes = async () => {
    const res = await fetch("https://api.example.com/recipes");
    const data = await res.json();
    return data;
  };
  