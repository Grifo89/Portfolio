import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'

const url = 'http://marketeronline.co/blog/wp-json/wp/v2/posts/114'

class Blog extends Component {
  state = {
    content: '',
    title: '',
    img: ''
  }

  componentDidMount = () => {
    axios.get(url)
      .then(function (res) {
        console.log(res.data.content.rendered);
      this.setState({
        content: res.data.content.rendered,
        title: res.data.title.rendered,
      })
    })
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.title}</h1>
        <div>{ ReactHtmlParser(this.state.content) }</div>
      </Fragment>
    );
  }

}

export default Blog;
