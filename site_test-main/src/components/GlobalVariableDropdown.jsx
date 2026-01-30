import './GlobalVariableDropdown.css'

function GlobalVariableDropdown({ variables, onSelect, onCancel, searchTerm, onSearchChange }) {
  return (
    <div
      className="global-variable-modal"
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="global-variable-dropdown"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-box">
          <input
            type="text"
            placeholder="Search global data"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            autoFocus
          />
          <span className="search-icon">⟳</span>
        </div>

        <div className="variable-list">
          {variables.map((variable) => (
            <div
              key={variable.id}
              className="variable-item"
              onMouseDown={(e) => {
                e.stopPropagation();
                onSelect(variable);
              }}
            >
              <div className="variable-icon">G</div>
              <div className="variable-name">{variable.name}</div>
            </div>
          ))}
        </div>

        <div className="modal-buttons">
          <button className="btn btn-cancel" onMouseDown={(e) => {
            e.stopPropagation();
            onCancel();
          }}>Cancel</button>

          <button
            className="btn btn-ok"
            onMouseDown={(e) => {
              e.stopPropagation();
              variables.length > 0 && onSelect(variables[0]);
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default GlobalVariableDropdown
