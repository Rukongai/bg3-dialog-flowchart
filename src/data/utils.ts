import { NodeData } from "./types";

export function parsePosition(position: string) {
  const [x, y] = position.split(";");
  return {
    x: Number(x),
    y: Number(y),
  };
}

export function checkFlagFulfilled(
  data: NodeData,
  flagState: Record<string, boolean>
) {
  const result = data.CheckFlags.every((checkFlag) => {
    return checkFlag.Flags.every((flag) => {
      if (flagState[flag.UUID] === flag.value) {
        return true;
      }
      return false;
    });
  });

  return result;
}

export function getNodesRecursive(
  record: Record<string, NodeData>,
  rootId: string
): NodeData[] {
  const visited = new Set<string>();

  function rec(id: string): NodeData[] {
    if (visited.has(id)) {
      return [];
    }
    visited.add(id);

    const node = record[id];
    if (!node.Children || node.Children.length === 0) {
      return [node];
    }

    // TODO: flag 필터 적용
    // const isFlagFulfilled = checkFlagFulfilled(node, flagState);

    // if (!isFlagFulfilled) {
    //   return [];
    // }

    return [node, ...node.Children.flatMap((child) => rec(child))];
  }

  return rec(rootId);
}

export function getAllFlags(datalist: NodeData[]) {
  return [
    ...new Map(
      datalist
        .map((data) => data.CheckFlags)
        .filter((flags) => flags.length > 0)
        .flatMap((flags) => flags.flatMap((flag) => flag.Flags))
        .map((flag) => [flag.UUID, flag] as const)
    ).values(),
  ].sort((a, b) => a.Name.localeCompare(b.Name));
}
