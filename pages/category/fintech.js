import React from 'react';
import CategoryPage from '../../components/CategoryPage';
import { posts } from '../../data/posts';

const FintechPage = () => {
  const fintechPosts = posts.filter(post => post.category === "Fintech");
  return <CategoryPage category="Fintech" posts={fintechPosts} />;
};

export default FintechPage;
