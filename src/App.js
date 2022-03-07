import Box from "./components/Box";
import { SendMessageForm } from "./containers/chat";
import { Users, AddUserForm } from "./containers/users";
import ReactQueryProvider from "./providers/ReactQueryProvider";

function App() {
  return (
    <main>
      <ReactQueryProvider>
        <AddUserForm />
        <Box mt={4}>
          <SendMessageForm />
        </Box>
        <Box mt={4}>
          <Users />
        </Box>
      </ReactQueryProvider>
    </main>
  );
}

export default App;
