import "./Row.scss";

const Row = ({ refreshing, selected, onClick }) => {
  return (
    <div className={`Row ${selected && "selected"}`} onClick={onClick}>
      <div className="row-column">2CSS245202R0104</div>
      <div className="row-column">Siemens Base Unit, 6ES7193</div>
      <div className="row-column">
        <div className={`quantity-pill ${refreshing && "refresh"}`}>
          {!refreshing && <span>1,000,940</span>}
        </div>
      </div>
    </div>
  );
};

export default Row;
