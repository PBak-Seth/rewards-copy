export const paginate = (items, pageSize, pageNumber) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const hasNextPage = endIndex < items.length;
  const hasPreviousPage = startIndex > 0;
  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    paginatedItems,
    pagination: {
      hasNextPage,
      hasPreviousPage,
    },
  };
};
