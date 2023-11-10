import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Change = () => {

    const lastPrice = useSelector((state) => state.lastPrice);
    
    const summaries = 'https://indodax.com/api/summaries/';
    const [change, setChange] = useState([]);
    useEffect(() => {
        fetch(summaries)
            .then(response => response.json())
            .then(dataChange => {
                const lastChange = Object.entries(dataChange)
                const lastChangee = lastChange[1]
                const lastChangeee = lastChangee[1]
                const lastChangeeeArray = Object.entries(lastChangeee).map(([name, value]) => ({ name, value }));
                
                setChange(lastChangeeeArray.slice(0.290));
                const ofds =lastChangeeeArray.value
                const jdj=parseFloat(ofds)
                console.log(typeof jdj)
                console.log(jdj)
                {parseFloat(change)}
                    {console.log(typeof change)}
                    {console.log( change)}

            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (!change || change.length === 0) {
        return <div>Loading...</div>;
    }
    if (lastPrice === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p className="border  h-10 flex items-center font-bold text-[13px] p-2">Change 24h</p>
            {change.map((data, index) => (
                <div key={index} className=' h-10 w-30 border flex items-center justify-start gap-2 p-2 text-[#636e7b] text-[13px]'>
             
                   {data.value}
                    
                    {/* {data.value && lastPrice ? (parseFloat(data.value) / parseFloat(lastPrice)).toString() : 'Loading...'} */}
                </div>
            ))}
        </div>
    );

};

export default Change;
