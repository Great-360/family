# TODO: Change Card Design to PersonCard

## Completed Steps
- [x] Create frontend/src/components/PersonCard.tsx with the provided PersonCard code, removing logger-related parts.
- [x] Update frontend/src/pages/FamilyTree.tsx:
  - [x] Import PersonCard.
  - [x] Remove the inline Card component.
  - [x] Update Person interface to remove 'role'.
  - [x] Update person data to use birthYear instead of role (assign sample years: father 1960, mother 1962, children 1990, grandchildren 2020).
  - [x] Replace Card usage with PersonCard, passing name, birthYear, image, variant, badge.
- [x] Update frontend/src/pages/Members.tsx:
  - [x] Import PersonCard.
  - [x] Remove the inline Card component.
  - [x] Update Person interface to remove 'role'.
  - [x] Update members data to use birthYear instead of role (assign sample years).
  - [x] Replace Card usage with PersonCard.
- [x] Update frontend/src/pages/Generations.tsx:
  - [x] Import PersonCard.
  - [x] Remove the inline Card component.
  - [x] Update Person interface to remove 'role'.
  - [x] Update generations members data to use birthYear instead of role (assign sample years).
  - [x] Replace Card usage with PersonCard.
- [x] Run the app to verify the new card design displays correctly.
- [x] Fixed backend Prisma import issue and started both frontend and backend servers.
- [x] Fixed frontend errors in Members.tsx and Generations.tsx: replaced 'role' with 'birthYear', changed Card to PersonCard, and fixed TypeScript variant types.
