import "./squares.css";

const Squares = ({ className,value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
   {value}
    </button>
  );
};

export default Squares;