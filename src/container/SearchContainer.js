import React, { Component } from 'react';
import { PostList } from '../components/postList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as searchActions from '../store/modules/search';

class SearchContainer extends Component {
  getSearchList = () => {
  
    const { SearchActions } = this.props;
    console.log(searchActions)
    SearchActions.getSearchList();
  }

  componentDidMount() {
    this.getSearchList();
  }

  componentDidUpdate(prevProps, prevState) {
  
  }


  render() {
    const {posts} = this.props;
    return (
      <div>
        <PostList posts={posts}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    posts: state.search.get('posts'),
  }),
  (dispatch) => ({
    SearchActions: bindActionCreators(searchActions, dispatch)
  })
)(SearchContainer);