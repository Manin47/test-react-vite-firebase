import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "user"));
                const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(items);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from Firebase</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {JSON.stringify(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
