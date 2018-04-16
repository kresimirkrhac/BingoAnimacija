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
export const firstMessagesTrigger = trigger('firstMessages',[
  transition(':enter',[
    query('#firstMessageRow1',style({ opacity: 0 })),
    query('#firstMessageRow2',style({ opacity: 0 })),
    query('#firstMessageRow3',style({ opacity: 0 })),
    query('#firstMessageRow4',style({ opacity: 0 })),
    query('#firstMessageRow5',style({ opacity: 0 })),

    group([
      query('#firstMessageRow1',[
        animate('600ms ease-out', keyframes([
          style({ 
            opacity: 0.5, 
            transform: 'scale(1.5)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'scale(0.8)',
            offset: 0.75
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1
          })
        ]))
      ]),
      query('#firstMessageRow2',[
        animate('600ms 300ms ease-out', keyframes([
          style({ 
            opacity: 0.5, 
            transform: 'scale(1.5)',
            offset: 0
           }),
          style({
            opacity: 1,
            transform: 'scale(0.8)',
            offset: 0.75
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1
          })
        ]))
      ]),
      query('#firstMessageRow3, #firstMessageRow4',[
        animate('900ms 600ms', keyframes([
          style({ 
            opacity: 0.5, 
            transform: 'scale(0.2) rotate(-15deg)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'scale(1.5) rotate(0deg)',
            offset: 0.33
          }),
          style({
            opacity: 1,
            transform: 'scale(1.05) rotate(15deg)',
            offset: 0.66
          }),
          style({
            opacity: 1,
            transform: 'scale(1) rotate(0deg)',
            offset: 1
          })
        ]))
      ]),
      // query('#firstMessageRow4',[
      //   style({ opacity: 1, transform: 'scale(0.2) rotate(345deg)' }),
      //   animate('1400ms 240ms ease-out', keyframes([
      //     style({
      //       opacity: 1,
      //       transform: 'scale(1.05) rotate(5deg)',
      //       offset: 0.7
      //     })
      //   ]))
      // ]), 
      query('#firstMessageRow5',[
        animate('600ms 900ms ease-in', keyframes([
          style({ 
            opacity: 0.5, 
            transform: 'scale(1.5)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'scale(0.8)',
            offset: 0.75
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1
          })
        ]))
      ]),
    ])

    // query('#firstMessageRow2',style({ opacity: 0, transform: 'scale(1.5)' })),
    // query('#firstMessageRow3',style({ opacity: 0, transform: 'scale(0.2), rotate(355deg)' })),
    // query('#firstMessageRow4',style({ opacity: 0, transform: 'scale(0.2), rotate(355deg)' })),
    // query('#firstMessageRow5',style({ opacity: 0, transform: 'scale(1.5)' })),


/*    group([
      query('middleColumn',[
        stagger('80ms',[
          query('#firstMessageRow1',[
            animate('200ms ease-out', keyframes([
              style({
                transform: 'scale(0.95)',
                offset: 0.85
              })
            ]))
          ]),
          query('#firstMessageRow2',[
            animate('200ms ease-out', keyframes([
              style({
                transform: 'scale(0.95)',
                offset: 0.85
              })
            ]))
          ]),
          query('#firstMessageRow3, #firstMessageRow4',[
            animate('200ms ease-out', keyframes([
              style({
                transform: 'scale(1.05), rotate(5deg)',
                offset: 0.85
              })
            ]))
          ]),
          query('#firstMessageRow5',[
            animate('200ms ease-out', keyframes([
              style({
                transform: 'scale(0.95)',
                offset: 0.85
              })
            ]))
          ])
        ])
      ])
    ])*/
  ]),
  // transition(':leave',[
  // ])
]);