import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger, group, animateChild
} from '@angular/animations';

export const routeStateTrigger = trigger('routeState', [
  transition('* <=> *', [
    // style({height: '!'}),
    // query(':enter',style({transform: 'translateX(100%)'})),
    // query(':enter, :leave',style({
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0
    // })),
    group([
      // query(':leave',[
      //   // style({ transform: 'translateX(0)' }),
      //   animate('1000ms ease-out', style({transform: 'translateX(-100%)'}))
      // ], {optional: true}),
      query(':enter', [
        style({ opacity: 0.1 }),
        animate('1000ms ease-out',style({opacity: 1}))
        // style({transform: 'translateX(-100%)'}),
        // animate('1000ms ease-out',style({transform: 'translateX(0)'}))
      ], {optional: true}),
      query('@fadeIn', [
        animateChild()
      ], {optional: true})
    ])
  ])
]);