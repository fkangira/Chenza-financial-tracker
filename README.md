# Chenza

Chenza is a simple student finance tracker made with HTML, CSS, and JavaScript.

## Project Theme
Student Finance Tracker

## Purpose
Chenza helps students record daily expenses, track spending, and manage a simple budget.

## Main Sections
The app will have these sections:

1. About
2. Dashboard
3. Records
4. Add / Edit Expense
5. Settings

## Simple Design Plan
The design will be simple, clean, and responsive.

- White background
- Dark text
- One green accent color
- Simple top navigation
- Cards for summary
- Table for records
- Clean form inputs
- Simple buttons
- No complicated graphics or decorations

## Wireframe Plan

### Desktop Layout
- Top navigation bar
- Page title
- Dashboard cards
- Records table
- Add expense form
- Settings section
- About section

### Tablet Layout
- Same sections
- More compact spacing
- Cards may stack into 2 columns

### Mobile Layout
- One-column layout
- Navigation becomes simpler
- Cards stack vertically
- Records can appear as cards instead of a wide table

## Data Model
Each expense record will include:

- `id`
- `description`
- `amount`
- `category`
- `date`
- `createdAt`
- `updatedAt`

Example record:

```js
{
  id: "txn_001",
  description: "Lunch at cafeteria",
  amount: 5000,
  category: "Food",
  date: "2026-10-15",
  createdAt: "2026-10-15T10:00:00.000Z",
  updatedAt: "2026-10-15T10:00:00.000Z"
}