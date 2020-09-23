export let GridConfigData = {
  columnDefs: [
    {
      headerName: 'Id',
      field: 'id',
      hide: true,
      serverFlag: true
    },
    {
      headerName: 'Name',
      field: 'name',
      hide: true,
      serverFlag: true
    },
    {
      headerName: 'Email',
      field: 'email',
      hide: true,
      serverFlag: true
    },
    {
      headerName: 'Edit',
      field: 'edit',
      width: 140,
      minWidth: 140,
      maxWidth: 150
    },
    {
      headerName: 'Delete',
      field: 'delete',
      width: 140,
      minWidth: 140,
      maxWidth: 150
    }
  ],
  gridOptions: {
    domLayout: 'autoHeight',
    pagination: true,
    paginationPageSize: 6,
    rowSelection: 'multiple',
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    suppressPropertyNamesCheck: true,
    enableBrowserTooltips: true
  }
};

// tslint:disable-next-line:max-line-length
export let GridInputData = [{ id: 1, name: 'sagar', email: 'dvsagar019@gmail.com' }, { id: 2, name: 'gautham', email: 'gautham@gmail.com' }, { id: 3, name: 'charan', email: 'charan@gmail.com' }];
