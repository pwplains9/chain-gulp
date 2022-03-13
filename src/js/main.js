import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import video from "./components/video";
import vars from "./helpers";
import theme from "./components/theme";
import line from "./components/line";
import {aosInit} from "./components/aos";

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
video.init(vars.$document);
theme.init();
line.init();
aosInit();
