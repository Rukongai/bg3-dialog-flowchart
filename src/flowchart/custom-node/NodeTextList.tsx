import { Divider, VStack } from "@chakra-ui/react";
import { Node, LocalizedString } from "@gustav/types";
import { stringifyRuleGroup } from "@gustav/utils";
import { Fragment } from "react";

interface NodeTextListProps {
  nodeData: Node;
}

export const NodeTextList: React.FC<NodeTextListProps> = ({ nodeData }) => {
  const isEndNode = nodeData.EndNode;
  const rollAdvantageReason =
    nodeData.Constructor === "ActiveRoll" ||
    nodeData.Constructor === "PassiveRoll"
      ? nodeData.RollAdvantageReason
      : null;

  return (
    <VStack divider={<Divider borderWidth={2} />}>
      {nodeData.TaggedTextList.map((TaggedText, i) => {
        const hasRule = TaggedText.HasTagRule;
        return (
          <Fragment key={i}>
            {hasRule && <div>{stringifyRuleGroup(TaggedText.RuleGroup)}</div>}
            <VStack divider={<Divider />}>
              {rollAdvantageReason && (
                <NodeText LocalizedString={rollAdvantageReason} />
              )}
              {TaggedText.TagTexts.map((TagText) => (
                <NodeText key={TagText.LineId} LocalizedString={TagText.Text} />
              ))}
            </VStack>
          </Fragment>
        );
      })}
      {isEndNode && <div>{"<End Conversation>"}</div>}
    </VStack>
  );
};

interface NodeTextProps {
  LocalizedString: LocalizedString;
}

export const NodeText: React.FC<NodeTextProps> = ({
  LocalizedString: LocalizedString,
}) => {

  const sourceText = LocalizedString.Value;

  return (
    <div>
      <div>{sourceText}</div>
    </div>
  );
};
