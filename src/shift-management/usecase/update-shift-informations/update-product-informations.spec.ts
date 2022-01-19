describe('Unit test | Use case | update product information', () => {
  describe('update the some field of a produict', () => {
    it('update the product with new information provided', () => {
      // given
      const id = 'db431106-b773-4e8c-b74a-66af9cb02ef4';
      const newProductFieldsValue: Record<string, any> = {
        name: 'tomato',
        price: 345,
      };

      /*const command = UpdateProductInformationsCommand(newProductFieldsValue);

      const updateProductInformationUseCase =
        new UpdateProductInformationsUseCase();

      // when
      const udpatedProduct = await updateProductInformationUseCase.handle(
        command,
      );
      // then

      expect(udpatedProduct).toEqual({});*/
    });
  });
});
