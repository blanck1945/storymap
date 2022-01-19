import { AppRouterInterface } from "../../models/Types/Router";

export const AppRouter: AppRouterInterface[] = [
  {
    path: "/home",
    name: "Home",
    isLog: true,
  },
  {
    path: "/estructura",
    name: "Estructura",
    isLog: true,
  },
  {
    path: "/personajes",
    name: "Personajes",
    isLog: true,
  },
  {
    path: "/mundo",
    name: "Mundo",
    isLog: true,
  },
  {
    path: "/posts",
    name: "Posts",
    isLog: true,
  },
  {
    path: "/users",
    name: "Usuarios",
    isLog: true,
  },
  {
    path: "/login",
    name: "Iniciar Sesion",
    isLog: false,
  },
  {
    path: "/signUp",
    name: "Registrarse",
    isLog: false,
  },
];
