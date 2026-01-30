import { useState, useRef, useEffect } from 'react'
import './TokenEditor.css'

function TokenEditor({ tokens, onTokenDoubleClick, editingTokenIndex, onTokenEdit }) {
  const [editValue, setEditValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (editingTokenIndex !== null && inputRef.current) {
      const token = tokens[editingTokenIndex]
      setEditValue(token.value)
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editingTokenIndex, tokens])

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      onTokenEdit(index, editValue)
    } else if (e.key === 'Escape') {
      onTokenEdit(index, tokens[index].value)
    }
  }

  return (
    <div className="token-editor">
      {tokens.map((token, index) => {
        
        if (typeof token === 'string') {
          return <span key={index} className="token-text">{token}</span>
        }

        
        if (editingTokenIndex === index) {
          return (
            <input
              key={index}
              ref={inputRef}
              type="text"
              className="token-input"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onBlur={() => onTokenEdit(index, editValue)}
              onMouseDown={(e) => e.stopPropagation()}   
            />
          )
        }

        
        return (
          <span
            key={index}
            className={`token-editable token-${token.color}`}
            onDoubleClick={(e) => {
              e.stopPropagation()             
              onTokenDoubleClick(index)
            }}
            onMouseDown={(e) => e.stopPropagation()}   
          >
            {token.isGlobal && <span className="global-badge">G</span>}
            {token.value}
          </span>
        )
      })}
    </div>
  )
}

export default TokenEditor
