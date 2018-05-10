import {
  trigger,  state,  style,  transition,  animate,  keyframes,  query,  stagger, group, animateChild
} from '@angular/animations';

export const routeStateTrigger = trigger('routeState', [
  transition('introPage => drawPage', [
    group([
      query(':leave',[
        style({opacity: 0.4}),
        animate('0ms ease-out', style({opacity: 0})),
      ], {optional: true}),
      query(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({opacity: 1}))
      ], {optional: true})
    ])
  ]),
  transition('drawPage => resultsPage', [
    group([
      query(':leave',[
        animate('600ms ease-out', style({opacity: 0}))
      ], {optional: true}),
      query(':enter', [
        style({ opacity: 0 }),
        animate('1200ms ease-in', style({opacity: 1}))
      ], {optional: true}),
      query('@fadeIn', [
        animateChild()
      ], {optional: true})
    ])
  ]),
  transition('resultsPage => introPage', [
    group([
      query(':leave',[
        animate('600ms ease-out', style({opacity: 0}))
      ], {optional: true}),
      query(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({opacity: 1}))
      ], {optional: true})
    ])
  ])
]);