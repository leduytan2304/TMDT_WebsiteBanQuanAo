export const adminMenu = [
    { //danh mục và sản phẩm
        name: 'menu.admin.catalog-product', 
        menus: [
            {
                name: 'menu.admin.catalog-manage', link: '/system/catalog-manage'
            },
            {
                name: 'menu.admin.product-manage', link: '/system/product-manage'
            },
        ]
    },
    { //khách hàng
        name: 'menu.admin.customer', 
        menus: [
            {
                name: 'menu.admin.customer-manage', link: '/system/customer-manage'
            },
        ]
    },
    { //danh mục và sản phẩm
        name: 'menu.admin.order', 
        menus: [
            {
                name: 'menu.admin.order-manage', link: '/system/order-manage'
            },
        ]
    },
    { //bán hàng
        name: 'menu.admin.sales', 
        menus: [
            {
                name: 'menu.admin.sales-statistics', link: '/system/sales-statistics'
            },
        ]
    }
];