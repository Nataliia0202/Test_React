import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss"

export const Pagination = ({  onPageChange, ...props }) => {
  return (
    <div className={styles.div}>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        marginPagesDisplayed={1}
        nextLabel=">"
        onPageChange={onPageChange}
        activeClassName="selected"
        containerClassName="Pagination"
        previousLabel="<"
        pageLinkClassName="Pagination__page-link"
        nextLinkClassName="Pagination__next-link"
        previousLinkClassName="Pagination__previous-link"
        pageClassName="Pagination__page-item"
        nextClassName="Pagination__next-item"
        previousClassName="previous"
        renderOnZeroPageCount={null}
        breakClassName="break"
        breakLinkClassName="break-link"
        previousAriaLabel="Previous page"
        breakAriaLabels={{
          forward: "Jump forward",
          backward: "Jump backward",
        }}
        {...props}
      />
    </div>
  );
};

export default Pagination
