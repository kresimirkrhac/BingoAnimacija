import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger, group, animation
} from '@angular/animations';

export const fadeFromLeftAnimation = animation([
  style({
     opacity: '{{ from }}',
     transform: 'translate({{ X,Y }})',
  }),
  animate('{{ duration }}', style({ 
    opacity: '{{ to }}',
    transform: 'translate( X,Y)'
  }))
], {params:{duration: '200ms ease-in', from: 0, to: 1, X: '-10vw',Y: '10vw'}})

export const fadeInFirstTrigger = trigger('fadeInFirst', [
  transition('iv => vis', [
    group([
      query('.first7 > img', [
        stagger(80, [
          animate('200ms 0ms ease', keyframes([
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
      ], { optional: true, limit: 6 }),
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