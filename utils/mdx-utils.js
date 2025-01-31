import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  console.log(data);
  if (data) {
    return data;
  }

  return [];
};

export const getPostBySlug = async (id) => {
  //TODO: BUSCAR UM POST EM ESPECIFICO.
  //const {data} = await api.get(`/post?id=eq.${id}`)

  const { data } = await api.get(`/posts?id=eq.${id}`);

  if (data && data.length > 0) {
    return data[0];
  }

  return {};
};
