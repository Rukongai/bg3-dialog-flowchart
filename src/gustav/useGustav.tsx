import * as React from "react";
import { DialogData } from "./types";
import { DocumentRoot } from "./testtypes";

const DIALOG_URL = "data/bg3_dialog/";
const DIALOGJSON_URL = "data/bg3_jsons/Base/";
// const DIALOG_URL = "http://localhost:8080/";
const DEFAULT_PATH =
  "Mods/GustavDev/Story/Dialogs/Companions/Minthara_InParty.json";

type GustavProviderProps = {
  children: React.ReactNode;
};


const urlParams = new URLSearchParams(window.location.search);

function useGustavState() {
  const [path, setPath] = React.useState<string>(
    urlParams.get("path") ?? DEFAULT_PATH
  );
  const [dialogData, setDialogData] = React.useState<DialogData>();
  const [documentRoot, setdocumentRoot] = React.useState<DocumentRoot>();

  React.useEffect(() => {
    if (path !== undefined) {
      fetch(DIALOG_URL + path)
        .then((response) => response.json())
        .then((data) => setDialogData(data));
      fetch(DIALOGJSON_URL + path)
        .then((response2) => response2.json())
        .then((data2) => setdocumentRoot(data2));
    }
  }, [path]);

  return {
    documentRoot,
    dialogData,
    path,
    setPath,
  };
}

const GustavStateContext = React.createContext<
  ReturnType<typeof useGustavState> | undefined
>(undefined);

function GustavProvider({ children }: GustavProviderProps) {
  const value = useGustavState();

  return (
    <GustavStateContext.Provider value={value}>
      {children}
    </GustavStateContext.Provider>
  );
}

function useGustav() {
  const context = React.useContext(GustavStateContext);
  if (context === undefined) {
    throw new Error("useGustav must be used within a GustavProvider");
  }
  return context;
}

export { GustavProvider, useGustav };
