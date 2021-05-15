import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  privateKey: string =
    '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';
  network: number = 152;
  plainAddress: string = 'TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  prettyAddress: string = 'TAAAAA-AAAAAA-AAAAAA-AAAAAA-AAAAAA-AAAAAA-AAA';

  constructor() {}

  ngOnInit(): void {}
}
