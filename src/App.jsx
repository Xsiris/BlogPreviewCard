import { useState } from 'react'
import BlogPreviewCardPage from './page/BlogPreviewCardPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col item-center justify-center h-screen bg-blogYellow">
      <BlogPreviewCardPage />
    </div>
  )
}

export default App
