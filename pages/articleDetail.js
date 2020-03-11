import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Form, Text, TextArea } from 'informed';
import fetch from '../utils/fetch.js';
import Uploader from '../components/Uploader.js';

class articleDetail extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
  };

  static getInitialProps = async ctx => {
    const queryParams = ctx.query;
    let article = null;
    if (queryParams.id) {
      article = await fetch(
        null,
        'get',
        `admin/article/${queryParams.id}`,
        null,
      );
    }
    return {
      article,
    };
  };

  onSubmit = async values => {
    console.log('values', values);
    let articleID = 0;
    if (this.props.article) {
      articleID = this.props.article.id;
    }

    const result = await fetch(
      null,
      'post',
      `admin/article/${articleID}`,
      values,
    );

    if (result.ok === 1) {
      Router.push('/articleList');
    }
  };

  render = () => {
    return (
      <>
        <Form initialValues={this.props.article} onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="control-label" htmlFor="titleInput">
              Title
            </label>
            <Text field="title" id="titleInput" className="form-control" />
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="detailInput">
              Detail
            </label>
            <TextArea
              field="detail"
              id="detailInput"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="detailInput">
              Image
            </label>
            <Uploader field="coverImageURL" />
          </div>
          <button
            className="btn btn-primary"
            style={{ margin: '20px' }}
            type="submit"
          >
            SUBMIT
          </button>
        </Form>
      </>
    );
  };
}

export default articleDetail;
