import { useState, useEffect } from "react";
import { List } from "../Atom/List2";

const Change = () => {
    const summaries = 'https://indodax.com/api/summaries/';
    const [change, setChange] = useState([]);
    useEffect(() => {
        fetch(summaries)
            .then(response => response.json())
            .then(dataChange => {
                const lastChange = Object.entries(dataChange)
                const lastChangee =lastChange[1]
                const lastChangeee =lastChangee[1]
                const lastChangeeeArray = Object.entries(lastChangeee).map(([name, value]) => ({ name, value }));


                setChange(lastChangeeeArray);
               
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (!change || change.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {change.map((data, index) => (
                <List width={'w-[150px] flex justify-end'} key={index}>
                    {data.value}
                </List>
            ))}
        </div>
    );

};

export default Change;
