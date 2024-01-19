import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">
          Entre em sua conta
        </h1>

        <p>
          <span>Novo por aqui? </span>
          <Link to="/register">
            Crie uma conta
          </Link>
        </p>
      </header>
    </div>
  )
}