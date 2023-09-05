import { Node } from "@gustav/types";
import { Text, HStack, Center } from "@chakra-ui/react";

export interface NodeFlagProps {
  nodeData: Node;
}
//rgb(130, 170, 255)
const NodeFlag: React.FC<NodeFlagProps> = ({ nodeData }) => {
  const checkFlags = nodeData.CheckFlags;
  const setFlags = nodeData.SetFlags;
  return (
    <div>
      <Center>
        <HStack>
          {checkFlags.length > 0 && <Text color = "rgb(127, 219, 202)">Check Flag</Text> }
          {setFlags.length > 0 && <Text color = "rgb(130, 170, 255)">Set Flag</Text> }
        </HStack>
      </Center>
    </div>
  );
};
//          <Text color = "rgb(130, 170, 255)"><span>Check Flag</span></Text> rgb(127, 219, 202)
export default NodeFlag;
