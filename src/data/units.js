// All unit conversion definitions
// For linear conversions: each unit value is its multiplier to the base unit
// For non-linear (temperature): use toBase/fromBase functions

export const categories = [
  {
    id: 'length',
    label: '📏 길이',
    type: 'linear',
    base: 'm',
    units: [
      { id: 'km', label: 'km (킬로미터)', factor: 1000 },
      { id: 'm', label: 'm (미터)', factor: 1 },
      { id: 'cm', label: 'cm (센티미터)', factor: 0.01 },
      { id: 'mm', label: 'mm (밀리미터)', factor: 0.001 },
      { id: 'um', label: 'μm (마이크로미터)', factor: 1e-6 },
      { id: 'nm', label: 'nm (나노미터)', factor: 1e-9 },
      { id: 'mile', label: 'mile (마일)', factor: 1609.344 },
      { id: 'yard', label: 'yard (야드)', factor: 0.9144 },
      { id: 'feet', label: 'ft (피트)', factor: 0.3048 },
      { id: 'inch', label: 'in (인치)', factor: 0.0254 },
      { id: 'nmi', label: 'nmi (해리)', factor: 1852 },
    ],
  },
  {
    id: 'weight',
    label: '⚖️ 무게/질량',
    type: 'linear',
    base: 'kg',
    units: [
      { id: 'kg', label: 'kg (킬로그램)', factor: 1 },
      { id: 'g', label: 'g (그램)', factor: 0.001 },
      { id: 'mg', label: 'mg (밀리그램)', factor: 1e-6 },
      { id: 'ug', label: 'μg (마이크로그램)', factor: 1e-9 },
      { id: 'ton', label: 't (메트릭 톤)', factor: 1000 },
      { id: 'lb', label: 'lb (파운드)', factor: 0.45359237 },
      { id: 'oz', label: 'oz (온스)', factor: 0.028349523125 },
      { id: 'stone', label: 'stone (스톤)', factor: 6.35029318 },
    ],
  },
  {
    id: 'temperature',
    label: '🌡️ 온도',
    type: 'temperature',
    units: [
      { id: 'C', label: '°C (섭씨)' },
      { id: 'F', label: '°F (화씨)' },
      { id: 'K', label: 'K (켈빈)' },
      { id: 'R', label: '°R (랭킨)' },
    ],
  },
  {
    id: 'area',
    label: '📐 넓이',
    type: 'linear',
    base: 'm²',
    units: [
      { id: 'm2', label: 'm² (제곱미터)', factor: 1 },
      { id: 'km2', label: 'km² (제곱킬로미터)', factor: 1e6 },
      { id: 'cm2', label: 'cm² (제곱센티미터)', factor: 1e-4 },
      { id: 'mm2', label: 'mm² (제곱밀리미터)', factor: 1e-6 },
      { id: 'hectare', label: 'ha (헥타르)', factor: 10000 },
      { id: 'acre', label: 'acre (에이커)', factor: 4046.8564224 },
      { id: 'ft2', label: 'ft² (제곱피트)', factor: 0.09290304 },
      { id: 'in2', label: 'in² (제곱인치)', factor: 0.00064516 },
      { id: 'pyeong', label: '평 (평)', factor: 3.3057851 },
    ],
  },
  {
    id: 'speed',
    label: '🚗 속도',
    type: 'linear',
    base: 'm/s',
    units: [
      { id: 'kmh', label: 'km/h (킬로미터/시간)', factor: 1 / 3.6 },
      { id: 'mph', label: 'mph (마일/시간)', factor: 0.44704 },
      { id: 'ms', label: 'm/s (미터/초)', factor: 1 },
      { id: 'knot', label: 'knot (노트)', factor: 0.514444 },
      { id: 'fts', label: 'ft/s (피트/초)', factor: 0.3048 },
    ],
  },
  {
    id: 'data',
    label: '💾 데이터',
    type: 'linear',
    base: 'bit',
    units: [
      { id: 'bit', label: 'bit (비트)', factor: 1 },
      { id: 'byte', label: 'byte (바이트)', factor: 8 },
      { id: 'KB', label: 'KB (킬로바이트)', factor: 8 * 1024 },
      { id: 'MB', label: 'MB (메가바이트)', factor: 8 * 1024 ** 2 },
      { id: 'GB', label: 'GB (기가바이트)', factor: 8 * 1024 ** 3 },
      { id: 'TB', label: 'TB (테라바이트)', factor: 8 * 1024 ** 4 },
      { id: 'PB', label: 'PB (페타바이트)', factor: 8 * 1024 ** 5 },
    ],
  },
  {
    id: 'time',
    label: '⏱️ 시간',
    type: 'linear',
    base: 's',
    units: [
      { id: 'ns', label: 'ns (나노초)', factor: 1e-9 },
      { id: 'us', label: 'μs (마이크로초)', factor: 1e-6 },
      { id: 'ms', label: 'ms (밀리초)', factor: 1e-3 },
      { id: 's', label: 's (초)', factor: 1 },
      { id: 'min', label: 'min (분)', factor: 60 },
      { id: 'h', label: 'h (시간)', factor: 3600 },
      { id: 'd', label: 'd (일)', factor: 86400 },
      { id: 'w', label: 'w (주)', factor: 604800 },
      { id: 'mo', label: 'mo (월)', factor: 2629800 },
      { id: 'y', label: 'y (년)', factor: 31557600 },
    ],
  },
  {
    id: 'energy',
    label: '🔋 에너지',
    type: 'linear',
    base: 'J',
    units: [
      { id: 'J', label: 'J (줄)', factor: 1 },
      { id: 'kJ', label: 'kJ (킬로줄)', factor: 1000 },
      { id: 'cal', label: 'cal (칼로리)', factor: 4.184 },
      { id: 'kcal', label: 'kcal (킬로칼로리)', factor: 4184 },
      { id: 'Wh', label: 'Wh (와트시)', factor: 3600 },
      { id: 'kWh', label: 'kWh (킬로와트시)', factor: 3600000 },
      { id: 'BTU', label: 'BTU (영국 열량)', factor: 1055.06 },
    ],
  },
  {
    id: 'pressure',
    label: '💪 압력',
    type: 'linear',
    base: 'Pa',
    units: [
      { id: 'Pa', label: 'Pa (파스칼)', factor: 1 },
      { id: 'kPa', label: 'kPa (킬로파스칼)', factor: 1000 },
      { id: 'MPa', label: 'MPa (메가파스칼)', factor: 1e6 },
      { id: 'bar', label: 'bar (바)', factor: 100000 },
      { id: 'psi', label: 'psi (제곱인치당 파운드)', factor: 6894.757 },
      { id: 'atm', label: 'atm (기압)', factor: 101325 },
      { id: 'mmHg', label: 'mmHg (수은주 밀리미터)', factor: 133.322 },
    ],
  },
  {
    id: 'volume',
    label: '📦 부피',
    type: 'linear',
    base: 'L',
    units: [
      { id: 'L', label: 'L (리터)', factor: 1 },
      { id: 'mL', label: 'mL (밀리리터)', factor: 0.001 },
      { id: 'm3', label: 'm³ (세제곱미터)', factor: 1000 },
      { id: 'cm3', label: 'cm³ (세제곱센티미터)', factor: 0.001 },
      { id: 'galUS', label: 'gal US (미국 갤런)', factor: 3.785411784 },
      { id: 'qt', label: 'qt (쿼트)', factor: 0.946352946 },
      { id: 'pt', label: 'pt (파인트)', factor: 0.473176473 },
      { id: 'floz', label: 'fl oz (액량 온스)', factor: 0.0295735296 },
      { id: 'cup', label: 'cup (컵)', factor: 0.2365882365 },
      { id: 'tbsp', label: 'tbsp (큰술)', factor: 0.0147867648 },
      { id: 'tsp', label: 'tsp (작은술)', factor: 0.00492892159 },
    ],
  },
  {
    id: 'numbase',
    label: '🔢 진수 변환',
    type: 'numbase',
    units: [
      { id: 'bin', label: '2진수 (Binary)' },
      { id: 'oct', label: '8진수 (Octal)' },
      { id: 'dec', label: '10진수 (Decimal)' },
      { id: 'hex', label: '16진수 (Hexadecimal)' },
    ],
  },
  {
    id: 'fuel',
    label: '💰 연료 효율',
    type: 'fuel',
    units: [
      { id: 'kmL', label: 'km/L (킬로미터/리터)' },
      { id: 'L100km', label: 'L/100km (리터/100km)' },
      { id: 'mpgUS', label: 'mpg US (미국 마일/갤런)' },
      { id: 'mpgUK', label: 'mpg UK (영국 마일/갤런)' },
    ],
  },
]

