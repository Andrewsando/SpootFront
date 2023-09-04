import "../styles/Pagination.css";

export default function Pagination({
  handleButtonNext,
  handleButtonPrev,
  shownNext,
  shownPrev,
}) {
  return (
    <div>
      <div className="icon-container">
        {shownPrev && (
          <a onClick={handleButtonPrev} href="#">
            <i className="material-icons icon-arrow">arrow_back</i>
          </a>
        )}
        {shownNext && (
          <a onClick={handleButtonNext} href="#">
            <i className="material-icons icon-arrow">arrow_forward</i>
          </a>
        )}
      </div>
    </div>
  );
}
