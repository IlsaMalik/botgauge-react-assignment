import PropTypes from "prop-types";
import './SuggestionDropdown.css';

function SuggestionDropdown({ suggestions = [], onSelect = () => {} }) {
  const renderSuggestionText = (text) => {
    const parts = text.split('"');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index} className="highlight-text">{part}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="suggestion-dropdown">
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="suggestion-item"
          onClick={() => onSelect(suggestion)}
        >
          <div className="suggestion-icon">@</div>
          <div className="suggestion-text">
            {renderSuggestionText(suggestion.text)}
          </div>
        </div>
      ))}
    </div>
  );
}

SuggestionDropdown.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SuggestionDropdown;
