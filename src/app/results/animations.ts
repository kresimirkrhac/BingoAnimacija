import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger, group
} from '@angular/animations';

export const fadeInTrigger = trigger('fadeIn', [
  transition(':enter', [
    query('img', style({ opacity: 0, transform: 'translateX(15vw)' })),
    query('span', style({ opacity: 0, transform: 'translateX(100%)'})),
    group([
      query('img', [
        stagger(80, [
          animate('200ms 0ms ease-out', keyframes([
            style({
              opacity: 1,
              transform: 'translateX(7.5vw)',
              offset: 0.33
            }),
            style({
              opacity: 1,
              transform: 'translateX(2vw)',
              offset: 0.66
            }),
            style({
              opacity: 1,
              transform: 'translateX(0)',
              offset: 1
            })
          ]))
        ])
      ]),
      query('span', [
        stagger(80, [
          animate('400ms 200ms ease-out', keyframes([
            style({
              opacity: 1,
              transform: 'translateX(50%)',
              offset: 0.33
            }),
            style({
              opacity: 1,
              transform: 'translateX(15%)',
              offset: 0.66
            }),
            style({
              opacity: 1,
              transform: 'translateX(0)',
              offset: 1
            })
          ]))
        ])
      ])
    ])
  ])
]);