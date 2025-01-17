import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { JumpNode } from "@gustav/types";

const JumpNode = memo<NodeProps<JumpNode>>(({ data, isConnectable }) => {
  const category = data.Constructor;

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>[{category}]</div>
      <div>Click to Jump</div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </>
  );
});

export default JumpNode;