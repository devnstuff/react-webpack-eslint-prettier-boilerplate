import { NetworkStatus } from 'apollo-client';
import { withApollo, graphql } from 'react-apollo';
import { compose } from 'recompose';
import { APOLLO_FETCH_POLICIES, DEFAULT_LIMIT } from '../../constants/apollo';
import { getPosts } from '../../graphql/queries';

const loadPostData = graphql(getPosts, {
  options: () => ({
    variables: {
      options: { paginate: { page: 1, limit: DEFAULT_LIMIT } },
    },
    fetchPolicy: APOLLO_FETCH_POLICIES.NETWORK_ONLY,
  }),
  props: ({ data: { error, loading, refetch, fetchMore, posts, networkStatus }, ownProps }) => ({
    error,
    loading,
    refetch,
    posts: loading && networkStatus !== NetworkStatus.fetchMore ? undefined : posts,
    loadMore: () =>
      fetchMore({
        variables: {
          options: { paginate: { page: 2, limit: DEFAULT_LIMIT } },
        },
        updateQuery: (prev, { fetchMoreResult }) =>
          !fetchMoreResult
            ? prev
            : {
                ...prev,
                posts: {
                  ...prev.posts,
                  ...fetchMoreResult.posts,
                },
              },
      }),
    ownProps,
  }),
});

export default compose(withApollo, loadPostData);
