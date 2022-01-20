import React, { FC, useEffect, useState } from 'react';
import Axios, { AxiosError } from "axios";
import Implementation from '@components/implementation';
import Table, { headers } from "@components/tools/Table";
import { SelectBoomiEnvironment, useBoomiAPI } from "@components/tools/BoomiAPI";
import { useLoad } from "@lib/hooks";
import utilStyles from '@styles/utils.module.css';
import IFrame from "@components/tools/iframe";
import Loading from '@components/tools/loading';

interface StockLevel {
  "product-code": string,
  "quantity": number,
}
interface StoreStockLevel {
  "location-id": string,
  "location-name": string,
  "availability"?: StockLevel[]
}

interface StockLevelResponse {
  results: StoreStockLevel[]
}

// eslint-disable-next-line max-lines-per-function
const StockLookup: FC = () => {
  const boomiAPI = useBoomiAPI();
  const [stores, setStores] = useState("12100 12077");
  const [products, setProducts] = useState("LTW9141 LTW9252 LTW9135");
  const { response, error, isLoading, load } = useLoad<StockLevelResponse, string | Error | AxiosError>();

  function loader(): Promise<StockLevelResponse> {
    const parser = (input: string) => { return input.split(/\s*,\s*|\s+/).filter((item) => (item != "") && (item)); };
    const payload = {
      "location-ids": parser(stores),
      "SKUs": parser(products)
    }
    return Axios.post(`${boomiAPI.endpoint.uri}/lsc/getProductAvailability`, payload)
      .then(response => response.data);
  }
  
  useEffect(() => {
    load(loader);
  }, [boomiAPI]);

  function getProductsAsObject(store: StoreStockLevel): Record<string, number> {
    const addProduct = (products_obj: Record<string, number>, item: StockLevel) => {
      products_obj[item["product-code"]] = item["quantity"];
      return products_obj;
    }
    return (store.availability || []).reduce(addProduct, {});
  }

  const data = React.useMemo(() => {
    if (error || !response)
      return [ {msg: "Something went wrong."}, ];
    
    return response?.results.map((store: StoreStockLevel) => {
      return { 
        storeID: store["location-id"],
        storeName: store["location-name"],
        ...getProductsAsObject(store)
      };
    });
  }, [response]);

  const columns = React.useMemo(() => {
    if (error || !response)
      return headers([ ["Error / Message", "msg"] ], data);

    const base = [ 
      ['Store ID', 'storeID'],
      ['Store Name', 'storeName']
    ];
    const products = new Set<string>();
    for (const store of response?.results) {
      Object.keys(getProductsAsObject(store)).forEach(sku => products.add(sku));
    }

    for (const item of products.keys()) {
      base.push([ item as string, item as string ]);
    }
    return headers(base, data);
  }, [response]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => { load(loader); e.preventDefault(); };
  const onChangeStores: React.FormEventHandler<HTMLInputElement> = (e) => { setStores(e.currentTarget.value); };
  const onChangeProducts: React.FormEventHandler<HTMLInputElement> = (e) => { setProducts(e.currentTarget.value); };

  // const a = Axios.isAxiosError(error) ? error.response?.data?.toString() : "No detailed error message from the server.";
  // console.log(a)
  return (
    <Implementation name="Stock Lookup">
      <form onSubmit={onSubmit} style={{margin: "auto", maxWidth: "20rem"}}>
        <SelectBoomiEnvironment />
        <br/>
        <label>Stores: </label><input type="text" className={utilStyles.input} value={stores} onChange={onChangeStores} placeholder="Store IDs seperated by spaces" style={{"width": "200px"}} /><br/>
        <label>Products: </label><input type="text" className={utilStyles.input} value={products} onChange={onChangeProducts} placeholder="Item Numbers seperated by spaces" style={{"width": "225px"}} /><br/>
        <input type="submit" className={utilStyles.input} value="Check Availabilities" />
      </form>
      <br/>
      {isLoading ? 
        <Loading/>
      : response !== undefined ?
        <Table columns={columns} data={data} getRowProps={() => ({})} style={{margin: "auto", maxWidth: "100%"}}/>
        :
        <><h2 className={utilStyles.headingMd}>Error: {error?.toString()}</h2><IFrame content={Axios.isAxiosError(error) ? error.response?.data?.toString() : "No detailed error message from the server."} style={{ background: "white", width: "100%"}}></IFrame></>
      }
      
    </Implementation>
  )
};

export default StockLookup;