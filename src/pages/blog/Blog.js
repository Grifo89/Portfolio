import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'

const url = 'http://marketeronline.co/blog/wp-json/wp/v2/posts/1'

class Blog extends Component {
  state = {
    content: ''
  }

  componentDidMount () {
    axios.get(url)
      .then(res => {
        console.log(res.data.content.rendered);
      this.setState({
        content: res.data.content.rendered,
        title: res.data.title.rendered,
      })
    })
  }

  render() {
    return (
      <div id="page">
        <div>{ ReactHtmlParser(this.state.content) }</div>
      </div>
    );
  }

}

export default Blog;
