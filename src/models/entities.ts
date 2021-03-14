declare namespace Components {
    namespace Schemas {
        export interface Customer {
            customerId?: number; // int32
            customerName?: string | null;
        }
        export interface FoodItem {
            foodItemId?: number; // int32
            foodItemName?: string | null;
            price?: number; // double
        }
        export interface OrderDetail {
            orderDetailId?: number; // int64
            orderMasterId?: number; // int64
            foodItemId?: number; // int32
            foodItem?: FoodItem;
            foodItemPrice?: number; // double
            quantity?: number; // double
        }
        export interface OrderMaster {
            orderMasterId?: number; // int64
            orderNumber?: string | null;
            customerId?: number; // int32
            customer?: Customer;
            paymentMethod?: string | null;
            total?: number; // double
            description?: string | null;
            orderDetails?: OrderDetail[] | null;
        }
        export interface WeatherForecast {
            date?: string; // date-time
            temperatureC?: number; // int32
            readonly temperatureF?: number; // int32
            summary?: string | null;
        }
    }
}
declare namespace Paths {
    namespace ApiCustomer {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.Customer[];
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.Customer;
            namespace Responses {
                export type $200 = Components.Schemas.Customer;
            }
        }
    }
    namespace ApiCustomer$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Customer;
            }
        }
        namespace Put {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.Customer;
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiFoodItem {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.FoodItem[];
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.FoodItem;
            namespace Responses {
                export type $200 = Components.Schemas.FoodItem;
            }
        }
    }
    namespace ApiFoodItem$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.FoodItem;
            }
        }
        namespace Put {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.FoodItem;
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiOrder {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.OrderMaster[];
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.OrderMaster;
            namespace Responses {
                export type $200 = Components.Schemas.OrderMaster;
            }
        }
    }
    namespace ApiOrder$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int64
            }
            export interface PathParameters {
                id: Parameters.Id /* int64 */;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int64
            }
            export interface PathParameters {
                id: Parameters.Id /* int64 */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.OrderMaster;
            }
        }
        namespace Put {
            namespace Parameters {
                export type Id = number; // int64
            }
            export interface PathParameters {
                id: Parameters.Id /* int64 */;
            }
            export type RequestBody = Components.Schemas.OrderMaster;
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace WeatherForecast {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.WeatherForecast[];
            }
        }
    }
}
