import "bootstrap";
import $ from 'jquery';
import { count } from "../plugins/stats.js";
import { timeLine } from "../plugins/timeline.js";
import { skill } from "../plugins/skill.js";
import { animate } from "../plugins/formAnimation.js";
import { formAjax } from "../plugins/formAjax.js";
import { button } from "../plugins/download.js";


// call functions
count();
timeLine();
skill();
animate();
formAjax();
button();

// progress
// (function($){
//         new WOW().init();
//     })(jQuery);

