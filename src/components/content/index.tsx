import { Spinner } from "@chakra-ui/react";
import { Error } from "..";
import { RESOURCE } from "../../hl";
import { AxiosError } from "axios";
import { ReactNode } from "react";

interface IProps {
  loading: boolean;
  error: AxiosError | null | string;
  actionError: () => void;
  children: ReactNode;
}

export default function RenderContent({
  loading,
  error,
  actionError,
  children,
}: IProps) {
  if (loading) {
    return <Spinner size={"xl"} />;
  }

  if (error) {
    return (
      <Error
        text={RESOURCE.REQUEST_ERROR}
        actionLabel={RESOURCE.REQUEST_RELOAD}
        action={actionError}
      />
    );
  }

  if (children) {
    return <>{children}</>;
  }

  return <></>;
}
