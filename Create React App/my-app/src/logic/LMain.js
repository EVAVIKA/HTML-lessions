export function Submit_OnClick(props) {

    const body = {
        email: props.email,
        msg: props.msg,
    };
    fetch('http://localhost/save_message', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body),
    }).then(function(res){
        return res.text()
    }).then(function(text){
        console.log(text);
    });
}