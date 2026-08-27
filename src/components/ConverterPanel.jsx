import { useState } from 'react'
import { categories, convert, formatResult } from '../data/units'

export default function ConverterPanel({ categoryId }) {
  const category = categories.find((c) => c.id === categoryId)
  const [inputValue, setInputValue] = useState('')
  const [fromId, setFromId] = useState(category?.units[0]?.id ?? '')

  if (!category) return null

  const isNumbase = category.type === 'numbase'
  const isFuel = category.type === 'fuel'

  // For numbase: determine valid characters for the from unit
  const numbasePattern = { bin: /[^01]/, oct: /[^0-7]/, dec: /[^0-9]/, hex: /[^0-9a-fA-F]/ }

  function handleInput(val) {
    if (isNumbase) {
      const pattern = numbasePattern[fromId]
      if (pattern && pattern.test(val)) return
    } else {
      // allow numbers, minus, dot
      if (val !== '' && !/^-?\d*\.?\d*$/.test(val) && !/^-$/.test(val)) return
    }
    setInputValue(val)
  }

  function handleFromChange(id) {
    setFromId(id)
    setInputValue('')
  }

  return (
    <div className="converter-panel">
      <div className="from-section">
        <label className="section-label">변환할 단위 선택</label>
        <div className="unit-select-row">
          <select
            className="unit-select"
            value={fromId}
            onChange={(e) => handleFromChange(e.target.value)}
          >
            {category.units.map((u) => (
              <option key={u.id} value={u.id}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
        <input
          className="value-input"
          type={isNumbase ? 'text' : 'number'}
          inputMode={isNumbase ? 'text' : 'decimal'}
          placeholder={isNumbase ? `${fromId} 값 입력` : '값을 입력하세요'}
          value={inputValue}
          onChange={(e) => handleInput(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="results-section">
        <label className="section-label">변환 결과</label>
        <div className="results-grid">
          {category.units.map((u) => {
            if (u.id === fromId && !isNumbase) return null
            const { result, error } = convert(categoryId, fromId, u.id, inputValue)
            const display = error
              ? `⚠ ${error}`
              : inputValue === '' || inputValue === '-'
              ? '—'
              : formatResult(result)
            return (
              <div key={u.id} className="result-item">
                <span className="result-label">{u.label}</span>
                <span className={`result-value${error ? ' error' : ''}`}>{display}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
