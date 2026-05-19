export type PracticeProblem = {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  points: string[]
  solutions: {
    javascript: string
    typescript: string
  }
}
