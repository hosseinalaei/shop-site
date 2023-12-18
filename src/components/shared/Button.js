import Spinner from "../Loading/Spinner";

const button = ({ children, className, isLoading }) => {
  return (
    <button className={`bg-primary rounded-lg ${className}`}>
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

export default button;
