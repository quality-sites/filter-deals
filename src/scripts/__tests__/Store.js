import Store from "../Store";
import mockData from "../../../public/db.json";

describe("filter", () => {

  it("should return all deals when no filters applied", () => {
    // Arrange
    const sut = new Store();
    sut.setDeals(mockData.deals);
    // Act
    const result = sut.deals;
    // Assert
    console.log('result', result.length);
    expect(result).toEqual(mockData.deals);
  });

  // - **WHEN** filtering by _broadband_ **THEN** show the **4** broadband only deals
  it("should return only broadband deals when broadband filter applied", () => {
    const sut = new Store();
    sut.setProductFilter('broadband');
    sut.setDeals(mockData.deals);
    const result = sut.deals;

    // forEach get all broadband deals
    const allData = mockData.deals;
    const broadbandDeals = [];
    allData.forEach(function(data) {
      if (data.productTypes.includes('Broadband')){
        broadbandDeals.push(data);
      }
    });
    expect(result.length).toEqual(broadbandDeals.length);
  });

  // - **WHEN** filtering by _broadband_ **AND** _tv_ **THEN** show the **4** deals for broadband and tv only
  it("should return only broadband and tv only deals when broadband and tv filter applied", () => {
    const sut = new Store();
    sut.setProductFilter('broadband');
    sut.setProductFilter('tv');
    sut.setDeals(mockData.deals);
    const result = sut.deals;

    const allData = mockData.deals;
    const broadbandAndTVDeals = [];
    allData.forEach(function(data) {
      if (data.productTypes.includes('Broadband') || data.productTypes.includes('TV')){
        broadbandAndTVDeals.push(data);
      }
    });
    expect(result.length).toEqual(broadbandAndTVDeals.length);
  });

  // - **WHEN** filtering by _broadband_ **AND** _mobile_ **THEN** show the **1** deal for broadband and mobile only
  it("should return only broadband and mobile only deals when broadband and mobile filter applied", () => {
    const sut = new Store();
    sut.setProductFilter('broadband');
    sut.setProductFilter('mobile');
    sut.setDeals(mockData.deals);
    const result = sut.deals;

    const allData = mockData.deals;
    const broadbandAndMobileDeals = [];
    allData.forEach(function(data) {
      if (data.productTypes.includes('Broadband') || data.productTypes.includes('Mobile')){
        broadbandAndMobileDeals.push(data);
      }
    });
    expect(result.length).toEqual(broadbandAndMobileDeals.length);
  });

  // - **WHEN** filtering by _Sky_ **THEN** show the **1** deal for Sky only
  it("should return sky only deals when sky filter applied", () => {
    const sut = new Store();
    sut.setProviderFilter('Sky');
    sut.setDeals(mockData.deals);
    const result = sut.deals;

    const allData = mockData.deals;
    const skyDeals = [];
    allData.forEach(function(data) {
      if (data.provider.name === 'Sky'){
        skyDeals.push(data);
      }
    });
    expect(result.length).toEqual(skyDeals.length);
  });

  // - **WHEN** filtering by _BT_, _broadband_ **AND** _tv_ **THEN** show the **2** deals for BT with broadband and tv only
  it("should return BT, broadband and TV deals when BT, broadband and TV filters applied", () => {
    const sut = new Store();
    sut.setProductFilter('broadband');
    sut.setProductFilter('tv');
    sut.setProviderFilter('BT');
    sut.setDeals(mockData.deals);
    const result = sut.deals;

    const allData = mockData.deals;
    const broadbandTVandBTDeals = [];
    allData.forEach(function(data) {
      if (data.productTypes.includes('Broadband') || data.productTypes.includes('TV')){
        broadbandTVandBTDeals.push(data);
      } else if (data.provider.name === 'BT'){
        broadbandTVandBTDeals.push(data);
      }
    });

    expect(result.length).toEqual(broadbandTVandBTDeals.length);
  });
});
