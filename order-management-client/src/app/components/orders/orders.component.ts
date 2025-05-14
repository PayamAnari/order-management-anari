import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  AllCommunityModule,
  CellClickedEvent
} from 'ag-grid-community';
import { SideBarModule, CellSelectionModule, ColumnsToolPanelModule, AllEnterpriseModule
} from 'ag-grid-enterprise';

import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';
import { Order } from '../../models/order.model';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

ModuleRegistry.registerModules([
  AllCommunityModule,
  SideBarModule,
  CellSelectionModule,
  ColumnsToolPanelModule,
  AllEnterpriseModule
]);

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, AgGridAngular, ReactiveFormsModule, HttpClientModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  public isLoading = false;

  public columnDefs: ColDef[] = [
    { field: 'id', headerName: 'Order ID', sortable: true, filter: true },
    { field: 'customerName', headerName: 'Customer', sortable: true, filter: true },
    { field: 'orderDate', headerName: 'Order Date', sortable: true, filter: true },
    { field: 'status', headerName: 'Status', sortable: true, filter: true },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',
      valueGetter: (params) =>
        (params.data?.quantity ?? 0) * (params.data?.price ?? 0),
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'Actions',
      cellRenderer: () => `<button class="btn-view" data-action="view">View</button>`,
      width: 100,
      sortable: false
    }
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  public rowData: Order[] = [];
  public gridApi!: GridApi;
  public orderForm!: FormGroup;
  public isFormVisible = false;
  public error: string | null = null;
  public message: string | null = null;
  public selectedOrder: Order | null = null;
  public isModalVisible = false;


  private messageSubscription?: Subscription;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/signin']);
      } else {
        this.loadOrders();
      }
    });

    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      product: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      status: ['New', Validators.required],
      orderDate: [new Date().toISOString().split('T')[0], Validators.required],
    });

    this.messageSubscription = this.orderService.message$.subscribe((msg) => {
      this.message = msg;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.message = null;
        this.cdr.detectChanges();
      }, 3000);
    });
  }

  ngOnDestroy() {
    this.messageSubscription?.unsubscribe();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;

    this.gridApi.addEventListener('cellClicked', (event: CellClickedEvent) => {
      const nativeEvent = event.event;
      if (nativeEvent instanceof MouseEvent) {
        const target = nativeEvent.target as HTMLElement;
        if (target?.dataset['action'] === 'view') {
          this.openOrderModal(event.data);
        }
      }
    });

    this.loadOrders();
  }

  loadOrders() {
    this.isLoading = true;
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.rowData = orders;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isLoading = false;
        this.message = 'Failed to load orders';
        if (err.status === 401) {
          this.authService.signout().subscribe(() => this.router.navigate(['/signin']));
        }
        setTimeout(() => {
          this.message = null;
          this.cdr.detectChanges();
        }, 3000);
      }
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe({
        next: () => {
          this.loadOrders();
          this.orderForm.reset({
            customerName: '',
            product: '',
            quantity: '',
            price: '',
            status: 'New',
            orderDate: new Date().toISOString().split('T')[0],
          });
          this.isFormVisible = false;
          this.error = null;
        },
        error: (err) => {
          this.error = err.status === 401 ? 'Unauthorized' : 'Failed to create order';
          this.message = this.error;
          setTimeout(() => {
            this.message = null;
            this.cdr.detectChanges();
          }, 3000);
        },
      });
    }
  }

  exportToCsv() {
    if (this.gridApi) {
      this.gridApi.exportDataAsCsv();
      this.message = 'CSV exported successfully!';
      this.cdr.detectChanges();
      setTimeout(() => {
        this.message = null;
        this.cdr.detectChanges();
      }, 3000);
    }
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  openOrderModal(order: Order) {
    this.selectedOrder = order;
    this.isModalVisible = true;
  }

  closeModal() {
    this.selectedOrder = null;
    this.isModalVisible = false;
  }

  get selectedOrderTotal(): number {
    return (this.selectedOrder?.quantity ?? 0) * (this.selectedOrder?.price ?? 0);
  }
}
