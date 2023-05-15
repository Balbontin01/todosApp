import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`, [counter]
    );

    const { author, quote } = !!data && data[0];

  return (
    <>
      <div>Braking Bad Quotes</div>
      <hr />
      
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
