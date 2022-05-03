import "../../styles/rounded-labels.scss";

const RoundedLabel = props => {
  const {tag, closeable, onClick} = props;

	return (
		<span className="rounded-label">
			{ tag }
			{ closeable ? <i className="fa-solid fa-xmark" onClick={() => onClick(tag)} /> : '' }
		</span>
	);
}

export default RoundedLabel;