import {createContext} from "react";
export type GlobalContent = {
    gameState: string
    setGameState: (c: string) => void
    score: number
    setScore: (d: number) => void
}

export const QuizContext = createContext<GlobalContent>({
    gameState: 'menu',
    setGameState: () => {},
    score: 0,
    setScore: () => {}
})

