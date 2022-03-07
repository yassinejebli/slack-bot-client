import { useState } from "react";
import { useMutation } from "react-query";
import * as api from "../../api";
import Alert from "../../components/Alert";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function SendMessageForm() {
  const [message, setMessage] = useState("");
  const { mutate: sendMessage, error } = useMutation(api.sendMessage, {
    onSuccess: () => alert("Message sent successfully"),
  });

  const handleSendMessage = (ev) => {
    ev.preventDefault();
    sendMessage({ message });
  };

  return (
    <div>
      <h3>Send a Message to "#general" channel (workspace: workspace-yj)</h3>
      {error && (
        <Alert variant="error">
          {/* TODO: set a user friendly error message */}
          {JSON.stringify({ error })}
        </Alert>
      )}
      <form onSubmit={handleSendMessage}>
        <Input
          type="text"
          placeholder="Enter a message..."
          required
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <Box mt={3}>
          <Button variant="primary">Send</Button>
        </Box>
      </form>
    </div>
  );
}
