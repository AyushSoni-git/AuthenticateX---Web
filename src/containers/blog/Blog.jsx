import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Learn, <br /> About AuthenticateX.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} text="This the block diagram for AuthenticateX's machine learning models." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} text="The overall accuracy for the Facial Recognition Module is 95.6%." />
        <Article imgUrl={blog03} text="The dataset used for Facial Recognition can be visualized using a scatter plot." />
        <Article imgUrl={blog04} text="Locating the Iris Part and highlighting it with a circle." />
        <Article imgUrl={blog05} text="Plotting the result for Iris Recognition after performing various operations over the Iris Dataset Images." />
      </div>
    </div>
  </div>
);

export default Blog;
