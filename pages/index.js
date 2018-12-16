import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./index.scss";

import React, { Component } from "react";
import Layout from "../components/Layout.js";
import BootstrapTable from "react-bootstrap-table-next";
import { TwitterTweetEmbed } from "react-twitter-embed";
import fetch from "isomorphic-unfetch";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets,
      loading: true
    };
  }

  static getInitialProps = async count => {
    const res = await fetch(
      `http://127.0.0.1:3000/timeline${
        typeof count !== "undefined" ? "?count=" + count : ""
      }`
    );
    const data = await res.json();
    return {
      tweets: data
    };
  };

  render() {
    const { loading } = this.state;
    const headerStyle = { backgroundColor: "#e1e8ed" };
    const embedFormatter = (cell, row, rowIndex, formatExtraData) => {
      return <TwitterTweetEmbed options={{ width: "100%" }} tweetId={cell} />;
    };
    const columns = [
      {
        text: "Date",
        dataField: "created_at",
        sort: true,
        sortFunc: (a, b, order, dataField, rowA, rowB) => {
          if (order === "asc") {
            return Date.parse(b) - Date.parse(a);
          }
          return Date.parse(a) - Date.parse(b); // desc
        },
        headerStyle
      },
      {
        text: "Favorite Count",
        dataField: "favorite_count",
        sort: true,
        headerStyle
      },
      {
        text: "Retweets Count",
        dataField: "retweet_count",
        sort: true,
        headerStyle
      },
      {
        text: "Embed",
        formatter: embedFormatter,
        dataField: "id_str",
        headerStyle
      }
    ];
    // const defaultSorted = [
    //   {
    //     dataField: "created_at",
    //     order: "desc"
    //   }
    // ];

    return (
      <Layout>
        <BootstrapTable
          loading={loading}
          bootstrap4
          keyField="created_at"
          data={this.state.tweets}
          columns={columns}
        />
        <style global jsx>{`
          main {
            padding: 15px 0;
          }
        `}</style>
      </Layout>
    );
  }
}
