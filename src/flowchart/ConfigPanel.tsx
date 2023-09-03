// import { useWeblate } from "@/weblate/useWeblate";
import { Flex, Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { useWorkspace } from "./useWorkspace";

function ConfigPanel() {
  const {
    displayJumpEdge,
    setDisplayJumpEdge,
  } = useWorkspace();

  return (
    <Flex
      direction="column"
      gap="4px"
      background="gray.800"
      border="1px solid"
      borderColor="gray.600"
      padding="8px"
      borderRadius="4px"
    >
      <FormControl
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <FormLabel htmlFor="display-jump-edge" mb="0">
          Show Jump Connection
        </FormLabel>
        <Switch
          checked={displayJumpEdge}
          onChange={(e) => setDisplayJumpEdge(e.target.checked)}
          id="display-jump-edge"
        />
      </FormControl>
    </Flex>
  );
}

export default ConfigPanel;
