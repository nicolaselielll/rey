import gsap from 'gsap';
import { useStore } from '~/stores/store'

const { toggleComplete, toggleOnEnter, state } = usePageTransitionState()

let context = gsap.context((context) => {})

export const useTransition = () => {
    const store = useStore()
    const transition = {
        css: false,
        name: 'page-transition',
        mode: 'out-in',
        onBeforeEnter: (el) => {},
        onLeave: (el, done) => {
            context.add(() => {
                // Outgoing page
                toggleComplete(false)
                toggleOnEnter(false)
                done();
            })
        },
        onEnter: (el, done) => {
            context.add(() => {
                // New page
                toggleComplete(true)
                toggleOnEnter(true)
                done()
            })
        },
    };
    return transition
}