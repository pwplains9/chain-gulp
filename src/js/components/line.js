import Vivus from 'vivus';
import vars from '../helpers';

function init() {
	let $graph = vars.$body.find('.roadmap__path svg');

	if (vars.isIE()) {
		return;
	}

	$graph.each((index, graph) => {
		new Vivus(graph,
			{
				type: 'delayed',
				duration: 300,
				animTimingFunction: Vivus.EASE_OUT,
			},
		);
	});
}

export default {
	init,
};
