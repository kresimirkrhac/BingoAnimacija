import {
  trigger, state, style, transition, animate, keyframes, query, stagger, group, animation
} from '@angular/animations';

export const fromLeftAnimTrigger = trigger('fromLeftAnim', [
  state('iv', style({ transform: 'translate(-14.5vw,3.25vw)' })),
  state('fadeIn', style({ transform: 'translate(0,3.25vw)' })),
  // state('final', style('*')),
  state('exit', style({ opacity: 0 })),

  transition('* => fadeIn', [
    animate(300)
  ]),
  transition('* => final', [
    animate(300)
  ]),
  transition('* => exit', [
    animate(300)
  ])
]);
export const firstMessagesTrigger = trigger('firstMessages', [
  transition(':enter', [
    query('#firstMessageRow1,#firstMessageRow2,#firstMessageRow3,#firstMessageRow4,#firstMessageRow5', style({ opacity: 0 })),

    group([
      query('#firstMessageRow1', [
        animate('600ms ease-out', keyframes([
          style({
            opacity: 0.6,
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
      query('#firstMessageRow2', [
        animate('600ms 300ms ease-out', keyframes([
          style({
            opacity: 0.6,
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
      query('#firstMessageRow3, #firstMessageRow4', [
        animate('1200ms 600ms', keyframes([
          style({
            opacity: 0.5,
            transform: 'scale(0.2) rotate(-20deg)',
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
      query('#firstMessageRow5', [
        animate('2400ms 1000ms ease-in', keyframes([
          style({
            opacity: 0.6,
            transform: 'scale(1.5)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'scale(0.8)',
            offset: 0.2
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 0.25
          }),
          style({
            opacity: 1,
            offset: 0.49
          }),
          style({
            opacity: 0.1,
            offset: 0.5
          }),
          style({
            opacity: 0.1,
            offset: 0.59
          }),
          style({
            opacity: 1,
            offset: 0.6
          }),
          style({
            opacity: 1,
            offset: 0.69
          }),
          style({
            opacity: 0.1,
            offset: 0.7
          }),
          style({
            opacity: 0.1,
            offset: 0.79
          }),
          style({
            opacity: 1,
            offset: 0.8
          }),
          style({
            opacity: 1,
            offset: 0.89
          }),
          style({
            opacity: 0.1,
            offset: 0.9
          }),
          style({
            opacity: 0.1,
            offset: 0.99
          }),
          style({
            opacity: 1,
            offset: 1
          })
        ]))
      ])
    ])
  ]),
  transition(':leave', [
    group([
      query('#firstMessageRow1,#firstMessageRow2,#firstMessageRow5', [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(10vw,0)',
            offset: 0.75
          }),
          style({
            opacity: 0,
            transform: 'translate(20vw,0)',
            offset: 1
          })
        ]))
      ]),
      query('#firstMessageRow3,#firstMessageRow4', [
        animate('500ms 100ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(-10vw,0)',
            offset: 0.5
          }),
          style({
            opacity: 0,
            transform: 'translate(-20vw,0)',
            offset: 1
          })
        ]))
      ])
    ])
  ])
])

export const secondMessagesTrigger = trigger('secondMessages', [
  transition(':enter', [
    query('#secondMessageRow1,#secondMessageRow2', style({ opacity: 0 })),
    query('#secondMessageRow3,#secondMessageRow4', style({ opacity: 0 })),
    query('#secondMessageRow1', animate('200ms ease-in', style({ opacity: 1 }))),
    query('#secondMessageRow2', animate('200ms 150ms ease-in', style({ opacity: 1 }))),
    query('#secondMessageRow3', [
      animate('500ms 300ms', keyframes([
        style({
          opacity: 0.2,
          transform: 'rotate(35deg)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'rotate(0deg)',
          offset: 0.33
        }),
        style({
          opacity: 1,
          transform: 'rotate(-25deg)',
          offset: 0.5
        }),
        style({
          opacity: 1,
          transform: 'rotate(0deg)',
          offset: 1
        })
      ]))
    ]),
    query('#secondMessageRow4', [
      animate('500ms 600ms', keyframes([
        style({
          opacity: 0.2,
          transform: 'rotate(35deg)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'rotate(0deg)',
          offset: 0.33
        }),
        style({
          opacity: 1,
          transform: 'rotate(-25deg)',
          offset: 0.5
        }),
        style({
          opacity: 1,
          transform: 'rotate(0deg)',
          offset: 1
        })
      ]))
    ])
  ]),
  transition(':leave', [
    group([
      query('#secondMessageRow1,#secondMessageRow2', [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(0,-10vw)',
            offset: 0.75
          }),
          style({
            opacity: 0,
            transform: 'translate(0,-20vw)',
            offset: 1
          })
        ]))
      ]),
      query('#secondMessageRow3,#secondMessageRow4', [
        animate('500ms 100ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(0,10vw)',
            offset: 0.5
          }),
          style({
            opacity: 0,
            transform: 'translate(0,20vw)',
            offset: 1
          })
        ]))
      ])
    ])
  ])
])

export const imagesTrigger = trigger('images', [
  transition(':enter', [
    query('.field', style({ opacity: 0 })),
    query('img', style({ opacity: 0, transform: 'translateX(10vw)' })),
    query('p', style({ opacity: 0, transform: 'translateX(100%)' })),
    group([
      query('.field', [
        stagger(300, [
          animate('800ms ease-in', style({
            opacity: 1
          }))
        ])
      ]),
      query('img', [
        stagger(80, [
          animate('200ms 200ms ease-out', keyframes([
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
      query('p', [
        stagger(80, [
          animate('400ms 400ms ease-out', keyframes([
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
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ opacity: 0}))
  ])
]);

export const minuteTrigger = trigger('minute', [
  transition(':enter', [
    style({ transform: 'translate(-50vw,25vw) rotateZ(335deg)'}),
    animate('400ms ease-in'),
    query('.minRow2',[
      animate('1200ms',keyframes([
        style({
          opacity: 1,
          offset: 0
        }),
        style({
          opacity: 1,
          offset: 0.49
        }),
        style({
          opacity: 0.1,
          offset: 0.5
        }),
        style({
          opacity: 0.1,
          offset: 0.59
        }),
        style({
          opacity: 1,
          offset: 0.6
        }),
        style({
          opacity: 1,
          offset: 0.69
        }),
        style({
          opacity: 0.1,
          offset: 0.7
        }),
        style({
          opacity: 0.1,
          offset: 0.79
        }),
        style({
          opacity: 1,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 0.89
        }),
        style({
          opacity: 0.1,
          offset: 0.9
        }),
        style({
          opacity: 0.1,
          offset: 0.99
        }),
        style({
          opacity: 1,
          offset: 1
        })
      ]))
    ])
  ]),
  transition(':leave', [
    animate('500ms ease-in',style({ transform: 'translate(100vw,-55vw) rotateZ(335deg)'}))
  ]),
]);

export const thirdhMessagesTrigger = trigger('thirdhMessages', [
  transition(':enter', [
    query('#thirdMessageRow2,#thirdMessageRow3,#thirdMessageRow4', style({ opacity: 0})),
    query('#thirdMessageRow1', [
      animate('600ms ease-out', keyframes([
        style({
          opacity: 0.6,
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
    query('#thirdMessageRow2', [
      animate('600ms ease-out', keyframes([
        style({
          opacity: 0.6,
          transform: 'translate(15vw,0)',
          offset: 0
        }),
        style({
          opacity: 1,
          transform: 'translate(0,0)',
          offset: 0.75
        }),
        style({
          opacity: 1,
          transform: 'scaleX(0.9) translateX(-2vw)',
          offset: 0.85
        }),
        style({
          opacity: 1,
          transform: 'scaleX(1)',
          offset: 1
        })
      ]))
    ]),
    group([
      query('#thirdMessageRow3', [
        animate('900ms 300ms ease-out', keyframes([
          style({
            opacity: 0.6,
            transform: 'scale(0.5)',
            offset: 0
          }),
          style({
            opacity: 0.8,
            transform: 'scale(1.5)',
            offset: 0.25
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 0.5
          }),
          style({
            opacity: 1,
            transform: 'scaleY(0.8) translateY(-2vw)',
            offset: 0.75
          }),
          style({
            opacity: 1,
            transform: 'scaleY(1) translateY(0)',
            offset: 1
          })
        ]))
      ]),
      query('#thirdMessageRow4', [
        animate('600ms 600ms ease-out', keyframes([
          style({
            opacity: 0.6,
            transform: 'translateY(8vw)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'translateY(-2vw)',
            offset: 0.5
          }),
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 1
          })
        ]))
      ])
    ])
  ]),
  transition(':leave', [
    group([
      query('#thirdMessageRow2', [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(10vw)',
            offset: 0.5
          }),
          style({
            opacity: 0,
            transform: 'translate(20vw)',
            offset: 1
          })
        ]))
      ]),
      query('#thirdMessageRow1', [
        animate('500ms 50ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(-10vw)',
            offset: 0.75
          }),
          style({
            opacity: 0,
            transform: 'translate(-20vw)',
            offset: 1
          })
        ]))
      ]),
      query('#thirdMessageRow3', [
        animate('250ms 100ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(10vw)',
            offset: 0.5
          }),
          style({
            opacity: 0,
            transform: 'translate(10vw)',
            offset: 1
          })
        ]))
      ]),
      query('#thirdMessageRow4', [
        animate('200ms 120ms ease-out', keyframes([
          style({
            opacity: 0.3,
            transform: 'translate(-10vw)',
            offset: 0.75
          }),
          style({
            opacity: 0,
            transform: 'translate(-20vw)',
            offset: 1
          })
        ]))
      ])
    ])
  ])
])

export const fourthMessagesTrigger = trigger('fourthMessages', [
  transition(':enter', [
    query('#fourthMessageRow1', style({ opacity: 0, transform: 'translateY(-4vw)' })),
    query('#fourthMessageRow2', style({ opacity: 0, transform: 'translateX(-6vw)' })),
    query('#fourthMessageRow3', style({ opacity: 0, transform: 'translateX(10vw)' })),
    query('#fourthMessageRow4', style({ opacity: 0, transform: 'scale(0.3)' })),
    query('#fourthMessageRow5', style({ opacity: 0, transform: 'scale(1.4)' })),
    query('#fourthMessageRow1', animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))),
    query('#fourthMessageRow2,#fourthMessageRow3', animate('240ms 150ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))),
    query('#fourthMessageRow4', animate('250ms 300ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))),
    query('#fourthMessageRow5', animate('200ms 350ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))),
  ]),
  transition(':leave', [
    query('.middleColumn',
      animate('500ms ease-out',style({ opacity: 0 })))
  ])
])

export const fivethhMessagesTrigger = trigger('fivethhMessages', [
  transition(':enter', [
    query('.middleColumn', style({ opacity: 0 })),
    query('.middleColumn', stagger(300, [
      style({ transform: 'scale(0.7)' }),
      animate('300ms ease-in', style({
        opacity: 1,
        transform: 'scale(1.4)'
      })),
      animate(200)
    ]))
  ]),
  transition(':leave', [
    group([
      query('#fivethMessageRow1', animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-4vw)' }))),
      query('#fivethMessageRow4', animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(4vw)' }))),
      query('#fivethMessageRow2', animate('300ms 240ms ease-out', style({ opacity: 0, transform: 'translateY(-4vw)' }))),
      query('#fivethMessageRow3', animate('300ms 240ms ease-out', style({ opacity: 0, transform: 'translateY(4vw)' }))),
    ])
  ])
])

export const sixthMessagesTrigger = trigger('sixthMessages', [
  transition(':enter', [
    query('#sixthMessageRow1,#sixthMessageRow2,#sixthMessageRow4', style({ transform: 'translateX(40vw)'  })),
    query('#sixthMessageRow3', style({ transform: 'translateX(-40vw)' })),
    group([
      query('#sixthMessageRow1,#sixthMessageRow2,#sixthMessageRow4', animate('300ms ease-in',style({ transform: 'translateX(-5vw)' }))),
      query('#sixthMessageRow3', animate('240ms ease-in',style({ transform: 'translateX(5vw)' }))),
    ]),
    animate(80),
    query('.middleColumn', stagger(120, [ animate(120) ]))
  ]),
  transition(':leave', [
    group([
      query('#sixthMessageRow4', animate('320ms ease-out',style({ transform: 'translateY(4vw)', opacity: 0 }))),
      query('#sixthMessageRow3', animate('280ms 100ms ease-out',style({ transform: 'translateY(8vw)', opacity: 0 }))),
      query('#sixthMessageRow2', animate('240ms 200ms ease-out',style({ transform: 'translateY(17vw)', opacity: 0 }))),
      query('#sixthMessageRow1', animate('200ms 300ms ease-out',style({ transform: 'translateY(25vw)', opacity: 0 }))),
    ])
  ])
])

export const seventhMessagesTrigger = trigger('seventhMessages', [
  transition(':enter', [
    query('#seventhMessageRow1,#seventhMessageRow2,#seventhMessageRow3,#seventhMessageRow4', style({ transform: 'translateY(-20vw)' })),
    query('#seventhMessageRow5', style({ transform: 'translateY(20vw)' })),
    query('#seventhMessageRow6', style({ transform: 'scale(1.7)', opacity: 0 })),

    group([
      query('#seventhMessageRow4', animate('300ms ease-in', style({ transform: 'translateY(0)'}))),
      query('#seventhMessageRow3', animate('300ms 60ms ease-in', style({ transform: 'translateY(0)'}))),
      query('#seventhMessageRow2', animate('300ms 140ms ease-in', style({ transform: 'translateY(0)'}))),
      query('#seventhMessageRow1', animate('300ms 200ms ease-in', style({ transform: 'translateY(0)'}))),
      query('#seventhMessageRow6', animate('500ms 100ms ease-in',style({transform: 'scale(1)', opacity: 1 }))),
      query('#seventhMessageRow5', animate('500ms 160ms ease-in', style({ transform: 'translateY(0)'}))),
    ])
  ]),
  transition(':leave', [
    group([
      query('#seventhMessageRow1', animate('240ms ease-out',style({ transform: 'translateX(15vw)', opacity: 0 }))),
      query('#seventhMessageRow2', animate('200ms 80ms ease-out',style({ transform: 'translateX(-15vw)', opacity: 0 }))),
      query('#seventhMessageRow3', animate('180ms 160ms ease-out',style({ transform: 'translateX(15vw)', opacity: 0 }))),
      query('#seventhMessageRow4', animate('140ms 240ms ease-out',style({ transform: 'translateX(-15vw)', opacity: 0 }))),
      query('#seventhMessageRow5', animate('140ms 300ms ease-out',style({ transform: 'translateX(15vw)', opacity: 0 }))),
      query('#seventhMessageRow6', animate('140ms 360ms ease-out',style({ transform: 'translateX(-15vw)', opacity: 0 }))),
    ])
  ])
])

export const eighthMessagesTrigger = trigger('eighthMessages', [
  transition(':enter', [
    query('#eighthMessagesRow1', style({ transform: 'translateX(-20vw)', opacity: 0 })),
    query('#eighthMessagesRow2', style({ transform: 'translateX(20vw)', opacity: 0 })),

    query('#eighthMessagesRow1,#eighthMessagesRow2', animate('300ms 140ms ease-in', style({ transform: 'translateY(0)', opacity: 1 })))
  ]),
  transition(':leave', [
    query('#eighthMessagesRow1,#eighthMessagesRow2', animate('500ms ease-out',style({ opacity: 0 })))
  ])
])

export const halfminuteTrigger = trigger('halfminute', [
  transition(':enter', [
    style({ transform: 'translate(-50vw,25vw) rotateZ(335deg)'}),
    animate('400ms ease-in'),
    query('#secRow2',[
      animate('1200ms',keyframes([
        style({
          opacity: 1,
          offset: 0
        }),
        style({
          opacity: 1,
          offset: 0.49
        }),
        style({
          opacity: 0.1,
          offset: 0.5
        }),
        style({
          opacity: 0.1,
          offset: 0.59
        }),
        style({
          opacity: 1,
          offset: 0.6
        }),
        style({
          opacity: 1,
          offset: 0.69
        }),
        style({
          opacity: 0.1,
          offset: 0.7
        }),
        style({
          opacity: 0.1,
          offset: 0.79
        }),
        style({
          opacity: 1,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 0.89
        }),
        style({
          opacity: 0.1,
          offset: 0.9
        }),
        style({
          opacity: 0.1,
          offset: 0.99
        }),
        style({
          opacity: 1,
          offset: 1
        })
      ]))
    ])
  ]),
  transition(':leave', [
    animate('500ms ease-in',style({ transform: 'translate(100vw,-55vw) rotateZ(335deg)'}))
  ]),
]);

export const lastTrigger = trigger('last', [
  transition(':enter', [
    style({ transform: 'translate(-50vw,25vw) rotateZ(335deg)'}),
    animate('400ms ease-in'),
    query('#lastRow3',[
      animate('1200ms',keyframes([
        style({
          opacity: 1,
          offset: 0
        }),
        style({
          opacity: 1,
          offset: 0.49
        }),
        style({
          opacity: 0.1,
          offset: 0.5
        }),
        style({
          opacity: 0.1,
          offset: 0.59
        }),
        style({
          opacity: 1,
          offset: 0.6
        }),
        style({
          opacity: 1,
          offset: 0.69
        }),
        style({
          opacity: 0.1,
          offset: 0.7
        }),
        style({
          opacity: 0.1,
          offset: 0.79
        }),
        style({
          opacity: 1,
          offset: 0.8
        }),
        style({
          opacity: 1,
          offset: 0.89
        }),
        style({
          opacity: 0.1,
          offset: 0.9
        }),
        style({
          opacity: 0.1,
          offset: 0.99
        }),
        style({
          opacity: 1,
          offset: 1
        })
      ]))
    ])
  ]),
  transition(':leave', [
    animate('500ms ease-in',style({ transform: 'translate(100vw,-55vw) rotateZ(335deg)'}))
  ]),
]);