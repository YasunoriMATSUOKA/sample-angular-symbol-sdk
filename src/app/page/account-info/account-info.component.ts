import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as SymbolSDK from 'symbol-sdk';
import { RepositoryFactoryHttp } from 'symbol-sdk';

const nodeUrl = 'http://symbol-sakura-16.next-web-technology.com:3000';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  rawAddress: string = 'NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA';
  network: SymbolSDK.NetworkType = SymbolSDK.NetworkType.MAIN_NET;
  address: SymbolSDK.Address = SymbolSDK.Address.createFromRawAddress(
    this.rawAddress
  );
  repositoryFactoryHttp = new RepositoryFactoryHttp(nodeUrl);
  accountHttp = this.repositoryFactoryHttp.createAccountRepository();
  accountInfo$: Observable<SymbolSDK.AccountInfo> =
    this.accountHttp.getAccountInfo(this.address);

  constructor() {}

  ngOnInit(): void {
    this.accountInfo$.subscribe(
      (accountInfo) => {
        console.log(accountInfo);
        accountInfo.importance.toString();
        accountInfo.mosaics[0].amount.toString();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
