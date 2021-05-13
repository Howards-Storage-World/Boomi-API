import React, { FC, useContext, useState } from "react";

export class BoomiAPI {
  private _protocol: string;
  private _host: string;
  private _port: string;
  private _basePath: string;

  constructor(protocol: string, host: string, port: string | number, basePath: string = "") {
    this._protocol = protocol;
    this._host = host;
    this._port = port.toString();
    this._basePath = basePath;
  }

  public get uri() {
    return `${this._protocol}://${this._host}:${this._port}${this._basePath}`;
  }
}

export interface BoomiAPIContext {
  endpoint: BoomiAPI;
  setEndpoint: (endpoint: BoomiAPI) => void
}

export const useBoomiAPI = () => {
  return useContext(context);
};

const useProvideBoomiAPI = () => {
  const [endpoint, setEndpoint] = useState(new BoomiAPI("https", "boomi.hsw.com.au", "443"));

  return {
    endpoint,
    setEndpoint,
  }
};

const context: React.Context<BoomiAPIContext> = React.createContext<any>({});

export const BoomiAPIProvider: FC = ({ children }) => {
  const boomiAPI = useProvideBoomiAPI();
  return (
    <context.Provider value={boomiAPI}>
      {children}
    </context.Provider>
  );
};