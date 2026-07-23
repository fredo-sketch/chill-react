import api from "./api";

export const getMovies = async () => {
  const response = await api.get("/movies");
  return response.data;
};

export const addMovie = async (newMovie) => {
  const response = await api.post("/movies", newMovie);
  return response.data;
};

export const updateMovie = async (id, updatedMovie) => {
  const response = await api.put(`/movies/${id}`, updatedMovie);
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await api.delete(`/movies/${id}`);
  return response.data;
};
