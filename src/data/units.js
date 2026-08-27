// All unit conversion definitions
// For linear conversions: each unit value is its multiplier to the base unit
// For non-linear (temperature): use toBase/fromBase functions

export const i18n = {
  ko: {
    appTitle: '⚙️ 단위 변환기',
    selectUnit: '변환할 단위 선택',
    results: '변환 결과',
    placeholder: '값을 입력하세요',
    darkMode: '다크 모드',
    lightMode: '라이트 모드',
    footer: '© 2024 단위 변환기 · Made with React + Vite',
    langToggle: 'EN',
  },
  en: {
    appTitle: '⚙️ Unit Converter',
    selectUnit: 'Select unit to convert',
    results: 'Results',
    placeholder: 'Enter a value',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    footer: '© 2024 Unit Converter · Made with React + Vite',
    langToggle: '한',
  },
}

export const categories = [
  {
    id: 'length',
    label: { ko: '📏 길이', en: '📏 Length' },
    type: 'linear',
    base: 'm',
    units: [
      { id: 'km', label: { ko: 'km (킬로미터)', en: 'km (Kilometer)' }, factor: 1000 },
      { id: 'm', label: { ko: 'm (미터)', en: 'm (Meter)' }, factor: 1 },
      { id: 'cm', label: { ko: 'cm (센티미터)', en: 'cm (Centimeter)' }, factor: 0.01 },
      { id: 'mm', label: { ko: 'mm (밀리미터)', en: 'mm (Millimeter)' }, factor: 0.001 },
      { id: 'um', label: { ko: 'μm (마이크로미터)', en: 'μm (Micrometer)' }, factor: 1e-6 },
      { id: 'nm', label: { ko: 'nm (나노미터)', en: 'nm (Nanometer)' }, factor: 1e-9 },
      { id: 'mile', label: { ko: 'mile (마일)', en: 'mile (Mile)' }, factor: 1609.344 },
      { id: 'yard', label: { ko: 'yard (야드)', en: 'yard (Yard)' }, factor: 0.9144 },
      { id: 'feet', label: { ko: 'ft (피트)', en: 'ft (Feet)' }, factor: 0.3048 },
      { id: 'inch', label: { ko: 'in (인치)', en: 'in (Inch)' }, factor: 0.0254 },
      { id: 'nmi', label: { ko: 'nmi (해리)', en: 'nmi (Nautical Mile)' }, factor: 1852 },
    ],
  },
  {
    id: 'weight',
    label: { ko: '⚖️ 무게/질량', en: '⚖️ Weight/Mass' },
    type: 'linear',
    base: 'kg',
    units: [
      { id: 'kg', label: { ko: 'kg (킬로그램)', en: 'kg (Kilogram)' }, factor: 1 },
      { id: 'g', label: { ko: 'g (그램)', en: 'g (Gram)' }, factor: 0.001 },
      { id: 'mg', label: { ko: 'mg (밀리그램)', en: 'mg (Milligram)' }, factor: 1e-6 },
      { id: 'ug', label: { ko: 'μg (마이크로그램)', en: 'μg (Microgram)' }, factor: 1e-9 },
      { id: 'ton', label: { ko: 't (메트릭 톤)', en: 't (Metric Ton)' }, factor: 1000 },
      { id: 'lb', label: { ko: 'lb (파운드)', en: 'lb (Pound)' }, factor: 0.45359237 },
      { id: 'oz', label: { ko: 'oz (온스)', en: 'oz (Ounce)' }, factor: 0.028349523125 },
      { id: 'stone', label: { ko: 'stone (스톤)', en: 'stone (Stone)' }, factor: 6.35029318 },
    ],
  },
  {
    id: 'temperature',
    label: { ko: '🌡️ 온도', en: '🌡️ Temperature' },
    type: 'temperature',
    units: [
      { id: 'C', label: { ko: '°C (섭씨)', en: '°C (Celsius)' } },
      { id: 'F', label: { ko: '°F (화씨)', en: '°F (Fahrenheit)' } },
      { id: 'K', label: { ko: 'K (켈빈)', en: 'K (Kelvin)' } },
      { id: 'R', label: { ko: '°R (랭킨)', en: '°R (Rankine)' } },
    ],
  },
  {
    id: 'area',
    label: { ko: '📐 넓이', en: '📐 Area' },
    type: 'linear',
    base: 'm²',
    units: [
      { id: 'm2', label: { ko: 'm² (제곱미터)', en: 'm² (Square Meter)' }, factor: 1 },
      { id: 'km2', label: { ko: 'km² (제곱킬로미터)', en: 'km² (Square Kilometer)' }, factor: 1e6 },
      { id: 'cm2', label: { ko: 'cm² (제곱센티미터)', en: 'cm² (Square Centimeter)' }, factor: 1e-4 },
      { id: 'mm2', label: { ko: 'mm² (제곱밀리미터)', en: 'mm² (Square Millimeter)' }, factor: 1e-6 },
      { id: 'hectare', label: { ko: 'ha (헥타르)', en: 'ha (Hectare)' }, factor: 10000 },
      { id: 'acre', label: { ko: 'acre (에이커)', en: 'acre (Acre)' }, factor: 4046.8564224 },
      { id: 'ft2', label: { ko: 'ft² (제곱피트)', en: 'ft² (Square Foot)' }, factor: 0.09290304 },
      { id: 'in2', label: { ko: 'in² (제곱인치)', en: 'in² (Square Inch)' }, factor: 0.00064516 },
      { id: 'pyeong', label: { ko: '평 (평)', en: 'pyeong (Korean Unit)' }, factor: 3.3057851 },
    ],
  },
  {
    id: 'speed',
    label: { ko: '🚗 속도', en: '🚗 Speed' },
    type: 'linear',
    base: 'm/s',
    units: [
      { id: 'kmh', label: { ko: 'km/h (킬로미터/시간)', en: 'km/h (Kilometer/Hour)' }, factor: 1 / 3.6 },
      { id: 'mph', label: { ko: 'mph (마일/시간)', en: 'mph (Mile/Hour)' }, factor: 0.44704 },
      { id: 'ms', label: { ko: 'm/s (미터/초)', en: 'm/s (Meter/Second)' }, factor: 1 },
      { id: 'knot', label: { ko: 'knot (노트)', en: 'knot (Knot)' }, factor: 0.514444 },
      { id: 'fts', label: { ko: 'ft/s (피트/초)', en: 'ft/s (Feet/Second)' }, factor: 0.3048 },
    ],
  },
  {
    id: 'data',
    label: { ko: '💾 데이터', en: '💾 Data' },
    type: 'linear',
    base: 'bit',
    units: [
      { id: 'bit', label: { ko: 'bit (비트)', en: 'bit (Bit)' }, factor: 1 },
      { id: 'byte', label: { ko: 'byte (바이트)', en: 'byte (Byte)' }, factor: 8 },
      { id: 'KB', label: { ko: 'KB (킬로바이트)', en: 'KB (Kilobyte)' }, factor: 8 * 1024 },
      { id: 'MB', label: { ko: 'MB (메가바이트)', en: 'MB (Megabyte)' }, factor: 8 * 1024 ** 2 },
      { id: 'GB', label: { ko: 'GB (기가바이트)', en: 'GB (Gigabyte)' }, factor: 8 * 1024 ** 3 },
      { id: 'TB', label: { ko: 'TB (테라바이트)', en: 'TB (Terabyte)' }, factor: 8 * 1024 ** 4 },
      { id: 'PB', label: { ko: 'PB (페타바이트)', en: 'PB (Petabyte)' }, factor: 8 * 1024 ** 5 },
    ],
  },
  {
    id: 'time',
    label: { ko: '⏱️ 시간', en: '⏱️ Time' },
    type: 'linear',
    base: 's',
    units: [
      { id: 'ns', label: { ko: 'ns (나노초)', en: 'ns (Nanosecond)' }, factor: 1e-9 },
      { id: 'us', label: { ko: 'μs (마이크로초)', en: 'μs (Microsecond)' }, factor: 1e-6 },
      { id: 'ms', label: { ko: 'ms (밀리초)', en: 'ms (Millisecond)' }, factor: 1e-3 },
      { id: 's', label: { ko: 's (초)', en: 's (Second)' }, factor: 1 },
      { id: 'min', label: { ko: 'min (분)', en: 'min (Minute)' }, factor: 60 },
      { id: 'h', label: { ko: 'h (시간)', en: 'h (Hour)' }, factor: 3600 },
      { id: 'd', label: { ko: 'd (일)', en: 'd (Day)' }, factor: 86400 },
      { id: 'w', label: { ko: 'w (주)', en: 'w (Week)' }, factor: 604800 },
      { id: 'mo', label: { ko: 'mo (월)', en: 'mo (Month)' }, factor: 2629800 },
      { id: 'y', label: { ko: 'y (년)', en: 'y (Year)' }, factor: 31557600 },
    ],
  },
  {
    id: 'energy',
    label: { ko: '🔋 에너지', en: '🔋 Energy' },
    type: 'linear',
    base: 'J',
    units: [
      { id: 'J', label: { ko: 'J (줄)', en: 'J (Joule)' }, factor: 1 },
      { id: 'kJ', label: { ko: 'kJ (킬로줄)', en: 'kJ (Kilojoule)' }, factor: 1000 },
      { id: 'cal', label: { ko: 'cal (칼로리)', en: 'cal (Calorie)' }, factor: 4.184 },
      { id: 'kcal', label: { ko: 'kcal (킬로칼로리)', en: 'kcal (Kilocalorie)' }, factor: 4184 },
      { id: 'Wh', label: { ko: 'Wh (와트시)', en: 'Wh (Watt-hour)' }, factor: 3600 },
      { id: 'kWh', label: { ko: 'kWh (킬로와트시)', en: 'kWh (Kilowatt-hour)' }, factor: 3600000 },
      { id: 'BTU', label: { ko: 'BTU (영국 열량)', en: 'BTU (British Thermal Unit)' }, factor: 1055.06 },
    ],
  },
  {
    id: 'pressure',
    label: { ko: '💪 압력', en: '💪 Pressure' },
    type: 'linear',
    base: 'Pa',
    units: [
      { id: 'Pa', label: { ko: 'Pa (파스칼)', en: 'Pa (Pascal)' }, factor: 1 },
      { id: 'kPa', label: { ko: 'kPa (킬로파스칼)', en: 'kPa (Kilopascal)' }, factor: 1000 },
      { id: 'MPa', label: { ko: 'MPa (메가파스칼)', en: 'MPa (Megapascal)' }, factor: 1e6 },
      { id: 'bar', label: { ko: 'bar (바)', en: 'bar (Bar)' }, factor: 100000 },
      { id: 'psi', label: { ko: 'psi (제곱인치당 파운드)', en: 'psi (Pounds per Square Inch)' }, factor: 6894.757 },
      { id: 'atm', label: { ko: 'atm (기압)', en: 'atm (Atmosphere)' }, factor: 101325 },
      { id: 'mmHg', label: { ko: 'mmHg (수은주 밀리미터)', en: 'mmHg (Millimeter of Mercury)' }, factor: 133.322 },
    ],
  },
  {
    id: 'volume',
    label: { ko: '📦 부피', en: '📦 Volume' },
    type: 'linear',
    base: 'L',
    units: [
      { id: 'L', label: { ko: 'L (리터)', en: 'L (Liter)' }, factor: 1 },
      { id: 'mL', label: { ko: 'mL (밀리리터)', en: 'mL (Milliliter)' }, factor: 0.001 },
      { id: 'm3', label: { ko: 'm³ (세제곱미터)', en: 'm³ (Cubic Meter)' }, factor: 1000 },
      { id: 'cm3', label: { ko: 'cm³ (세제곱센티미터)', en: 'cm³ (Cubic Centimeter)' }, factor: 0.001 },
      { id: 'galUS', label: { ko: 'gal US (미국 갤런)', en: 'gal US (US Gallon)' }, factor: 3.785411784 },
      { id: 'qt', label: { ko: 'qt (쿼트)', en: 'qt (Quart)' }, factor: 0.946352946 },
      { id: 'pt', label: { ko: 'pt (파인트)', en: 'pt (Pint)' }, factor: 0.473176473 },
      { id: 'floz', label: { ko: 'fl oz (액량 온스)', en: 'fl oz (Fluid Ounce)' }, factor: 0.0295735296 },
      { id: 'cup', label: { ko: 'cup (컵)', en: 'cup (Cup)' }, factor: 0.2365882365 },
      { id: 'tbsp', label: { ko: 'tbsp (큰술)', en: 'tbsp (Tablespoon)' }, factor: 0.0147867648 },
      { id: 'tsp', label: { ko: 'tsp (작은술)', en: 'tsp (Teaspoon)' }, factor: 0.00492892159 },
    ],
  },
  {
    id: 'numbase',
    label: { ko: '🔢 진수 변환', en: '🔢 Number Base' },
    type: 'numbase',
    units: [
      { id: 'bin', label: { ko: '2진수 (Binary)', en: '2진수 (Binary)' } },
      { id: 'oct', label: { ko: '8진수 (Octal)', en: '8진수 (Octal)' } },
      { id: 'dec', label: { ko: '10진수 (Decimal)', en: '10진수 (Decimal)' } },
      { id: 'hex', label: { ko: '16진수 (Hexadecimal)', en: '16진수 (Hexadecimal)' } },
    ],
  },
  {
    id: 'fuel',
    label: { ko: '💰 연료 효율', en: '💰 Fuel Efficiency' },
    type: 'fuel',
    units: [
      { id: 'kmL', label: { ko: 'km/L (킬로미터/리터)', en: 'km/L (Kilometer/Liter)' } },
      { id: 'L100km', label: { ko: 'L/100km (리터/100km)', en: 'L/100km (Liter/100km)' } },
      { id: 'mpgUS', label: { ko: 'mpg US (미국 마일/갤런)', en: 'mpg US (US Miles/Gallon)' } },
      { id: 'mpgUK', label: { ko: 'mpg UK (영국 마일/갤런)', en: 'mpg UK (UK Miles/Gallon)' } },
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
