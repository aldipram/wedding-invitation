// eslint-disable-next-line react/prop-types
function Button ({ children }) {
  return (
    <>
        <button className="p-2 bg-white rounded-md">
            { children }
        </button>
    </>
  );
}

export default Button;
