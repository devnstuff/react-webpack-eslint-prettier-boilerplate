import gql from 'graphql-tag';

export const getPost = gql`
  query($id: ID!) {
    post(id: $id) {
      title
      body
      id
    }
  }
`;

export const getPosts = gql`
  query($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
    }
  }
`;
