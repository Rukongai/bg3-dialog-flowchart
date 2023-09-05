import { HStack, Divider, Text, VStack } from "@chakra-ui/react";
import { useWorkspace } from "./useWorkspace";
// import type * as Gustav from "@gustav/testtypes";
// import { useRef, useState } from "react";
// import { useOnSelectionChange } from "reactflow";

function DialogOptions() {
  const jsonRoot = useWorkspace();
  const DialogProperties = jsonRoot.documentRoot?.save.regions.dialog
  const EditorData = jsonRoot.documentRoot?.save.regions.editorData

  // DialogProperties
  //   && Object.keys(DialogProperties).length === 0 && DialogProperties.constructor === Object;
  // EditorData
  //   && Object.keys(EditorData).length === 0 && EditorData.constructor === Object;



  return (
    <VStack
      alignItems="stretch"
      borderLeft={1}
      borderStyle="solid"
      borderColor="gray.600"
      width="480px"
      maxHeight="calc(100vh - 120px)"
      wordBreak="break-word"
      padding={4}
      overflowX="hidden"
      overflowY="auto"
      divider={<Divider borderWidth={2} />}
    >
      <div>
        <Text fontSize="m" fontWeight="semibold">
          Dialog File Options
        </Text>
          <span></span>
      </div>
      <div>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">Category</Text>
          <Text fontSize="xs">{DialogProperties?.category?.value}</Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">UUID: </Text>
          <Text fontSize="xs">{DialogProperties?.UUID?.value}</Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold"> TimelineId: </Text>
          <Text fontSize="xs">{DialogProperties?.TimelineId?.value}</Text>
        </HStack>
      </div>
      <div>
        <Text fontSize="xs" fontWeight="semibold">
          AllowDeadSpeakers: <span>{DialogProperties?.AllowDeadSpeakers?.value.toString()}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          DefaultSpeakerIndex: <span>{DialogProperties?.DefaultSpeakerIndex?.value}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsAllowingJoinCombat: <span>{DialogProperties?.IsAllowingJoinCombat?.value.toString()}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsBehaviour: <span>{DialogProperties?.IsBehaviour?.value.toString()}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsPrivateDialog: <span>{DialogProperties?.IsPrivateDialog?.value.toString()}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsSubbedDialog: <span>{DialogProperties?.IsSubbedDialog?.value.toString()}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsWorld: <span>{DialogProperties?.IsWorld?.value.toString()}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          Automated: <span>{DialogProperties?.automated?.value.toString()}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          issfxdialog: <span>{DialogProperties?.issfxdialog?.value.toString()}</span>
        </Text>
        <Divider />
        <Text fontSize="xs" fontWeight="semibold"> Synopsis: </Text>
        <Text fontSize="xs">{EditorData?.synopsis.value}</Text>
      </div>
      <div>
        <Text fontSize="xs" fontWeight="semibold">

        </Text>
      </div>
    </VStack>
  );
}
// const DialogProperties: React.FC<{
//   speakerName: string;
//   TaggedTextList: Gustav.TaggedText[];
// }> = ({ speakerName, TaggedTextList }) => {
//   return (
//     <div>
//       <VStack divider={<Divider />} alignItems="flex-start">
//         <div>
//           <Text fontSize="xs" fontWeight="semibold">
//             TEXTS
//           </Text>
//           <div>Speaker: {speakerName}</div>
//         </div>
//         {TaggedTextList.map((TaggedText, i) => {
//           const hasRule =
//             TaggedText.RuleGroup.Rules.flatMap((rule) => rule.TagNames).length >
//             0;
//           return (
//             <VStack alignItems="flex-start" key={i}>
//               {hasRule && <div>{stringifyRuleGroup(TaggedText.RuleGroup)}</div>}
//               {TaggedText.TagTexts.map((TagText) => (
//                 <NodeText
//                   key={TagText.LineId}
//                   speakerName={speakerName}
//                   LocalizedString={TagText.Text}
//                 />
//               ))}
//             </VStack>
//           );
//         })}
//       </VStack>
//     </div>
//   );
// };

export default DialogOptions;
