import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import swal from 'sweetalert';
import fetch from '../utils/fetch.js';
// import styled from '@emotion/styled'; // i18n

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,
  };

  static getInitialProps = async context => {
    const page = context.query.page || 1;
    const articles = await fetch(
      null,
      'get',
      `admin/articles?page=${page}`,
      null,
    );
    return {
      articles,
    };
  };

  deleteArticle = values => {
    return async () => {
      const value = await swal('Are you sure you want to delete?', {
        buttons: {
          cancel: 'Cancel',
          confirm: {
            text: 'Confirm',
            value: 'confirm',
          },
        },
      });

      switch (value) {
        case 'confirm': {
          const result = await fetch(
            null,
            'delete',
            `admin/article/${values}`,
            values,
          );
          if (result.ok === 1) {
            swal('Delete Complete!');
            Router.push('/articleList');
          }
        }
      }
    };
  };

  render = () => {
    return (
      <>
        <ul className="list-group">
          {this.props.articles.rows &&
            this.props.articles.rows.map(article => {
              return (
                <li
                  key={`article${article.id}`}
                  className="list-group-item"
                  aria-disabled="true"
                >
                  <a href={`/articleDetail?id=${article.id}`}>
                    {article.title}
                  </a>
                  <button
                    type="button"
                    className="btn btn-danger float-right"
                    onClick={this.deleteArticle(article.id)}
                  >
                    DELETE
                  </button>
                </li>
              );
            })}
        </ul>
        <ReactPaginate
          pageCount={this.props.articles.totalRows}
          pageRangeDisplayed={10}
          marginPagesDisplayed={5}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextreviousClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          onPageChange={pageObject => {
            Router.push(`/articleList?page=${pageObject.selected + 1}`);
          }}
        />
        <Link href="/articleDetail">
          <a className="btn btn-primary float-right">ADD NEW ARTICLE</a>
        </Link>
      </>
    );
  };
}

export default ArticleList;