// Convert temperature value to Celsius base
function tempToCelsius(value, fromId) {
  switch (fromId) {
    case 'C': return value
    case 'F': return (value - 32) * 5 / 9
    case 'K': return value - 273.15
    case 'R': return (value - 491.67) * 5 / 9
    default: return value
  }
}

// Convert Celsius base to target unit
function celsiusToUnit(celsius, toId) {
  switch (toId) {
    case 'C': return celsius
    case 'F': return celsius * 9 / 5 + 32
    case 'K': return celsius + 273.15
    case 'R': return (celsius + 273.15) * 9 / 5
    default: return celsius
  }
}

// Convert fuel efficiency (km/L as base)
function fuelToKmL(value, fromId) {
  switch (fromId) {
    case 'kmL': return value
    case 'L100km': return value === 0 ? Infinity : 100 / value
    case 'mpgUS': return value * 0.425144
    case 'mpgUK': return value * 0.354006
    default: return value
  }
}

function kmLToUnit(kmL, toId) {
  switch (toId) {
    case 'kmL': return kmL
    case 'L100km': return kmL === 0 ? Infinity : 100 / kmL
    case 'mpgUS': return kmL / 0.425144
    case 'mpgUK': return kmL / 0.354006
    default: return kmL
  }
}

// Numbase radix map
const numbaseRadix = { bin: 2, oct: 8, dec: 10, hex: 16 }

