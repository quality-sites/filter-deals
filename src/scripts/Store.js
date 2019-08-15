import Observable from "./Observable";

class Store extends Observable {
  constructor(deals) {
    super();      
    this.state = {
      deals: [],
      productFilters: [],
      providerFilter: null
    };
    if (deals){
      this.state.deals = deals;
    }
  }

  get deals() {
    return this.filter();
  }

  filter() {
      //let data = [];
      let final = [];
      const deals = this.state.deals;
      const productFilters = this.state.productFilters;
      const providerFilter = this.state.providerFilter;

      // If no product or provider selected then use deals data
      if (!productFilters || productFilters.length === 0 && !providerFilter){
        return deals;
      } else {
        deals.forEach(function(data) {
          if (productFilters && productFilters.length > 0){
            let dataCheck = false;
            data.productTypes.forEach(function(item){
              if (productFilters.includes(item.toLowerCase())){
                dataCheck = true;
              }
            });
            if(dataCheck){
              final.push(data);
            }
          } else if (data.provider.name === providerFilter){
            final.push(data);
          }
        });
      }
      return final;
  }

  setDeals(data) {
    this.state.deals = data;
    this.notify(this.state);
  }

  setProductFilter(value) {
    const filter = value.trim().toLowerCase();
    const index = this.state.productFilters.indexOf(filter);
    if (index === -1) {
      this.state.productFilters.push(filter);
    } else {
      this.state.productFilters.splice(index, 1);
    }
    this.notify(this.state);
  }

  setProviderFilter(value = null) {
    this.state.providerFilter = value;
    this.notify(this.state);
  }
}

export default Store;
