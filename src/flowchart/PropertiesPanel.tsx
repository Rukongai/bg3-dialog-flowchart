import { stringifyRuleGroup } from "@/gustav/utils";
import { CopyIcon, PhoneIcon } from "@chakra-ui/icons";
import { Center, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import type * as Gustav from "@gustav/types";
import { useAudio } from "@gustav/useAudio";
import { useRef, useState } from "react";
import { useOnSelectionChange } from "reactflow";
import { useNodeData } from "./useNodeData";

function PropertiesPanel() {
  const [data, setData] = useState<Gustav.Node>();
  const { getSpeakerName } = useNodeData();

  useOnSelectionChange({
    onChange(selection) {
      setData(selection.nodes[0]?.data);
    },
  });

  if (!data)
    return (
      <Center
        borderLeft={1}
        borderStyle="solid"
        borderColor="gray.600"
        width="540px"
        padding={4}
      >
        Select a node to see its properties.
      </Center>
    );

  const speakerName = getSpeakerName(data.SpeakerNo);
  const rollAdvantageReason = (data as Gustav.RollNode).RollAdvantageReason;
  

  return (
    <VStack
      alignItems="stretch"
      borderLeft={1}
      borderStyle="solid"
      borderColor="gray.600"
      width="480px"
      maxHeight="calc(100vh - 120px)"
      padding={4}
      textOverflow="fade"
      // overflowX="hidden"
      // overflowY="auto"
      divider={<Divider borderWidth={2} />}
    >
      <div>
        <Text fontSize="xs" fontWeight="semibold">
          UUID
        </Text>
        <span>{data.UUID}</span>
        {data.EndNode && <div>{"<End Conversation>"}</div>}
      </div>
      {rollAdvantageReason && (
        <RollAdvantageProperties
          title="ROLL ADVANTAGE REASON"
          RollAdvantage={rollAdvantageReason}
        />
      )}
      {data.CheckFlags.length > 0 && (
        <FlagProperties title="CHECK FLAGS" FlagList={data.CheckFlags} />
      )}
      {data.SetFlags.length > 0 && (
        <FlagProperties title="SET FLAGS" FlagList={data.SetFlags} />
      )}
      {data.TaggedTextList.length > 0 && (
        <TextProperties
          speakerName={speakerName}
          TaggedTextList={data.TaggedTextList}
        />
      )}
      <div>
        <Text fontSize="xs" fontWeight="semibold">
          EditorData
        </Text>
      </div>
    </VStack>
  );
}

const RollAdvantageProperties: React.FC<{
  title: string;
  RollAdvantage: Gustav.LocalizedString;
}> = ({ title, RollAdvantage }) => {
  return (
    <div>
      <Text fontSize="xs" fontWeight="semibold">
        {title}
      </Text>
      <div>
        <NodeText LocalizedString={RollAdvantage} />
      </div>
    </div>
  );
};
//Text color = "rgb(130, 170, 255)
const FlagProperties: React.FC<{
  title: string;
  FlagList: Gustav.FlagGroup[];
}> = ({ title, FlagList }) => {
  return (
    <div>
      <Text fontSize="xs" fontWeight="semibold" color={title === "SET FLAGS" ? "rgb(130, 170, 255)": "rgb(127, 219, 202)"}>
        {title}
      </Text>
      {FlagList.map((flagGroup, i) => (
        <div key={i}>
          {flagGroup.Flags.map((flag) => (
            <div key={flag.UUID}>
              <div>
                {flag.Name}<Text color={flag.value ? "rgb(173, 219, 103)": "rgb(255, 88, 116)"}> {String(flag.value)}</Text>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const TextProperties: React.FC<{
  speakerName: string;
  TaggedTextList: Gustav.TaggedText[];
}> = ({ speakerName, TaggedTextList }) => {
  return (
    <div>
      <VStack divider={<Divider />} alignItems="flex-start">
        <div>
          <Text fontSize="xs" fontWeight="semibold">
            TEXTS
          </Text>
          <div>Speaker: {speakerName}</div>
        </div>
        {TaggedTextList.map((TaggedText, i) => {
          const hasRule =
            TaggedText.RuleGroup.Rules.flatMap((rule) => rule.TagNames).length >
            0;
          return (
            <VStack alignItems="flex-start" key={i}>
              {hasRule && <div>{stringifyRuleGroup(TaggedText.RuleGroup)}</div>}
              {TaggedText.TagTexts.map((TagText) => (
                <NodeText
                  key={TagText.LineId}
                  speakerName={speakerName}
                  LocalizedString={TagText.Text}
                />
              ))}
            </VStack>
          );
        })}
      </VStack>
    </div>
  );
};

const NodeText: React.FC<{
  speakerName?: string;
  LocalizedString: Gustav.LocalizedString;
}> = ({ speakerName, LocalizedString }) => {
  const sourceText = LocalizedString.Value;
  const handle = LocalizedString.Handle;

  const { isReady, audioProps } = useAudio(handle);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${speakerName}: ${sourceText}`);
  };

  return (
    <div>
      <div>{sourceText}</div>
      <HStack>
        {speakerName && (
          <Text cursor="pointer" onClick={handleCopy}>
            Copy <CopyIcon mx="2px" />
          </Text>
        )}
        {isReady && (
          <Text cursor="pointer" onClick={() => audioRef.current?.play()}>
            Play <PhoneIcon mx="2px" />
          </Text>
        )}
        <audio {...audioProps} ref={audioRef} />
      </HStack>
    </div>
  );
};

export default PropertiesPanel;
