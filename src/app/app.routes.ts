import { Routes } from '@angular/router';
import { SearchBusComponent } from './pages/search-bus/search-bus.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { BookTicketComponent } from './pages/book-ticket/book-ticket.component';
import { BookingsListComponent } from './pages/bookings-list/bookings-list.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "search",
        pathMatch: "full"
    },
    {
        path: "search",
        component: SearchBusComponent
    },
    {
        path: "search-result",
        component: SearchResultComponent
    },
    {
        path: "book-ticket",
        component: BookTicketComponent
    },
    {
        path: "bookings-list",
        component: BookingsListComponent
    }
];
