import { Button as CButton } from "@chakra-ui/react";

function Button({ label, args }: { label: string; args?: any }) {
  return <CButton {...args}>{label}</CButton>;
}

export default Button;
