import { Key } from "react";

export interface MyFormValue {
  _id?: Key | null | undefined;
  firstName: string;
  lastName: string;
  email: string;
  status: "Active" | "InActive";
}
