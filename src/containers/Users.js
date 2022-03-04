import { useQuery } from "react-query";
import { getUsers } from "../api";

export default function Users() {
  const { data, isLoading } = useQuery("users-data", getUsers);

  return <div>{JSON.stringify({ data })}</div>;
}
