import { HStack, Divider, Text, VStack } from "@chakra-ui/react";
import { useWorkspace } from "./useWorkspace";

function DialogOptions() {
  const jsonRoot = useWorkspace();
  const DialogProperties = jsonRoot.documentRoot?.save.regions.dialog
  const EditorData = jsonRoot.documentRoot?.save.regions.editorData

  
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
          Dialog File Properties
        </Text>
          <span></span>
      </div>
      <div>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">Category</Text>
          <Text fontSize="xs">{DialogProperties?.category?.value ?? "-"}</Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">UUID: </Text>
          <Text fontSize="xs">{DialogProperties?.UUID?.value ?? "-"}</Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold"> TimelineId: </Text>
          <Text fontSize="xs">{DialogProperties?.TimelineId?.value ?? "-"}</Text>
        </HStack>
      </div>
      <div>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">AllowDeadSpeakers: </Text>
          <Text fontSize="xs" color={DialogProperties?.AllowDeadSpeakers?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.AllowDeadSpeakers?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">DefaultSpeakerIndex: </Text>
          <Text fontSize="xs" color={DialogProperties?.DefaultSpeakerIndex?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.DefaultSpeakerIndex?.value ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">IsAllowingJoinCombat: </Text>
          <Text fontSize="xs" color={DialogProperties?.IsAllowingJoinCombat?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.IsAllowingJoinCombat?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">IsBehaviour: </Text>
          <Text fontSize="xs" color={DialogProperties?.IsBehaviour?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.IsBehaviour?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">IsPrivateDialog: </Text>
          <Text fontSize="xs" color={DialogProperties?.IsPrivateDialog?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.IsPrivateDialog?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">IsSubbedDialog: </Text>
          <Text fontSize="xs" color={DialogProperties?.IsSubbedDialog?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.IsSubbedDialog?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">IsWorld: </Text>
          <Text fontSize="xs" color={DialogProperties?.IsWorld?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.IsWorld?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">Automated: </Text>
          <Text fontSize="xs" color={DialogProperties?.automated?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.automated?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">issfxdialog: </Text>
          <Text fontSize="xs" color={DialogProperties?.issfxdialog?.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}><span>{DialogProperties?.issfxdialog?.value.toString() ?? "-"}</span></Text>
        </HStack>
        <Divider borderWidth={2} />
        <VStack>
          <Text fontSize="xs" fontWeight="semibold"> Synopsis: </Text>
          <Text fontSize="xs">{EditorData?.synopsis.value ?? "-"}</Text>
        </VStack>
      </div>
    </VStack>
  );
}

export default DialogOptions;
