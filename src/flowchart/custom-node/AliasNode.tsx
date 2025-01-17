import { Node } from "@gustav/types";
import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const AliasNode = memo<NodeProps<Node>>(({ isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>Error: AliasNode - Direct Access</div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </>
  );
});

export default AliasNode;