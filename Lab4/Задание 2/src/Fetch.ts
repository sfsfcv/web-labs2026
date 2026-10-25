import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

export async function getOddPosts(): Promise<PostDTO[]> {
  const posts = await api.getPosts();
  return posts.filter((post) => post.id % 2 === 1).slice(0, 5);
}

export async function getEvenComments(): Promise<CommentDTO[]> {
  const posts = await api.getComments();
  return posts.filter((post) => post.id % 2 === 0).slice(0, 5);
}
