import GoTo from '../services/navigate';
import { Button } from 'antd';

function Header(props) {
    return (<>
        {props.pageID === props.pageIDs.list ? "" : <Button onClick={GoTo('/list')}>В Список</Button>}
        {props.pageID === props.pageIDs.main ? "" :  <Button onClick={GoTo('/test')}>На главную</Button>}
    </>);
}

export default Header;