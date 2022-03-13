import vars from "../helpers";

const init = () => {
	const button = vars.$document.find('.header__switch');

	button.on('click', (e) => {
		if (!vars.$html.hasClass('is-white')) {
			vars.$html.addClass('is-white');
		} else {
			vars.$html.removeClass('is-white');
		}
	});
};

export default {
	init,
}
