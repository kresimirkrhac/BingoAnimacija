import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger
} from '@angular/animations';

export const fadeInTrigger = trigger('fadeIn', [
  state('iv', style({ // invisible 
    transform: 'scale(0)',
    opacity: 0
  })),
  state('vis', style({ // visible
    transform: 'scale(1)',
    opacity: 1
  })),
  transition('iv => vis',
    animate('620ms ease-out', keyframes([
      style({
        opacity: 0.9,
        offset: 0.1
      }),
      style({
        opacity: 1,
        transform: 'scale(1.25)',
        offset: 0.6
      }),
      style({
        opacity: 1,
        transform: 'scale(0.9)',
        offset: 0.85
      }),
      style({
        opacity: 1,
        transform: 'scale(1.05)',
        offset: 0.92
      })
    ]))
  )
]);