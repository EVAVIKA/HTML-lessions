import { Button, Input } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Submit_OnClick } from '../logic/LMain';

const { TextArea } = Input;

function Main(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    // ++handlers++

    function Email_OnChange(e) {
        const v = e.target.value;
        if (v.replaceAll(' ', '') || v.length === 0) setEmail(v);
    }

    function Msg_OnChange(e) {
        const v = e.target.value;
        if (v.replaceAll(' ', '') || v.length === 0) setMsg(v);
    }

    function Submit_OnChange(event) {
        const props = {};
        props.event = event;
        props.email = email;
        props.msg = msg;
        if (email.length === 0) {
            alert("Не заполнен Email");
            return;
        }
        else if (msg.length === 0) {
            alert("Не заполнен Message");
            return;
        }
        navigate('/list');
        return Submit_OnClick(props);
    }

    // --handlers--

    useEffect(function () {
        props.setPageID(props.pageIDs.main);
    }, [props])
    const element = (<>
        <div className='feedback_form'>
            <label className='email-feedback_form'>Email: <Input value={email} onChange={Email_OnChange} placeholder='Введите Вашу почту' /></label>
            <label className='text-feedback_form'>Сообщение<TextArea value={msg} onChange={Msg_OnChange} placeholder="Введите текст" /></label>
            <Button onClick={Submit_OnChange} className='button-feedback_form' type='primary'>Отправить сообщение</Button>
        </div>
    </>);
    return element;
}

export default Main;