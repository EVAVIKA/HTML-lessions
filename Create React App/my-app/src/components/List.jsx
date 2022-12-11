import { List } from 'antd';
import { useState, useEffect } from 'react';

function ListPage(props) {
    const [data, setData] = useState([])
    fetch('http://localhost/all_messages', {
        method: 'GET'
    }).then(function (response) {
        return response.json();
    }).then(function (docs) {
        setData(docs);
    });
    useEffect(() => {
        props.setPageID(props.pageIDs.list);
    }, [props]);
    return (
        <>
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <div className='list-item'>
                            <h3>{item?.email}</h3>
                            <p>{item?.msg}</p>
                        </div>
                    </List.Item>
                )}
            /></>
    );
}

export default ListPage;