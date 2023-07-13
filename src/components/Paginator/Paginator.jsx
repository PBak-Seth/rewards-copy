import styles from './Paginator.module.css';

const Paginator = ({ page, setPage, pagination }) => {
  return (
    <div className={styles.container}>
      <button
        disabled={!pagination.hasPreviousPage}
        onClick={() => {
          setPage((page) => (page -= 1));
        }}
      >
        -
      </button>
      <div>{page}</div>
      <button
        disabled={!pagination.hasNextPage}
        onClick={() => {
          setPage((page) => (page += 1));
        }}
      >
        +
      </button>
    </div>
  );
};

export { Paginator };
