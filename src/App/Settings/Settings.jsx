import { useNavigate } from "react-router-dom"

export const Settings = () => {

    const navigate = useNavigate()
    return(
        <div>
            SETTINGS
            <button onClick={() => navigate(-1)}>назад</button>
        </div>
    )
}