import { trigger, transition, style, query, group, animate, animateChild } from "@angular/animations";

export const fadeInOutAnimation = trigger(
    'fadeInOutAnimation',
    [
        transition(
            ':enter',
            [
                style({ opacity: 0 }),
                animate('250ms ease-out',
                    style({ opacity: 1 }))
            ]
        ),
        transition(
            ':leave',
            [
                style({ opacity: 1 }),
                animate('350ms ease-in',
                    style({ opacity: 0 }))
            ]
        )
    ]
)