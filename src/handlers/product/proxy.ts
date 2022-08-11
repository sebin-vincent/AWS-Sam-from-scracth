import {
  gateway,
  MemoryStorageFactory,
  ProductResponse,
  ShopperCatalogResourcePage,
} from "@moltin/sdk";

export class ProductProxy {
  async getAllProducts() {
    const implicitGateway = gateway({
      client_id: "GfPaPvFGEHCgrRkEijMCa0YEpRuCAsSRryOKvOtmAG",
      storage: new MemoryStorageFactory(),
    });

    let shopperProductsResponse: ShopperCatalogResourcePage<ProductResponse>;

    try {
      shopperProductsResponse =
        await implicitGateway.ShopperCatalog.Products.All();
      console.log(JSON.stringify(shopperProductsResponse.meta.page));
    } catch (error) {
      console.log(error);
      throw error;
    }

    return shopperProductsResponse;
  }
}
