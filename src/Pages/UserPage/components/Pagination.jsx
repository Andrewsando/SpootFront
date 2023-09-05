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
            <i class="material-icons icon-arrow">keyboard_arrow_left</i>
          </a>
        )}
        {shownNext && (
          <a onClick={handleButtonNext} href="#">
            <i class="material-icons icon-arrow">keyboard_arrow_right</i>
          </a>
        )}
      </div>
    </div>
  );
}
