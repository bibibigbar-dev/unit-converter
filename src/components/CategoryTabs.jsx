import { categories } from '../data/units'

export default function CategoryTabs({ activeId, onChange }) {
  return (
    <nav className="category-nav">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn${activeId === cat.id ? ' active' : ''}`}
          onClick={() => onChange(cat.id)}
          aria-pressed={activeId === cat.id}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  )
}
