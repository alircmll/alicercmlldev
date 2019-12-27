import "bootstrap";
import $ from 'jquery';
import { count } from "../plugins/count.js";
import { timeLine } from "../plugins/timeline.js";
import { skill } from "../plugins/skill.js";
import { animate } from "../plugins/formAnimation.js";
import { formAjax } from "../plugins/formAjax.js";
import { button } from "../plugins/download.js";
import { navbar } from "../plugins/navbar.js";
import { card } from "../plugins/card.js";


// call functions
count();
timeLine();
skill();
animate();
formAjax();
navbar();
card();

// progress
// (function($){
//         new WOW().init();
//     })(jQuery);

