import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ResultList from "./ResultList";
import './styles.scss'
import { IAppData } from "../types/IAppData";
import { getMinMaxSpending } from "../services/spending-service";
import { filterData } from "../services/filter-service";
import { ICategory } from "../types/ICategory";
import { hierarchy } from "../services/category-service";

const App = () => {
  const [data, setData] = useState<IAppData[]>([])
  const [fiteredData, setFilteredData] = useState<IAppData[]>(data);
  const [maxSpending, setMaxSpending] = useState<number>(0)
  const [category, setCategory] = useState<ICategory | null>(null);

  // Grab the initial data
  useEffect(() => {
    const url = 'http://localhost:8080/data';
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  // Calculate the initial max spend
  useEffect(() => {
    const { max } = getMinMaxSpending(data);
    setMaxSpending(max?.spend || 0);
  }, [data])

  // Filter the data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilteredData(filterData(data, maxSpending, category))
      return () => clearTimeout(timeout);
    }, 100)
  }, [maxSpending, data, category])

  return (
    <div className="app">
      <div className='sidebar'>
        <Sidebar
          data={data}
          maxSpending={maxSpending}
          onMaxSpendingChange={setMaxSpending}
          hierarchy={hierarchy}
          onSelectCategory={setCategory}
          selectedCategory={category}
        />
      </div>
      <div className="results">
        <ResultList data={fiteredData} />
      </div>
    </div>
  );
}

export default App;
