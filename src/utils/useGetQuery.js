import { useQuery } from "@apollo/client";
import Preloader from "../components/Preloader/Preloader";

export default function useGetQuery(getQueryParam) {   
   
    const { loading, error, data } = useQuery(getQueryParam);

    if (loading) return <Preloader />;
    if (error) return <p>Err</p>;

    // let dataAbs = data
    // console.log('dataAbs', dataAbs)
    if (data) return data;

}