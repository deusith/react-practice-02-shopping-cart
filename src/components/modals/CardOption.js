const CardOption = props => {
  const {number, selected, onSelect} = props;

  return (
    <div className={`card-option ${selected ? "-selected" :  ""}`} onClick={onSelect}>
      <div className="fake-input">
        <div className="radio-button"></div>
      </div>
      <div className="card-number">
        {number || ""}
      </div>
    </div>
  );
}

export default CardOption;