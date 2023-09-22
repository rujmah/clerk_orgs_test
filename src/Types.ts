import { SetStateAction } from "react";

export type SetStateActionProps = {
  setPage: React.Dispatch<SetStateAction<string>>;
};
