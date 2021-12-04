let navigate = useNavigate();
    const logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem("token");
        navigate ('/')
        alert("LogedOut")
    }