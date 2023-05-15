import { useFetch, useCounter } from "../hooks/";
import { LoadingQuote, Quote } from "../03-examples";
export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`, [counter]
    );

    const { author, quote } = !!data && data[0];

  return (
    <>
      <div>Braking Bad Quotes</div>
      <hr />

      {/*
        isLoading 
            ? (
          <div className="alert alert-info text-center">Loading...</div>
        ) 
        : (
          <blockquote className="blockquote text-end">
            <p className="mb-1">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
          </blockquote>
        )
        */}
      {
        isLoading 
            ? <LoadingQuote />
            : <Quote author = { author } quote = { quote }/>
      }
      <button 
      className="btn btn-primary mt-2"
      disabled={ isLoading }
      onClick={ () => increment() }
      >Next Quote</button>
    </>
  );
};
