import { Route, Routes } from "react-router-dom"
import { inventoryApi } from "../../features/inventory/api"
import IntakeReport from "../IntakeReport"
import Inventory from "../Inventory"

const App = () => {
  inventoryApi.useGetAllQuery({})

  return (
    <Routes>
      <Route path="inventory" element={<Inventory />} />
      <Route index element={<IntakeReport />} />
    </Routes>
  )
}

export default App
