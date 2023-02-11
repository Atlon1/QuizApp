import {createContext} from "react";
export type GlobalContent = {
    gameState: string
    setGameState: (c: string) => void
}

export const QuizContext = createContext<GlobalContent>({
    gameState: 'menu',
    setGameState: () => {},
})

