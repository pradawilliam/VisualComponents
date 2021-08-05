import Button from "./components/button";
import Navbar from "./components/navbar";
import Card from "./components/card";
import { fetchwrapper } from "./fetch/fetch-wrapper";

window.fetchwrapper = {
  Button: Button,
  Navbar: Navbar,
  Card: Card,
  fetchwrapper: fetchwrapper,
};
