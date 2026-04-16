function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-slate-500 px-4 py-2 rounded-md text-white font-medium w-full"
    >
      {props.children}
    </button>
  );
}
export default Button;
