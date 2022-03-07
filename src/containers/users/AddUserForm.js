import { useState } from "react";
import { useMutation } from "react-query";
import * as api from "../../api";
import Alert from "../../components/Alert";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { getErrorMessageOnDeleteOrInvite } from "./helpers";

export default function AddUser() {
  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  const { mutate: inviteUser, error: inviteError } = useMutation(
    api.inviteUser
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    inviteUser(user);
  };

  return (
    <>
      <h3>Invite a person (workspace: workspace-yj)</h3>
      {inviteError && (
        <Box mb={2}>
          <Alert variant="error">
            {getErrorMessageOnDeleteOrInvite(inviteError.response.data?.data)}
          </Alert>
        </Box>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          required
          type="email"
          placeholder="Enter an email"
          value={user.email}
          onChange={({ target: { value } }) =>
            setUser((_user) => ({ ...user, email: value }))
          }
        />
        <Box mt={2}>
          <Input
            required
            type="text"
            placeholder="Enter a name"
            value={user.name}
            onChange={({ target: { value } }) =>
              setUser((_user) => ({ ...user, name: value }))
            }
          />
        </Box>
        <Box mt={3}>
          <Button variant="primary" type="submit">
            Invite
          </Button>
        </Box>
      </form>
    </>
  );
}
