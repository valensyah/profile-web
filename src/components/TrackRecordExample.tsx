import { useState } from 'react'
import { SyntaxHighlight } from './SyntaxHighlight'
import { cn } from '../lib/utils'

// import '../App.css'

export  function TrackRecordExample() {
  const [count_max, setCountMax] = useState<number>(0)
  const [count_min, setCountMin] = useState<number>(0)
  const [records, setRecords] = useState<number[]>([])
  const [min, setMin] = useState<number[]>([])
  const [max, setMax] = useState<number[]>([])

  const addRecord = (record: number) => {
    setRecords([...records, record])
    handleMinMax(record)
  }

  const handleMinMax = (record: number) => {

    if (min.length === 0 && max.length === 0) {
      setMin([record])
      setMax([record])
      return
    }

    if (record < Math.min(...records)) {
      setMin([...min, record])
      setMax([...max, Math.max(...records)])
      setCountMin(count_min + 1)
    } else if (record > Math.max(...records)) {
      setMax([...max, record])
      setMin([...min, Math.min(...records)])
      setCountMax(count_max + 1)
    } else if (record === Math.min(...records) || record === Math.max(...records)) {
      setMax([...max, Math.max(...records)])
      setMin([...min, Math.min(...records)])
    } else {
      if (record < Math.max(...records) && record > Math.min(...records)) {
        setMax([...max, Math.max(...records)])
        setMin([...min, Math.min(...records)])
      }
      return
    }
  }

  const [tabs, setTabs] = useState<string>("ui-record")

  const tabHandler = (val: string) => {
    setTabs(val)
  }

  const RecordListUi = () => {
    return <div className="w-full h-[400px] flex flex-col-reverse scrollbar-none rounded border border-gray-100 shadow">
      <div className="bg-neutral-800 w-full h-fit px-4 py-2 flex justify-center items-center flex-col gap-4 rounded-b">
        <div className="flex flex-col gap-1.5">
          <div className="text-sm text-white flex gap-1 items-center">Broke Highest Record: <p className="font-bold text-green-600">{count_max}</p></div>
          <div className="text-sm text-white flex gap-1 items-center">Broke Lowest Record: <p className="font-bold text-red-600">{count_min}</p></div>
        </div>
      </div>
      <div className="px-4 w-full h-full py-5 bg-slate-100 flex flex-col gap-3 justify-start items-center relative overflow-scroll scrollbar-none">
        <h1 className="text-xl font-bold">Track your records</h1>
        <div className="flex flex-col gap-3 items-end">
          <div className="flex items-left gap-2">
            <label htmlFor="record" className="text-sm">
              Score :
            </label>
            <input type="number" id="record" name="record" placeholder='example: 25' className="w-6/12 text-sm rounded border-0 pl-2 bg-slate-200 text-slate-800 placeholder:text-slate-500 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="w-full rounded px-2 py-1.5 h-fit bg-green-500 text-white text-xs" onClick={() => addRecord(parseInt((document.getElementById('record') as HTMLInputElement).value))}>
            Add Record
          </button>
        </div>
        <div className="max-height-[120px] overflow-y-scroll scrollbar-thin">
          <table className="w-full divide-y divide-gray-200 relative">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-2.5 py-1.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game</th>
                <th className="px-2.5 py-1.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-2.5 py-1.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min</th>
                <th className="px-2.5 py-1.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((record, index) => (
                
                <tr key={index}>
                  <td className="px-2.5 py-1.5 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-2.5 py-1.5 whitespace-nowrap text-sm text-gray-500">{record}</td>
                  <td className="px-2.5 py-1.5 whitespace-nowrap text-sm text-gray-500">{min[index]}</td>
                  <td className="px-2.5 py-1.5 whitespace-nowrap text-sm text-gray-500">{max[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }

  return (
    <>
    <section id='hackerrank-test' className="w-full flex flex-col gap-4 items-center py-6">
      <p className="text-3xl font-bold font-jakarta">Min max number tracker</p>
      <div className="w-full md:w-6/12 flex flex-col gap-4 items-center px-4">
        <div className="w-full flex items-center ">
          <button 
            onClick={() => tabHandler("ui-record")} 
            className={
              cn(
                "w-full bg-transparent text-neutral-900 text-center py-3",
                tabs === "ui-record" ? "transition-all ease-out duration-100 border-b-2 border-green-400 text-green-400 font-bold bg-slate-50 shadow-xs" : ""
              )
            }>UI</button>
          <button 
            onClick={() => tabHandler("code")} 
            className={
              cn(
                "w-full bg-transparent text-neutral-900 text-center py-3",
                tabs === "code" ? "transition-all ease-in-out duration-50 border-b-2 border-green-400 text-green-400 font-bold bg-slate-50 shadow-xs" : ""
              )
            }>Code</button>
        </div>
        {tabs === "ui-record" && <RecordListUi />}
        {tabs === "code" && <SyntaxHighlight />}
      </div>
    </section>
    </>
  )
}

export default TrackRecordExample
