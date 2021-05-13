import React, { FC, useEffect, useState } from 'react';
import Axios from "axios";
import Layout from '@components/layout';
import Table from "@components/tools/Table";
import { useBoomiAPI } from "@components/tools/BoomiAPI";
import utilStyles from '@styles/utils.module.css';

const Implementation: FC<{ name: string }> = ({ name, children }) => {
  const meta = { title: name, description: `An implmentation of the HSW's Boomi API ${name} Functionality` };

  return (
    <Layout title={`Implementation: ${name} | HSW Boomi API`} meta={meta}>
        <h2 className={utilStyles.headingLg}>{name} Implementations</h2>
        {children}
    </Layout>
  )
}

interface StockLevel {
  "product-code": string,
  "quantity": number,
}
interface StoreStockLevel {
  "location-id": string,
  "location-name": string,
  "availability": StockLevel[]
}

interface StockLevelResponse {
  results: StoreStockLevel[]
}

function useLoad<T>() {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | Error | undefined>(undefined);

  async function load(fn: () => Promise<T>) {
    setLoading(true);
    try {
      const payload = await fn();
      setLoading(false);
      setResponse(payload);
      setError(undefined);
    } catch (error) {
      setLoading(false);
      setError(error);
      setResponse(undefined);
    }
  }
  return { response, error, isLoading: loading, load };
}

// eslint-disable-next-line max-lines-per-function
const StockLookup: FC = () => {
  const boomiAPI = useBoomiAPI();
  const [stores, setStores] = useState("12100 12077");
  const [products, setProducts] = useState("LTW9141 LTW9252 LTW9135");
  const { response, error, isLoading, load } = useLoad<StockLevelResponse>();

  function loader(): Promise<StockLevelResponse> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const parser = (input: string) => { return input.split(/\s*,\s*|\s+/).filter((item) => (item != "") && (item)); };
        const payload = {
          "location-ids": parser(stores),
          "SKUs": parser(products)
        }
        const resp = await Axios.post(`${boomiAPI.endpoint.uri}/ws/simple/getProductAvailability`, payload)
        resolve(resp.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  
  useEffect(() => {
    load(loader);
  }, []);


  const data = React.useMemo(() => {
    if (response && !error) {
      const SoH = response?.results.map((store: StoreStockLevel) => {
        return { storeID: store["location-id"], storeName: store["location-name"], ...store.availability.reduce((obj: Record<string, number>, item: StockLevel) => { obj[item["product-code"]] = item["quantity"]; return obj; }, {}) };
      })
      return SoH;
    }
    return [ {msg: "Something went wrong."}, ];
  }, [response]);

  const columns = React.useMemo(() => {
    const base = [ { Header: 'Store ID', accessor: 'storeID' }, { Header: 'Store Name', accessor: 'storeName' } ];
    if (response && !error) {
      const products = new Set();
      for (const store of response?.results) {
        for (const item of store.availability) {
          products.add(item["product-code"]);
        }
      }

      for (const item of products.keys()) {
        base.push({ Header: item as string, accessor: item as string });
      }
      return base;
    }

    return [ { Header: "Error / Message", accesor: "msg" } ];
  }, [response]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    load(loader);
    e.preventDefault();
  };

  const onChangeStores: React.FormEventHandler<HTMLInputElement> = (e) => {
    setStores(e.currentTarget.value);
  }
  const onChangeProducts: React.FormEventHandler<HTMLInputElement> = (e) => {
    setProducts(e.currentTarget.value);
  };

  // console.log(response)
  return (
    <Implementation name="Stock Lookup">
      <form onSubmit={onSubmit}>
        <label>Stores: </label><input type="text" className={utilStyles.input} value={stores} onChange={onChangeStores} placeholder="Store IDs seperated by spaces" style={{"width": "200px"}} /><br/>
        <label>Products: </label><input type="text" className={utilStyles.input} value={products} onChange={onChangeProducts} placeholder="Item Numbers seperated by spaces" style={{"width": "225px"}} /><br/>
        <input type="submit" className={utilStyles.input} value="Check Availabilities" />
      </form>
      <br/>
      {isLoading ? 
        <h2 className={utilStyles.headingMd}>Loading your data...</h2>
      : response !== undefined ?
        <Table columns={columns} data={data} />
        :
        <><h2 className={utilStyles.headingMd}>Error:</h2><p>{error}</p></>
      }
      
    </Implementation>
  )
};

export default StockLookup;