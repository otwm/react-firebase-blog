import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import List from './List';

function Pagination({ currentPage, maxPage }) {
  // TODO : 정확하게 페이지는 모든 파라미터를 물고 들어가야 한다. 쿼리 보존의 법칙!!
  return (
    <div>
      {[...Array(maxPage).keys()].map(
        index =>
          <div
            className={(currentPage === index + 1) ? 'current' : ''}
            key={index}
          >
            <Link to={`?currentPage=${index + 1}`} >{index + 1}</Link>
          </div>
      )}
    </div>
  );
}

function PagingList({ list, Template, dataPerPage = 10, currentPage = 1 }) {
  const maxPage = Math.ceil(list.length / dataPerPage);
  const currentIndex = currentPage - 1;
  const pagingList = list.slice(currentIndex * dataPerPage, (currentIndex + 1) * dataPerPage);
  return (
    <section>
      <List list={pagingList} Template={Template} />
      <Pagination currentPage={currentPage} maxPage={maxPage} />
    </section>
  );
}

PagingList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  Template: PropTypes.func,
  dataPerPage: PropTypes.number,
  currentPage: PropTypes.number,
};

export default PagingList;