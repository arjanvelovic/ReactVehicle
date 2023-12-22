import Home from '../pages/Home'
import Cart from '../pages/Cart'
import About from '../pages/About'
import Vehicles from '../pages/Vehicles'
import Model3 from '../pages/Model3'
import ModelS from '../pages/ModelS'
import ModelX from '../pages/ModelX'
import ModelY from '../pages/ModelY'
import Cybertruck from '../pages/Cybertruck'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/cart",
      component: Cart,
      name: "Cart",
    },
    {
      path: "/about",
      component: About,
      name: "About",
    },
    {
      path: "/vehicles",
      component: Vehicles,
      name: "Vehicles",
    },
    {
      path: "/model3",
      component: Model3,
      name: "Model 3",
    },
    {
      path: "/models",
      component: ModelS,
      name: "Model S",
    },
    {
      path: "/modely",
      component: ModelY,
      name: "Model Y",
    },
    {
      path: "/modelx",
      component: ModelX,
      name: "Model X",
    },
    {
      path: "/cybertruck",
      component: Cybertruck,
      name: "Cybertruck",
    }
];

export default routes