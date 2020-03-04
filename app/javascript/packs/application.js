import "bootstrap";
import $ from 'jquery';
import Typed from 'typed.js';
import { count } from "../plugins/count.js";
import { timeLine } from "../plugins/timeline.js";
import { skill } from "../plugins/skill.js";
import { animate } from "../plugins/formAnimation.js";
import { formAjax } from "../plugins/formAjax.js";
import { button } from "../plugins/download.js";
import { navbar } from "../plugins/navbar.js";
// import { card } from "../plugins/card.js";
import { acceuil } from "../plugins/acceuil.js";
import { preLoader } from "../plugins/preloader.js";
// import { openNav, closeNav } from "plugins/collapse.js";
import { type } from "../plugins/type.js";
import WOW from 'wow.js';


// call functions
count();
timeLine();
skill();
animate();
formAjax();
navbar();
// card();
acceuil();
preLoader();
// collapse();
// $("#userMenuBtn").click(openNav);
// $("#closeUserBtn").click(closeNav);
type();

new WOW().init();
