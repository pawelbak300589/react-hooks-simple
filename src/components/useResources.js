import { useEffect, useState } from "react";
import axios from "axios";

const useResources = (resource) => {
    const [resources, setRecources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${ resource }`);
        setRecources(response.data);
    };

    useEffect(() => {
        fetchResource(resource)
        // OR just declare async arrow function inside a function and invoke it strait away
        // (async (resource) => {
        //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${ resource }`);
        //
        //     setRecources(response.data);
        // })(resource)
    }, [resource]);

    return resources;
};

export default useResources;