import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment , decrement} from "./action";

const Counter = () => {
  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="container mt-5">
      <div className="card mx-auto w-25 bg-info-subtle">
        <div className="card-body text-center">
          <h2>Digital Wallet</h2>
          <p>Current Balance: {count}</p>

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter Amount"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
          />

          <button
            className="btn btn-outline-success m-2"
            onClick={() => {
              if (balance > 0) {
                dispatch(increment(balance));
                setBalance(0);
              
                
              }
            }}
          >
            Deposit
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              if (balance > 0 && balance <= count) {
                dispatch(decrement(balance));
                setBalance(0);
              }else{
                alert("Insufficient balance")
              }
            }}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
