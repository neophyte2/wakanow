import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { getPageCountUtil } from 'src/app/shared/utils/utils';
import { ReqresService } from '../services/reqres-table.service';

@Component({
  selector: 'app-reqres-table',
  templateUrl: './reqres-table.component.html',
  styleUrls: ['./reqres-table.component.css']
})
export class ReqresTableComponent implements OnInit {

  tableData: any;
  tableLength: any;
  startNumber = 1;
  currentPage: number = 1;
  pageSize: any;
  meta = { pageNumber: 1, totalItems: 10 };


  constructor(public genSrv: GeneralService,
    private reqSrv: ReqresService) { }

  ngOnInit(): void {
    this.getReqresList(this.meta.pageNumber)
  }

  pageChanged(event: any) {
    this.meta.pageNumber = event.page;
    const { pageNumber } = this.meta;
    const option = { pageNumber, pageSize: this.pageSize };
    this.startNumber = event.page * this.pageSize - this.pageSize + 1;
    this.currentPage = event.page;
    this.getReqresList(event.page);
  }

  get getPageCount() {
    const { pageNumber } = this.meta;
    return getPageCountUtil({ pageSize: this.pageSize, pageNumber, dataLength: this.tableLength });
  }

  getReqresList(pageNo: any,) {
    this.reqSrv.getPaginatedTable(pageNo).subscribe((res: any) => {
      this.pageSize = res.per_page
      this.meta.totalItems = res.total;
      this.tableData = res.data
      this.tableLength = res.data.length
      console.log({ res: this.tableData });
    })
  }

}
