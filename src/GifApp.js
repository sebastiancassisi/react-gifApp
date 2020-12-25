import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
  const [categories, setCategory] = useState(['Batman']);

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategory={setCategory} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
