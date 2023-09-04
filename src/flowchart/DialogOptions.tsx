import { HStack, Divider, Text, VStack } from "@chakra-ui/react";
import { useWorkspace } from "./useWorkspace";

function DialogOptions() {
  const rootId = useWorkspace();

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
          <Text fontSize="xs">{rootId.dialogData?.Category}</Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold">UUID: </Text>
          <Text fontSize="xs">{rootId.dialogData?.UUID}</Text>
        </HStack>
        <HStack>
          <Text fontSize="xs" fontWeight="semibold"> TimelineId: </Text>
          <Text fontSize="xs">{rootId.dialogData?.TimelineId}</Text>
        </HStack>
      </div>
      <div>
        <Text fontSize="xs" fontWeight="semibold">
          AllowDeadSpeakers: <span>{rootId.dialogData?.AllowDeadSpeakers}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          DefaultSpeakerIndex: <span>{rootId.dialogData?.DefaultSpeakerIndex}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsAllowingJoinCombat: <span>{rootId.dialogData?.IsAllowingJoinCombat}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsBehaviour: <span>{rootId.dialogData?.IsBehaviour}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsPrivateDialog: <span>{rootId.dialogData?.IsPrivateDialog}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsSubbedDialog: <span>{rootId.dialogData?.IsSubbedDialog}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          IsWorld: <span>{rootId.dialogData?.IsWorld}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          Automated: <span>{rootId.dialogData?.automated}</span>
        </Text>
        <Text fontSize="xs" fontWeight="semibold">
          issfxdialog: <span>{rootId.dialogData?.issfxdialog}</span>
        </Text>
      </div>
      <div>
        <Text fontSize="xs" fontWeight="semibold">

        </Text>
      </div>
    </VStack>
  );
}

export default DialogOptions;
