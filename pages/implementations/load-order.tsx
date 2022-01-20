import React, { FC, useState } from 'react';
import XMLViewer from 'react-xml-viewer';
import Axios, { AxiosResponse } from "axios";
import Implementation from '@components/implementation';
import IFrame from "@components/tools/iframe";
import { SelectBoomiEnvironment, useBoomiAPI } from "@components/tools/BoomiAPI";
import { useLoad } from '@lib/hooks';
import utilStyles from '@styles/utils.module.css';

// eslint-disable-next-line max-lines-per-function
const StockLookup: FC = () => {
  const boomiAPI = useBoomiAPI();
  const [orderID, setOrderID] = useState("0");
  const { response, error, isLoading, load } = useLoad<string, Error & { response?: AxiosResponse }>();

  function loader(): Promise<string> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await Axios.post(`${boomiAPI.endpoint.uri}/ws/simple/executeTestOrderCreation`, orderID, { })
        resolve(resp.data as string);
      } catch (err) {
        reject(err);
      }
    });
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    load(loader);
    e.preventDefault();
  };

  function onChange(setter: (value: string) => void) {
    const handler: React.FormEventHandler<HTMLInputElement> = (e) => {
      setter(e.currentTarget.value);
    }
    return handler;
  }

  return (
    <Implementation name="Load Order">
      <form onSubmit={onSubmit} style={{margin: "auto", maxWidth: "20rem"}}>
        <SelectBoomiEnvironment />
        <br/>
        <label>Order ID: </label><input type="text" className={utilStyles.input} value={orderID} onChange={onChange(setOrderID)} placeholder="Store IDs seperated by spaces" /><br/>
        <input type="submit" className={utilStyles.input} value="Load Order" />
      </form>
      <br/>
      {isLoading ? 
        response !== undefined ? <h2 className={utilStyles.headingMd}>Loading your order...</h2> : <h2 className={utilStyles.headingMd}>Waiting for you to load an order...</h2>
      : response !== undefined ?
        <><h2 className={utilStyles.headingMd}>Loaded:</h2><p><XMLViewer xml={response} collapsible={true} theme={{ separatorColor: "#f5f5f5", textColor: "#d09f00" }}></XMLViewer></p></>
        :
        <><h2 className={utilStyles.headingMd}>Error: {error?.message}</h2><p><IFrame content={error?.response?.data} style={{ background: "white", width: "100%"}}></IFrame></p></>
      }
      
    </Implementation>
  )
};

export default StockLookup;