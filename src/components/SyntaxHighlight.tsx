import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `export function TrackRecordExample() {
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

  return (
    <div className="w-full h-fit flex justify-center items-center p-4">
      <div className="w-3/12 h-[400px] flex flex-col-reverse scrollbar-none rounded-2xl overflow-hidden border border-gray-100 shadow">
        <div className="bg-neutral-800 w-full h-fit px-4 py-2 flex justify-center items-center flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="text-sm text-white flex gap-1 items-center">
              Broke Highest Record: <p className="font-bold text-green-600">{count_max}</p>
            </div>
            <div className="text-sm text-white flex gap-1 items-center">
              Broke Lowest Record: <p className="font-bold text-red-600">{count_min}</p>
            </div>
          </div>
        </div>
        <div className="px-4 w-full h-full py-5 bg-slate-100 flex flex-col gap-3 justify-start items-center relative overflow-scroll scrollbar-none">
          <h1 className="text-xl font-bold">Track your records</h1>
          <div className="flex flex-col gap-3 items-end">
            <div className="flex items-left gap-2">
              <label htmlFor="record" className="text-sm">
                Score :
              </label>
              <input
                type="number"
                id="record"
                name="record"
                placeholder="example: 25"
                className="w-6/12 text-sm rounded border-0 pl-2 bg-slate-200 text-slate-800 placeholder:text-slate-500 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="w-full rounded px-2 py-1.5 h-fit bg-green-500 text-white text-xs"
              onClick={() => addRecord(parseInt((document.getElementById('record') as HTMLInputElement).value))}
            >
              Add Record
            </button>
          </div>
          <div className="max-height-[120px] overflow-y-scroll scrollbar-none">
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
    </div>
  )
}

export default TrackRecordExample`;

export function SyntaxHighlight() {
  return (
    <div className="codesnip w-full h-fit md:h-[400px] rounded overflow-hidden shadow">
      <SyntaxHighlighter
        language="typescript"
        style={atomOneDark}
        customStyle={{
          margin: 0,
          padding: "24px",
          fontSize: "13.5px",
          lineHeight: "1.6",
          height: "100%",
        }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}