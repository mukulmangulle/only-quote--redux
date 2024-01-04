
import React, { useEffect } from "react";
import {  useDispatch,  useSelector } from "react-redux";
import { fetchQuote } from "./features/quote/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const { quoteData, isLoading, isError } = useSelector(
    (state) => state.quotes
  );

  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

  if (isLoading) {
    return <h1 className="text-center text-warning">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="text-center text-danger">Something Went Wrong</h1>;
  }

  return (
    <marquee>
      <h1 className="my-3">{quoteData.content}</h1>
    </marquee>
  );
};

export default Quote;

