export default function categoryForProductSelector(product, categories) {
  return categories.find(c => c.id === product.categoryId);
}
