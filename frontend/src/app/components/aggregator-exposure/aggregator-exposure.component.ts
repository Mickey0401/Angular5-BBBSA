import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpService } from "../../services/http.service";
import { Borrower } from "../../models/borrower";

@Component({
	selector: 'app-aggregator-exposure',
	templateUrl: './aggregator-exposure.component.html',
	styleUrls: ['./aggregator-exposure.component.scss'],
	providers: [HttpService]
})
export class AggregatorExposureComponent implements OnInit {
	public displayedColumns: any[] = ['BorrowerName', 'AggregatorId', 'AggregatorClientId', 'ClientId', 'ConsolWBStartRow'];
  public dataSource: any = new MatTableDataSource<Borrower>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private httpSerivce: HttpService) {
	}

	ngOnInit() {
		this.httpSerivce.getBorrowers().subscribe(
			res => {
				const data: Borrower[] = res.data;
				this.dataSource = new MatTableDataSource<Borrower>(data);
    		this.dataSource.paginator = this.paginator;
			}
		)
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
  }
}