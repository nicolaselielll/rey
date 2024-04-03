import gsap from 'gsap';

import { useTransitionState } from '../composables/usePageTransitionState';

const { toggleComplete, toggleOnEnter } = useTransitionState();

const pageTransition = {
    name: 'page-transition',
    mode: 'out-in',
    onLeave(el, done) {
        // Outgoing page
        toggleComplete(false)
        toggleOnEnter(false)
        done();
    },
    onEnter(el, done) {
        // New page
        toggleComplete(true)
        toggleOnEnter(true)
        done()
    },
};

export default pageTransition;                                                                                                      