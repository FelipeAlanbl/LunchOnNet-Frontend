import useAuth from '../../hooks/useAuth';

function Menu(){

    const { handleLogout } = useAuth()

    return(
        <h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </h1>
    )
}

export default Menu;