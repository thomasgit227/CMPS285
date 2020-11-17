import Axios from 'axios';
import React, {
    useEffect,
    useState 
} from 'react';
import { Table } from 'reactstrap';
import './home_page.css';

export default function EditHistory() {

    const [recentProperties, setRecentProperties] = useState(null);

    //getting from endpoint
    useEffect(() => {   
        var fetchData = async () => {
            var res = await Axios.get("https://localhost:44378/api/Properties/recent");
            //console.log(res.data);
            setRecentProperties(res.data);
        }
        fetchData();
    }, [])



    return (
        <div>
            <h4 className = 'edithistory_heading'>
                Recent Changes
            </h4>
            <Table className = 'edithistory'>
                <thead>
                    <tr>
                        <th>Changed Property</th>
                        <th>Date of Change</th>
                        <th>Changed by</th>
                    </tr>
                </thead>
                <tbody>
                    {recentProperties && 
                    // Map is iterating through each of the properties and rendering a row for each
                    // With the values because EVERYTHING in brackets gets rendered as JavaScript
                    // Look into falsies
                        recentProperties.map((recentProperty) => {
                            // console.log(recentProperty);
                            //Null Coalescing Operator "??" If object on left is null --> Display object on right
                            return (
                                <tr>
                                    <td>{recentProperty.name}</td>
                                    <td>{recentProperty.created}</td>
                                    <td>{recentProperty.UsersId??"Anonymous"}</td> 
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}