export interface Post {
  title: string
  description: string
  date: string
  _path: string
  content: string
  _dir: string
  _draft?: boolean
  _partial?: boolean
  _locale?: string
  _empty?: boolean
  _type?: 'markdown' | 'yaml' | 'json'
} 