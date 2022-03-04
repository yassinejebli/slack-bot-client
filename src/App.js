import Users from "./containers/Users";
import ReactQueryProvider from "./providers/ReactQueryProvider";

function App() {
  return (
    <main>
      <ReactQueryProvider>
        <Users />
      </ReactQueryProvider>
    </main>
  );
}

export default App;
