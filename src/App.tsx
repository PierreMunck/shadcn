import './App.css'
import TokenList from "@/components/token/List"
import TokenAdd from "@/components/token/Add"
import { TokenProvider } from "@/contexts/TokenContext"

function App() {
  return (
    <TokenProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Gestionnaire de Tokens
          </h1>
          <TokenList />
          <TokenAdd />
        </div>
      </div>
    </TokenProvider>
  )
}

export default App