/**
 * Convert a value from one unit to another within a category.
 * Returns { result, error } where result is a number or string, error is a string or null.
 */
export function convert(categoryId, fromId, toId, inputValue) {
  const category = categories.find((c) => c.id === categoryId)
  if (!category) return { result: null, error: '알 수 없는 카테고리' }

  if (category.type === 'numbase') {
    const trimmed = inputValue.trim()
    if (!trimmed) return { result: '', error: null }
    const radixFrom = numbaseRadix[fromId]
    const radixTo = numbaseRadix[toId]
    const n = parseInt(trimmed, radixFrom)
    if (isNaN(n)) return { result: null, error: `유효하지 않은 ${fromId} 값` }
    const result = n.toString(radixTo).toUpperCase()
    return { result, error: null }
  }

  const value = parseFloat(inputValue)
  if (isNaN(value)) return { result: null, error: null }

  if (fromId === toId) return { result: value, error: null }

  if (category.type === 'temperature') {
    const celsius = tempToCelsius(value, fromId)
    return { result: celsiusToUnit(celsius, toId), error: null }
  }

  if (category.type === 'fuel') {
    const base = fuelToKmL(value, fromId)
    return { result: kmLToUnit(base, toId), error: null }
  }

  if (category.type === 'linear') {
    const fromUnit = category.units.find((u) => u.id === fromId)
    const toUnit = category.units.find((u) => u.id === toId)
    if (!fromUnit || !toUnit) return { result: null, error: '단위를 찾을 수 없음' }
    return { result: (value * fromUnit.factor) / toUnit.factor, error: null }
  }

  return { result: null, error: '지원되지 않는 변환' }
}

/**
 * Format a numeric result for display
 */
export function formatResult(value) {
  if (value === null || value === undefined) return '—'
  if (typeof value === 'string') return value
  if (!isFinite(value)) return '∞'
  if (value === 0) return '0'

  const abs = Math.abs(value)
  if (abs >= 1e15 || abs < 1e-9) {
    return value.toExponential(6)
  }
  // Use up to 10 significant digits but trim trailing zeros
  const str = parseFloat(value.toPrecision(10)).toString()
  return str
}
