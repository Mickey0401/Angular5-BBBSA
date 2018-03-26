import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { GraphComponent } from "./components/graph/graph.component";
import { AggregatorExposureComponent } from "./components/aggregator-exposure/aggregator-exposure.component";


const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'summary', component: SummaryComponent },
	{ path: 'graph', component: GraphComponent },
	{ path: 'aggregator-exposure', component: AggregatorExposureComponent },
	// { path: 'graph', component: GraphComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home' }
]

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [RouterModule]
})

export class AppRoutingModule { }