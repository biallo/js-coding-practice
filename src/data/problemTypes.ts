export type SolutionCode = {
  javascript: string
  typescript: string
}

export type PracticeSolution = SolutionCode & {
  title: string
}

export type PracticeExample = {
  input: string
  output: string
  explanation?: string
}

export type PracticeProblem = {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  examples?: PracticeExample[]
  points: string[]
  solutions: PracticeSolution[]
}
