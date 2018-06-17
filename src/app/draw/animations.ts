import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger, group
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
export const fadeInTriggerBall = trigger('fadeInBall', [
  transition(':enter', [
    // rotate(35deg) rotateY(62deg) scale(0.7) translateX(25.5vw) skew(-7deg, 7deg)
    group([
      animate('400ms ease-out', keyframes([
        style({
          opacity: 0.5,
          transform: 'scale(0.1) translate(0,0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'scale(0.4) translate(50%,60%)',
          offset: 0.33
        }),
        style({
          opacity: 1,
          transform: 'scale(0.75) translate(25%,20%)',
          offset: 0.66
        }),
        style({
          opacity: 1,
          transform: 'scale(1)  translate(0,0)',
          offset: 1
        })
      ])),
      query('.circle-inner', [
        animate('400ms ease-out', keyframes([
          style({
            opacity: 0,
            transform: 'rotate(35deg) rotateY(62deg) scale(0.5) translateX(22.5vw) skew(-7deg, 7deg)',
            offset: 0
          }),
          style({
            opacity: 0,
            transform: 'rotate(35deg) rotateY(62deg) scale(0.4) translateX(22.5vw) skew(-7deg, 7deg)',
            offset: 0.65
          }),
          style({
            opacity: 1,
            transform: 'rotate(35deg) rotateY(62deg) scale(0.4) translateX(22.5vw) skew(-7deg, 7deg)',
            offset: 0.66
          }),
          style({
            opacity: 1,
            transform: 'rotate(0deg) rotateY(0deg) scale(1) translateX(0vw) skew(0deg, 0deg)',
            offset: 1
          })
        ]))
      ])
    ])
  ])
]);