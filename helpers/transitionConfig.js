import gsap from 'gsap';

import { useTransitionState } from '../composables/useTransitionState';

const { toggleComplete, toggleOnEnter } = useTransitionState();

const pageTransition = {
    name: 'page-transition',
    mode: 'out-in', // Allow transitions to overlap
    onLeave(el, done) {
        // Do nothing with the outgoing page
        toggleComplete(false)
        toggleOnEnter(false)
        done();
    },
    onEnter(el, done) {
        // Fade in the new page over the current page
        toggleComplete(true)
        toggleOnEnter(true)
        done()
    },
};

export default pageTransition;                                                                                                      