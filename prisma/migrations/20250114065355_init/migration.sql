/*
  Warnings:

  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Product] ADD [description] NVARCHAR(1000) NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[ProductPriceHistory] (
    [id] INT NOT NULL IDENTITY(1,1),
    [productId] INT NOT NULL,
    [price] FLOAT(53) NOT NULL,
    [createdBy] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [ProductPriceHistory_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [ProductPriceHistory_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[ProductPriceHistory] ADD CONSTRAINT [ProductPriceHistory_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
