/* tslint:disable:member-ordering */
import {
  AnimationPlayer,
  AnimationBuilder,
  AnimationMetadata,
  animate,
  style,
} from '@angular/animations';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[spinningDataLoader]',
})
export class SpinningDataLoader implements OnInit {
  player: AnimationPlayer;
  constructor(private builder: AnimationBuilder, private el: ElementRef) {}

  private rotate(): AnimationMetadata[] {
    const times = 100000;
    const rotate = 360 * times;
    return [
      style({
        transform: 'rotate(' + rotate + 'deg)',
        'transform-origin': 'center',
      }),
      animate(times * 1.8 + 's ease-out'),
    ];
  }

  ngOnInit() {
    const factory = this.builder.build(this.rotate());
    var player = factory.create(this.el.nativeElement);

    player.onDone(() => {
      player.restart();
    });

    player.play();
  }
}
