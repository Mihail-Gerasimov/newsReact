import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import New from "../NewInfo/NewInfo";
import "./NewInfoPage.css";
import "./NewInfoPageMedia.css";
import lupa from "./lupa.png";
import LoadingIndicator  from "../LoadingIndicator/LoadingIndicator";
import { trackPromise } from 'react-promise-tracker';

function News() {
  const [news, setNews] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectChanged, setSelectChanged] = useState("title");
  const [modeEntity, setModeEntity] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [sortDesc, setSortDesc] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (fetching) {
      switch (modeEntity) {
        case "find":
          handleFinder();
          break;
        case "sort":
          handleSort();
          break;
        default:
          handleAllNews();
          break;
      }
    }
  }, [fetching, modeEntity, isLoading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const handleAllNews = () => {
    trackPromise(
    axios
      .get(
        `https://api.spaceflightnewsapi.net/v3/articles?_start=${currentPage}`
      )
      .then((res) => {
        setNews([...news, ...res.data]);
        setCurrentPage((prevState) => prevState + 10);
      })
      .finally(() => setFetching(false)));

    setLoading(false);
  };

  const handleSort = () => {
    axios
      .get(
        `https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt&_start=${currentPage}`
      )
      .then((res) => {
        setNews([...news, ...res.data]);
        setCurrentPage((prevState) => prevState + 10);
      })
      .finally(() => setFetching(false));

    setLoading(false);
  };

  const handleFinder = () => {
    trackPromise(
    axios
      .get(
        `https://api.spaceflightnewsapi.net/v3/articles?` +
          `${selectChanged}_contains=${searchInput}` +
          `&_start=${currentPage}`
      )
      .then((res) => {
        setNews([...news, ...res.data]);
        setCurrentPage((prevState) => prevState + 10);
      })
      .finally(() => setFetching(false)));

    setLoading(false);
  };

  const setupSort = () => {
    setNews([]);
    setFetching(true);
    setCurrentPage(1);
    setLoading(true);
    setSortDesc(!sortDesc);
    let sortColumn = sortDesc ? "" : "sort";
    setModeEntity(sortColumn);
  };

  const setupFind = () => {
    setNews([]);
    setFetching(true);
    setLoading(true);
    setCurrentPage(1);
    setModeEntity("find");
  };

  return (
    <div className="main-container">
      <div className="finderStyle">
        <div className="inputFinder">
          <input
            type="text"
            placeholder="??????????..."
            className="input inputStyle"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />

          <button className="buttonFind inputStyle" onClick={setupFind}>
            <img src={lupa} alt="" className="lupaPA" />
          </button>
        </div>
        <select
          className="select inputStyle"
          id="select"
          onChange={(event) => setSelectChanged(event.target.value)}
          value={selectChanged}
        >
          <option value="title">???? ??????????????????</option>
          <option value="summary">???? ????????????????</option>
        </select>

        <div className="sort inputStyle">
          <a onClick={setupSort}>???????????????????? ???? ???????? ????????????????????</a>
        </div>
      </div>

      <LoadingIndicator/>

      {news.length != 0 ? (
        <div>
          {news.map((news) => (
            <New news={news} key={news.id} />
          ))}
        </div>
      ) : (
        <h1 className="notFoundNews">???????????????? ??????...</h1>
      )}
    </div>
  );
}

export default News;
