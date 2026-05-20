export type SolutionCode = {
  javascript: string
  typescript: string
}

export type PracticeSolution = SolutionCode & {
  title: string
}

export type PracticeProblem = {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  points: string[]
  solutions: PracticeSolution[]
}
