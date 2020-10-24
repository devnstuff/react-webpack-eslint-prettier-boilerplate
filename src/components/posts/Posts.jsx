/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { object, bool, func } from 'prop-types';
import get from 'lodash/get';
import enhance from './enhancer';
import Post from './Post';

const Posts = ({ error, loading, refetch, loadMore, posts }) => {
  if (error) {
    const errorMessage = get(error, 'graphQLErrors[0].extensions.exception.message');
    return (
      <div>
        <p>{errorMessage}</p>
        <button type="button" onClick={refetch}>
          Refetch
        </button>
      </div>
    );
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Post data={posts.data} />
      <button type="button" onClick={loadMore}>
        Next Page
      </button>
    </>
  );
};

Posts.propTypes = {
  error: object,
  loading: bool,
  refetch: func,
  posts: object,
  loadMore: func,
};
export default enhance(Posts);
