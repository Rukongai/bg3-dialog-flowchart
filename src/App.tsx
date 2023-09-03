import {
  Button,
  ChakraProvider,
  Flex,
  Input,
  cookieStorageManager,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Workspace from "./flowchart/Workspace";
import { GustavProvider, useGustav } from "./gustav/useGustav";
import theme from "./theme";

function PathSelector() {
  const { path, setPath } = useGustav();
  const [value, setValue] = useState(path);

  useEffect(() => {
    setValue(path);
  }, [path]);

  return (
    <Flex>
      <Input
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setPath(value);
          }
        }}
        placeholder="File Path"
      />
      <Button onClick={() => setPath(value)}>Load</Button>
    </Flex>
  );
}

function App() {
  return (
    <ChakraProvider
      colorModeManager={cookieStorageManager}
      theme={theme}
      resetCSS
    >
      <GustavProvider>
        <Flex
          direction={"column"}
          height={"100vh"}
          width={"100vw"}
          overflow="hidden"
        >
          <PathSelector />
          <Workspace />
        </Flex>
      </GustavProvider>
    </ChakraProvider>
  );
}

export default App;
