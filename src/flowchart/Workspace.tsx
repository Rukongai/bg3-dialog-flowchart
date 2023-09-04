import { useGustav } from "@gustav/useGustav";
import { ReactFlowProvider } from "reactflow";
import Navigator from "./Navigator";
import Flowchart from "./Flowchart";
import PropertiesPanel from "./PropertiesPanel";
import DialogOptions from "./DialogOptions";
import { NodeDataProvider } from "./useNodeData";
import { WorkspaceProvider } from "./useWorkspace";
import { Flex } from "@chakra-ui/react";

function Workspace() {
  const { dialogData } = useGustav();

  if (!dialogData) return null;

  return (
    <WorkspaceProvider>
      <NodeDataProvider dialogData={dialogData}>
        <ReactFlowProvider>
          <Navigator />
          <Flex flex="1 0 auto" maxH="100%">
            <DialogOptions />
            <Flowchart />
            <PropertiesPanel />
          </Flex>
        </ReactFlowProvider>
      </NodeDataProvider>
    </WorkspaceProvider>
  );
}

export default Workspace;
