import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger
} from '@angular/animations';

export const fadeInTrigger = trigger('fadeIn', [
  transition(':enter', [
    query('.ball', style({ opacity: 0, transform: 'scale(0)' })),
    query('.ball', [
      stagger(2000, [
        animate('2000ms 2500ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'scale(1.25)',
            offset: 0.25
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1
          })
        ]))
      ])
    ])
  ])
]);