export interface PriceItem {
  code: string
  nomenclature: string
  name: string
  price: number
}

export interface PriceSubtitle {
  subtitle: string
}

export interface PriceSection {
  id: string
  number: string
  title: string
  items: (PriceItem | PriceSubtitle)[]
}

export interface PriceBlock {
  id: string
  title: string
  description: string
  sectionIds: string[]
}
