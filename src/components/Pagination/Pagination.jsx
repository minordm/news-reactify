import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        className={styles.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            onClick={() => handlePageClick(i + 1)}
            className={styles.pageNumber}
            disabled={i + 1 === currentPage}
            key={i}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
