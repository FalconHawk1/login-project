import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
        navigate("/");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-semibold mb-4">Bienvenido a la Página Principal</h1>
                <p className="text-gray-600">¡Nos alegra tenerte aquí! Explora y disfruta.</p>

                {/* Example of extra content */}
                <div className="mt-6">
                    <p className="text-sm text-gray-500">Esta es una página de inicio simple, puedes agregar más
                        contenido aquí.</p>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}

export default Home;