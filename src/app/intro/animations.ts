import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger, group, animation
} from '@angular/animations';

// export const fadeFromLeftAnimation = animation([
//   style({
//      opacity: '{{ from }}',
//      transform: 'translate({{ X,Y }})',
//   }),
//   animate('{{ duration }}', style({ 
//     opacity: '{{ to }}',
//     transform: 'translate( X,Y)'
//   }))
// ], {params:{duration: '200ms ease-in', from: 0, to: 1, X: '-10vw',Y: '10vw'}})

export const fromLeftAnimTrigger = trigger('fromLeftAnim', [
  state('iv', style({ transform: 'translate(-14.5vw,2.25vw)' })),
  state('fadeIn', style({ transform: 'translate(0,2.25vw)' })),
  state('final',style('*')),
  state('exit',style( {opacity: 0})),

  transition('* => fadeIn', [
    animate(300)
  ]),
  transition('* => final', [
    animate(300)
  ]),
  transition('* => exit',[
    animate(300)
  ])
]);