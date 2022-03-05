import { useMutation, useQuery } from "react-query";
import * as api from "../../api";
import Avatar from "../../components/Avatar";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import { getErrorMessageOnDeleteOrInvite } from "./helpers";

export default function Users() {
  const { data, isLoading } = useQuery("users-data", api.getUsers, {
    initialData: [],
  });
  const { mutate: deleteUser, error: deleteError } = useMutation(
    api.deleteUser
  );
  const handleDeleteUser = (user) => {
    if (window.confirm(`Do you really want to delete "${user.name}" user`)) {
      // administrative permissions needed for app.client.admin.users.remove method but Apps with this feature are only available to Enterprise customers
      deleteUser(user.id);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {deleteError && (
        <Alert variant="error">
          {getErrorMessageOnDeleteOrInvite(deleteError.response.data?.data)}
        </Alert>
      )}
      <Table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>ID</th>
            <th>Name</th>
            <th>Real Name</th>
            <th>Email Confirmed</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            const hideDeleteButton =
              user.is_bot || user.is_admin || user.deleted;
            return (
              <tr key={user.id}>
                <td>
                  <Avatar
                    height="60px"
                    alt={`${user.name}-profile-pic`}
                    src={user.profile.image_72}
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.real_name}</td>
                <td>{user.is_email_confirmed ? "Yes" : "No"}</td>
                <td>
                  {!hideDeleteButton && (
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteUser(user)}
                    >
                      Delete
                    </Button>
                  )}
                  {user.deleted && <>Deleted</>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
