import { useNavigate } from "react-router-dom";
function GoTo(uri) {
    const navigate = useNavigate();
    return () => navigate(uri);
}

export default GoTo;