export default function Paginator({ cantidad, setOffset, offset, limit }) {
  const totalPages = Math.ceil(cantidad / limit);
  const handlePageClick = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const newOffset = (page - 1) * limit;
    setOffset(newOffset);
  };

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageClick(i)}
        className={
          offset === (i - 1) * limit
            ? 'btn btn-primary disabled'
            : 'btn btn-primary'
        }
      >
        {i}
      </button>,
    );
  }

  return (
    <div
      className="d-flex mb-sm-4 mb-xl-4 mb-lg-4 mb-md-4 flex-wrap"
      style={{ justifyContent: 'center', gap: '2em', width: '100%' }}
    >
      {offset !== 0 ? (
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            setOffset(Math.max(offset - limit, 0));
          }}
          className="btn btn-primary"
        >
          {' '}
          Anterior{' '}
        </button>
      ) : (
        ''
      )}

      {pageButtons}
      {offset + limit >= cantidad ? (
        ''
      ) : (
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            setOffset(offset + limit);
          }}
          className="btn btn-primary"
        >
          {' '}
          Siguiente{' '}
        </button>
      )}
    </div>
  );
}
