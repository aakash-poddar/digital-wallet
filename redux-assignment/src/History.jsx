
const History = ({ history, clearHistory }) => {
  return (
    <>
      <hr />
      <h5>Transaction History</h5>

      {history.length === 0 ? (
        <p className="text-muted">No transactions yet</p>
      ) : (
        <ul className="list-group mb-2">
          {history.map((item, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between
              ${item.type === "Deposit" ? "text-success" : "text-danger"}`}
            >
              <span>{item.type}</span>
              <span>
                {item.type === "Deposit" ? "+" : "-"}₹{item.amount}
              </span>
            </li>
          ))}
        </ul>
      )}

      {history.length > 0 && (
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={clearHistory}
        >
          Clear History
        </button>
      )}
    </>
  );
};

export default History;
