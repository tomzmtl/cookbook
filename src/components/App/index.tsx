import { Route, Routes } from "react-router-dom"
import RecipesView from "../RecipesView"

const App = () => {
  return (
    <Routes>
      <Route index element={<RecipesView />} />
    </Routes>
  )
}

export default App
