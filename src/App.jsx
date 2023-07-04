import FirstRound from "./components/FirstRound";
import Layout from "./components/Layout";
import Pyramide from "./components/Pyramide";
import SecondRound from "./components/SecondRound";
import ThirdRound from "./components/ThirdRound";
import Welcome from "./components/Welcome";
import { useGameState } from "./context/GameStateProvider";

function App() {
  const { gameState } = useGameState();
  return (
    <main className="h-screen max-w-[320px] mx-auto ">
      {gameState === "welcome" && <Welcome />}
      {gameState === "first-round" && (
        <Layout>
          <FirstRound />
        </Layout>
      )}
      {gameState === "second-round" && (
        <Layout>
          <SecondRound />
        </Layout>
      )}
      {gameState === "third-round" && (
        <Layout>
          <ThirdRound />
        </Layout>
      )}
      {gameState === "pyramide" && <Pyramide />}
    </main>
  );
}

export default App;
