const FooterButton = ({ data }) => {
  return (
    <button className="flex items-center gap-2 px-3 py-1 border border-gray-500 text-sm rounded hover:cursor-pointer">
      {data.iconClass && <i className={data.iconClass}></i>}
      {data.flag && <span>{data.flag}</span>}
      <span className="text-gray-400">{data.label}</span>
    </button>
  );
};

export default FooterButton;
