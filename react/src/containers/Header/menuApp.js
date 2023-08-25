export const adminMenu = [
    { //danh mục và sản phẩm
        name: 'menu.admin.catalog-product', 
        menus: [
            {
                name: 'menu.admin.catalog-manage', link: '/admin/catalog-manage'
            },
            {
                name: 'menu.admin.product-manage', link: '/admin/product-manage'
            },
        ]
    },
    { //khách hàng
        name: 'menu.admin.customer', 
        menus: [
            {
                name: 'menu.admin.customer-manage', link: '/admin/customer-manage'
            },
        ]
    },
    { //danh mục và sản phẩm
        name: 'menu.admin.order', 
        menus: [
            {
                name: 'menu.admin.order-manage', link: '/admin/order-manage'
            },
        ]
    },
    { //bán hàng
        name: 'menu.admin.sales', 
        menus: [
            {
                name: 'menu.admin.sales-statistics', link: '/admin/sales-statistics'
            },
        ]
    }
];