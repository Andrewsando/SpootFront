import "../styles/Pagination.css";

export default function Pagination({
  handleButtonNext,
  handleButtonPrev,
  shownNext,
  shownPrev,
  onPageResetAndClear, 
}) {
  const handleResetAndClear = (event) => {
    event.preventDefault();
    onPageResetAndClear(1); // Llama a la función onPageResetAndClear con el valor 1 para restablecer la página
  };

  return (
    <div>
      <div className="pagination-container">
        <div className="pagination-subContainer">
          {shownPrev && (
            <a onClick={handleButtonPrev} href="#">
              <i className="material-icons icon-arrow">keyboard_arrow_left</i>
            </a>
          )}
          {shownNext && (
            <a onClick={handleButtonNext} href="#">
              <i className="material-icons icon-arrow">keyboard_arrow_right</i>
            </a>
          )}
        </div>
        <i className="material-icons clearFilters-button" onClick={handleResetAndClear}>replay</i>
      </div>
    </div>
  );
}
