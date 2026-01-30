import { useState, useRef, useEffect } from 'react'
import SuggestionDropdown from './SuggestionDropdown'
import TokenEditor from './TokenEditor'
import GlobalVariableDropdown from './GlobalVariableDropdown'
import './StepEditor.css'

const STEP_SUGGESTIONS = [
  { id: 1, text: 'Click on "Text"', tokens: ['Click on ', { type: 'editable', value: 'Text', color: 'orange' }] },
  { id: 2, text: 'Click on "Text" after "Text"', tokens: ['Click on ', { type: 'editable', value: 'Text', color: 'orange' }, ' after ', { type: 'editable', value: 'Text', color: 'orange' }] },
  { id: 3, text: 'Click on "Text" for "Text"', tokens: ['Click on ', { type: 'editable', value: 'Text', color: 'orange' }, ' for ', { type: 'editable', value: 'Text', color: 'orange' }] }
]

const GLOBAL_VARIABLES = [
  { id: 1, name: 'test' },
  { id: 2, name: 'test67' }
]

function StepEditor() {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedStep, setSelectedStep] = useState(null)
  const [tokens, setTokens] = useState([])
  const [editingTokenIndex, setEditingTokenIndex] = useState(null)
  const [showGlobalVariables, setShowGlobalVariables] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef(null)
  const editorRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (editorRef.current && !editorRef.current.contains(event.target)) {
        setShowSuggestions(false)
        setShowGlobalVariables(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputClick = () => {
    if (!selectedStep) {
      setShowSuggestions(true)
    }
  }

  const handleSuggestionSelect = (suggestion) => {
    setSelectedStep(suggestion)
    setTokens(suggestion.tokens)
    setShowSuggestions(false)
  }

 const handleTokenDoubleClick = (index) => {
  const token = tokens[index]

  if (token.type !== 'editable') {
    return
  }

  const editableTokenIndices = tokens
    .map((t, i) => (t.type === 'editable' ? i : null))
    .filter((i) => i !== null)

  const position = editableTokenIndices.indexOf(index)

  if (position === 1) {
    setEditingTokenIndex(index)
    setShowGlobalVariables(true)
  } else {
    
    setEditingTokenIndex(index)
  }
}


  const handleTokenEdit = (index, newValue) => {
    const newTokens = [...tokens]
    newTokens[index] = {
      ...newTokens[index],
      value: newValue,
      color: 'green'
    }
    setTokens(newTokens)
    setEditingTokenIndex(null)
    setShowGlobalVariables(false)
  }

  const handleGlobalVariableSelect = (variable) => {
    if (editingTokenIndex !== null) {
      const newTokens = [...tokens]
      newTokens[editingTokenIndex] = {
        ...newTokens[editingTokenIndex],
        value: variable.name,
        color: 'purple',
        isGlobal: true
      }
      setTokens(newTokens)
      setEditingTokenIndex(null)
      setShowGlobalVariables(false)
      setSearchTerm('')
    }
  }

  const handleClearStep = () => {
    setSelectedStep(null)
    setTokens([])
    setEditingTokenIndex(null)
    setShowGlobalVariables(false)
  }

  const handleOk = () => {
    console.log('Step saved:', tokens)
  }

  const handleCancel = () => {
    setShowGlobalVariables(false)
    setEditingTokenIndex(null)
    setSearchTerm('')
  }

  const filteredVariables = GLOBAL_VARIABLES.filter(variable =>
    variable.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="step-editor-container" ref={editorRef}>
      <label className="step-label">Step</label>

      <div className="step-input-wrapper">
        <div
          className="step-input"
          onClick={handleInputClick}
          ref={inputRef}
        >
          {!selectedStep && <span className="placeholder">Click to add step...</span>}
          {selectedStep && (
            <div className="token-display">
              <TokenEditor
                tokens={tokens}
                onTokenDoubleClick={handleTokenDoubleClick}
                editingTokenIndex={editingTokenIndex}
                onTokenEdit={handleTokenEdit}
              />
              <button className="clear-button" onClick={handleClearStep}>×</button>
            </div>
          )}
        </div>

        {showSuggestions && !selectedStep && (
          <SuggestionDropdown
            suggestions={STEP_SUGGESTIONS}
            onSelect={handleSuggestionSelect}
          />
        )}
      </div>

      {showGlobalVariables && (
        <GlobalVariableDropdown
          variables={filteredVariables}
          onSelect={handleGlobalVariableSelect}
          onCancel={handleCancel}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      )}

      <div className="button-group">
        <button className="btn btn-cancel" onClick={handleClearStep}>Cancel</button>
        <button className="btn btn-ok" onClick={handleOk}>Ok</button>
      </div>
    </div>
  )
}

export default StepEditor
