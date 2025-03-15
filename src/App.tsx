import siteConfig from "./config/siteConfig"
import { Route, Routes } from "react-router-dom"

const App: React.FC = () => {
  return (
    <>
      <Routes>
        {siteConfig.pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<page.page />}
          />
        ))}
      </Routes>
    </>
  )
}

export default App
