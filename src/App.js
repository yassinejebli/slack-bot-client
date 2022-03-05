import Box from "./components/Box";
import { Users, AddUser } from "./containers/users";
import ReactQueryProvider from "./providers/ReactQueryProvider";

function App() {
  return (
    <main>
      <ReactQueryProvider>
        <AddUser />
        <Box mt={4}>
          <Users />
        </Box>
      </ReactQueryProvider>
    </main>
  );
}

export default App;
