import { Component, OnInit } from '@angular/core';
import * as SymbolSDK from 'symbol-sdk';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  // This privateKey is dummy privateKey
  privateKey: string =
    '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';
  network: SymbolSDK.NetworkType = SymbolSDK.NetworkType.TEST_NET;
  account: SymbolSDK.Account = SymbolSDK.Account.createFromPrivateKey(
    this.privateKey,
    this.network
  );
  plainAddress: string = this.account.address.plain();
  prettyAddress: string = this.account.address.pretty();

  constructor() {}

  ngOnInit(): void {}
}
